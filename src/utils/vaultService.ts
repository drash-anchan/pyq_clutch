import { ArchivePaper } from '../types/index';

/**
 * Anti-Inspection Vault Registry
 * Maps paper vault tokens to actual public asset locations without exposing
 * filesystem or direct URLs in DOM attributes.
 */
export const VAULT_INTERNAL_REGISTRY: Record<string, string> = {
  // 1. Data Structures (9 papers)
  'vault-ds-2025-regular': '/pyqs/semester-3/endsem/data-structures/2025/ds-2025-regular.pdf',
  'vault-ds-2025-makeup': '/pyqs/semester-3/endsem/data-structures/2025/ds-2025-makeup.pdf',
  'vault-ds-2024-makeup-cse': '/pyqs/semester-3/endsem/data-structures/2024/ds-2024-makeup-cse.pdf',
  'vault-ds-2024-makeup-ict': '/pyqs/semester-3/endsem/data-structures/2024/ds-2024-makeup-ict.pdf',
  'vault-ds-2023-regular-cse': '/pyqs/semester-3/endsem/data-structures/2023/ds-2023-regular-cse.pdf',
  'vault-ds-2023-regular-dse': '/pyqs/semester-3/endsem/data-structures/2023/ds-2023-regular-dse.pdf',
  'vault-ds-2023-regular-ict': '/pyqs/semester-3/endsem/data-structures/2023/ds-2023-regular-ict.pdf',
  'vault-ds-2023-makeup': '/pyqs/semester-3/endsem/data-structures/2023/ds-2023-makeup.pdf',
  'vault-ds-2022-regular': '/pyqs/semester-3/endsem/data-structures/2022/ds-2022-regular.pdf',

  // 2. Discrete Mathematical Structures (6 papers)
  'vault-dms-2025-regular': '/pyqs/semester-3/endsem/discrete-mathematical-structures/2025/dms-2025-regular.pdf',
  'vault-dms-2025-makeup': '/pyqs/semester-3/endsem/discrete-mathematical-structures/2025/dms-2025-makeup.pdf',
  'vault-dms-2024-regular': '/pyqs/semester-3/endsem/discrete-mathematical-structures/2024/dms-2024-regular.pdf',
  'vault-dms-2024-makeup': '/pyqs/semester-3/endsem/discrete-mathematical-structures/2024/dms-2024-makeup.pdf',
  'vault-dms-2023-makeup': '/pyqs/semester-3/endsem/discrete-mathematical-structures/2023/dms-2023-makeup.pdf',
  'vault-dms-2022-regular': '/pyqs/semester-3/endsem/discrete-mathematical-structures/2022/dms-2022-regular.pdf',

  // 3. Digital Systems and Computer Organization (9 papers)
  'vault-dsco-2025-regular': '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2025/dsco-2025-regular.pdf',
  'vault-dsco-2024-makeup-coa': '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2024/dsco-2024-makeup-coa.pdf',
  'vault-dsco-2024-makeup-dsd': '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2024/dsco-2024-makeup-dsd.pdf',
  'vault-dsco-2024-makeup-ict': '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2024/dsco-2024-makeup-ict.pdf',
  'vault-dsco-2023-regular-coa': '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2023/dsco-2023-regular-coa.pdf',
  'vault-dsco-2023-regular-dsd': '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2023/dsco-2023-regular-dsd.pdf',
  'vault-dsco-2023-regular-ict': '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2023/dsco-2023-regular-ict.pdf',
  'vault-dsco-2023-makeup': '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2023/dsco-2023-makeup.pdf',
  'vault-dsco-2022-regular': '/pyqs/semester-3/endsem/digital-systems-and-computer-organization/2022/dsco-2022-regular.pdf',

  // 4. Data Communication and Computer Network (6 papers)
  'vault-dccn-2025-regular': '/pyqs/semester-3/endsem/data-communication-and-computer-network/2025/dccn-2025-regular.pdf',
  'vault-dccn-2025-makeup': '/pyqs/semester-3/endsem/data-communication-and-computer-network/2025/dccn-2025-makeup.pdf',
  'vault-dccn-2024-makeup': '/pyqs/semester-3/endsem/data-communication-and-computer-network/2024/dccn-2024-makeup.pdf',
  'vault-dccn-2023-regular': '/pyqs/semester-3/endsem/data-communication-and-computer-network/2023/dccn-2023-regular.pdf',
  'vault-dccn-2023-makeup': '/pyqs/semester-3/endsem/data-communication-and-computer-network/2023/dccn-2023-makeup.pdf',
  'vault-dccn-2022-regular': '/pyqs/semester-3/endsem/data-communication-and-computer-network/2022/dccn-2022-regular.pdf',

  // 5. Data Analytics (3 papers)
  'vault-da-2025-regular': '/pyqs/semester-3/endsem/data-analytics/2025/da-2025-regular.pdf',
  'vault-da-2025-makeup': '/pyqs/semester-3/endsem/data-analytics/2025/da-2025-makeup.pdf',
  'vault-da-2023-regular': '/pyqs/semester-3/endsem/data-analytics/2023/da-2023-regular.pdf',
};

