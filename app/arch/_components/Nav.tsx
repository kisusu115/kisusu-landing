import { content } from "../content";

export function Nav() {
  return (
    <div className="nav-wrap">
      <div className="container">
        <nav>
          <a className="brand" href="#top">
            <span className="brand-badge">{content.brand.badge}</span>
            <span>{content.brand.name}</span>
          </a>
          <div className="nav-links">
            {content.navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a
            className="nav-cta"
            href={content.navCta.href}
            target="_blank"
            rel="noreferrer"
          >
            {content.navCta.label}
          </a>
        </nav>
      </div>
    </div>
  );
}
