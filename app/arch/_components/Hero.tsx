import { content } from "../content";

export function Hero() {
  const { hero } = content;

  return (
    <header className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <section className="glass-card hero-card">
            <div className="eyebrow">{hero.eyebrow}</div>
            <h1>
              {hero.titleLead}
              <br />
              <span>{hero.titleHighlight}</span>
            </h1>
            <p className="lead">{hero.lead}</p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={hero.primary.href}
                target="_blank"
                rel="noreferrer"
              >
                {hero.primary.label}
              </a>
              <a
                className="btn btn-secondary"
                href={hero.secondary.href}
                target="_blank"
                rel="noreferrer"
              >
                {hero.secondary.label}
              </a>
            </div>
          </section>

          <div className="facts">
            {hero.facts.map((fact) => (
              <div className="fact" key={fact.strong}>
                <strong>{fact.strong}</strong>
                <span>{fact.span}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
