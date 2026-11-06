import confetti from 'canvas-confetti';

export function triggerAcademicConfetti() {
  try {
    // Monochromatic and light-brown paper confetti
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#000000', '#FFFFFF', '#C8B8A2', '#8A755E'],
      disableForReducedMotion: true,
    });
  } catch {}
}

export function downloadPaperPdf(fileUrl: string, fileName: string) {
  try {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    triggerAcademicConfetti();
    return true;
  } catch (err) {
    window.open(fileUrl, '_blank');
    return false;
  }
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
