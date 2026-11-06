# Contributing to PYQ Vault

Thank you for your interest in contributing to **PYQ Vault** (`drash-anchan/pyq_clutch`)! This digital archive exists to help MIT Manipal Computer Science & Engineering students prepare effectively for their 3rd Semester Endsem examinations.

---

## Strict Archive Scope (Non-Negotiable)

To maintain academic precision, we enforce strict scope boundaries. We **only** accept question papers matching:

- **Institute**: Manipal Institute of Technology (MIT), MAHE Manipal
- **Branch**: Computer Science & Engineering (CSE)
- **Semester**: **3rd Semester ONLY**
- **Exam Type**: **Endsem (End Semester Examinations) ONLY**
- **Core Subjects**:
  1. **Data Structures** (`CSS 2101`)
  2. **Discrete Mathematical Structures** (`MAT 2101`)
  3. **Digital Systems and Computer Organization** (`CSS 2104`)
  4. **Data Communication and Computer Network** (`CSS 2102`)
  5. **Data Analytics** (`CSS 2103`)

> ⚠️ **Out of Scope**: Midsem / Sessional papers, assignments, lab manuals, or papers from other semesters will not be accepted.

---

## Owner-Only Control & Governance

- **Read-Only Live Archive**: The deployed PYQ Vault website is strictly public and read-only.
- **Sole Maintainer**: All additions, modifications, and pull request approvals are manually handled exclusively by repository owner **[@drash-anchan](https://github.com/drash-anchan)**.
- **No Direct Live Edits**: Contributions are proposals submitted via GitHub Pull Requests or direct email. They are never published automatically.

---

## Contribution Pathways

We offer two straightforward ways to submit missing question papers:

### Pathway A: The Developer Way (GitHub Pull Request)

1. **Fork the Repository**
   Visit [https://github.com/drash-anchan/pyq_clutch](https://github.com/drash-anchan/pyq_clutch) and click **Fork** (or navigate to `https://github.com/drash-anchan/pyq_clutch/fork`).

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/<your-username>/pyq_clutch.git
   cd pyq_clutch
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feat/add-2025-ds-makeup
   ```

4. **Add the Question Paper PDF**
   Place your optimized PDF in the appropriate subject directory:
   ```
   public/pyqs/semester-3/endsem/<subject-id>/<year>/<descriptive-name>.pdf
   ```
   *Naming Convention*: Use lowercase hyphenated names indicating subject, year, and variant (e.g. `data-structures-2025-makeup.pdf`).

5. **Register Metadata in `src/data/archiveData.ts`**
   Locate the matching subject and examination year in `src/data/archiveData.ts`, then append a new paper entry:
   ```ts
   {
     id: 'ds-2025-makeup',
     title: 'Data Structures 2025 Makeup',
     subjectId: 'data-structures',
     subjectName: 'Data Structures',
     subjectCode: 'CSS 2101',
     year: 2025,
     variant: 'Makeup',
     fileUrl: '/pyqs/semester-3/endsem/data-structures/2025/data-structures-2025-makeup.pdf',
     thumbnailUrl: '/pyqs/semester-3/endsem/data-structures/2025/thumb-makeup.webp',
     pageCount: 3,
     fileSize: '1.4 MB',
     dateHeld: 'January 2025',
     topicsCovered: ['B-Trees', 'Graph Traversals', 'Hash Tables'],
   }
   ```

6. **Verify Build & Local Preview**
   ```bash
   npm install
   npm run build
   npm run preview
   ```
   Confirm the PDF renders cleanly in the preview modal and downloads accurately.

7. **Submit a Pull Request**
   Push changes to your fork and open a Pull Request against `drash-anchan/pyq_clutch` on branch `main`. Complete the checklist in the PR template.

---

### Pathway B: Direct Correspondence (Email)

If you prefer not to use Git, you can email missing papers directly to the maintainer:

- **Email**: [`hasraadknowsyou@gmail.com`](mailto:hasraadknowsyou@gmail.com)
- **Subject**: `PYQ Contribution: [Subject Name] [Year] [Regular/Makeup]`
- **Required Details**:
  1. Subject Name & Code
  2. Examination Year
  3. Paper Variant (Regular or Makeup)
  4. Attached PDF Document
- **Note**: The maintainer will manually verify the PDF, optimize its file size, register the metadata, and credit your contribution in the repository.

---

## 📋 Code of Conduct & Academic Integrity

- Only submit authentic question papers administered by Manipal Institute of Technology.
- Ensure PDFs are legible, correctly rotated, and free from private coaching watermarks.
- Maintain a respectful, collaborative atmosphere in issues and pull requests.
