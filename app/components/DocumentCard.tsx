import { documentSizeKb } from "@/lib/site";

export type DocumentItem = {
  key: string;
  title: string;
  short: string;
  file: string;
  href: string;
  description: string;
};

export default function DocumentCard({ doc }: { doc: DocumentItem }) {
  const sizeKb = documentSizeKb(doc.file);
  const meta = ["PDF", sizeKb ? `${sizeKb} KB` : null].filter(Boolean).join(" · ");

  return (
    <article className="doc-card">
      <div className="doc-card-top">
        <span className="doc-icon" aria-hidden="true">
          PDF
        </span>
        <div>
          <h3>{doc.title}</h3>
          <p className="doc-meta">{meta}</p>
        </div>
      </div>
      <p className="doc-desc">{doc.description}</p>
      <div className="doc-actions">
        <a className="button primary" href={doc.href} download={doc.file}>
          Download {doc.short} (PDF)
        </a>
        <a
          className="doc-view"
          href={doc.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          View in new tab
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
