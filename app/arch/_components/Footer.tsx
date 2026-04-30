import { content } from "../content";

export function Footer() {
  const { footer } = content;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-card">
          <div>
            <h4
              style={{
                margin: "0 0 8px",
                fontSize: 26,
                letterSpacing: "-0.04em",
              }}
            >
              {footer.title}
            </h4>
            <p>{footer.desc}</p>
          </div>
          <div className="hero-actions" style={{ marginTop: 0 }}>
            <a
              className="btn btn-primary"
              href={footer.primary.href}
              target="_blank"
              rel="noreferrer"
            >
              {footer.primary.label}
            </a>
            <a
              className="btn btn-secondary"
              href={footer.secondary.href}
              target="_blank"
              rel="noreferrer"
            >
              {footer.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