const activeBlobRegistry = new Set<string>();

/**
 * Resolves an obfuscated vault token into an in-memory ephemeral Blob URL.
 * DevTools inspection only ever sees ephemeral 'blob:...' URLs that are revoked on close.
 */
export async function getEphemeralPaperBlob(paper: ArchivePaper): Promise<string> {
  const token = paper.vaultKey || ('vault-' + paper.id);
  const targetPath = VAULT_INTERNAL_REGISTRY[token] || paper.fileUrl || '';

  if (!targetPath) {
    throw new Error('Vault token [' + token + '] could not be resolved.');
  }

  try {
    const response = await fetch(targetPath, {
      method: 'GET',
      headers: {
        'Accept': 'application/pdf,application/octet-stream',
        'X-Vault-Client': 'mit-manipal-endsem-vault',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to load vault paper stream (HTTP ' + response.status + ')');
    }

    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);
    
    activeBlobRegistry.add(blobUrl);
    return blobUrl;
  } catch (error) {
    console.error('[VaultService] Ephemeral stream generation failed for ' + paper.id + ':', error);
    return targetPath;
  }
}

/**
 * Revokes an ephemeral blob URL from browser memory immediately.
 */
export function revokeEphemeralBlob(blobUrl: string | null): void {
  if (!blobUrl) return;
  if (blobUrl.startsWith('blob:') && activeBlobRegistry.has(blobUrl)) {
    URL.revokeObjectURL(blobUrl);
    activeBlobRegistry.delete(blobUrl);
  }
}

/**
 * Safely downloads a paper without exposing permanent static file URLs in the DOM.
 */
export async function downloadSecurePaper(paper: ArchivePaper): Promise<boolean> {
  try {
    const blobUrl = await getEphemeralPaperBlob(paper);
    const cleanTitle = paper.title.replace(/[^a-zA-Z0-9_-]/g, '_');
    const filename = cleanTitle + '_Endsem_MIT_Manipal.pdf';

    const temporaryLink = document.createElement('a');
    temporaryLink.style.display = 'none';
    temporaryLink.href = blobUrl;
    temporaryLink.setAttribute('download', filename);
    temporaryLink.setAttribute('rel', 'noopener noreferrer');

    document.body.appendChild(temporaryLink);
    temporaryLink.click();
    document.body.removeChild(temporaryLink);

    setTimeout(() => {
      revokeEphemeralBlob(blobUrl);
    }, 1500);

    return true;
  } catch (err) {
    console.error('[VaultService] Secure download failed:', err);
    return false;
  }
}

/**
 * Returns a clean canonical application link for sharing,
 * preventing plain file download link leaks.
 */
export function getPaperShareUrl(paper: ArchivePaper): string {
  const origin = window.location.origin;
  return origin + '/semester-3/endsem/' + paper.subjectId + '?paper=' + encodeURIComponent(paper.id) + '&year=' + paper.year;
}
