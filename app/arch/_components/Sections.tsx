import { content } from "../content";

export function FoundationSection() {
  const { foundation } = content;
  return (
    <section id="foundation">
      <div className="container">
        <div className="section-head">
          <span className="section-label">{foundation.label}</span>
          <h3>{foundation.title}</h3>
          <p className="section-desc">{foundation.desc}</p>
        </div>
        <div className="grid-4">
          {foundation.panels.map((panel) => (
            <article className="panel" key={panel.h}>
              <h4>{panel.h}</h4>
              <p>{panel.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TataSection() {
  const { tata } = content;
  return (
    <section id="tata">
      <div className="container">
        <div className="grid-2">
          <article className="panel">
            <div className="section-head">
              <span className="section-label">{tata.label}</span>
              <h3>{tata.title}</h3>
              <p className="section-desc">{tata.desc}</p>
            </div>
            <ul>
              {tata.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="tag-row">
              <span className="tag">Claude Code</span>
              <span className="tag">MEMORY.md</span>
              <span className="tag">Skills</span>
              <span className="tag">Hooks</span>
              <span className="tag">MCP</span>
            </div>
          </article>
          <aside className="quote-card">
            <p>“{tata.quote}”</p>
            <div className="timeline">
              {tata.timeline.map((item) => (
                <div className="timeline-item" key={item.year}>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-text">{item.text}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function KkongkkongSection() {
  const { kkongkkong } = content;
  return (
    <section id="kkongkkong">
      <div className="container">
        <div className="section-head">
          <span className="section-label">{kkongkkong.label}</span>
          <h3>{kkongkkong.title}</h3>
          <p className="section-desc">{kkongkkong.desc}</p>
        </div>
        <div className="grid-2">
          {kkongkkong.panels.map((panel) => (
            <article className="panel" key={panel.h}>
              <h4>{panel.h}</h4>
              <p>{panel.p}</p>
            </article>
          ))}
        </div>

        <div className="section-head" style={{ marginTop: 40 }}>
          <span className="section-label">Defense in depth</span>
          <h3>{kkongkkong.defenseTitle}</h3>
        </div>
        <div className="grid-4">
          {kkongkkong.defense.map((d) => (
            <article className="panel" key={d.h}>
              <h4>{d.h}</h4>
              <p>{d.p}</p>
            </article>
          ))}
        </div>

        <div className="section-head" style={{ marginTop: 40 }}>
          <span className="section-label">Bridge endpoints</span>
          <h3>{kkongkkong.endpointsTitle}</h3>
        </div>
        <div className="endpoints">
          {kkongkkong.endpoints.map((ep) => (
            <div className="endpoint" key={ep.path}>
              <span className="method">{ep.method}</span>
              <span className="path">{ep.path}</span>
              <span className="note">{ep.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SchedulerSection() {
  const { scheduler } = content;
  return (
    <section id="scheduler">
      <div className="container">
        <div className="section-head">
          <span className="section-label">{scheduler.label}</span>
          <h3>{scheduler.title}</h3>
          <p className="section-desc">{scheduler.desc}</p>
        </div>
        <div className="channel-list">
          {scheduler.jobs.map((job) => (
            <div className="channel" key={job.name}>
              <div>
                <small>Job</small>
                <strong>{job.name}</strong>
              </div>
              <div>
                <small>역할</small>
                <span style={{ color: "var(--muted)", fontSize: 13 }}>
                  {job.what}
                </span>
              </div>
              <div>
                <small>주기 · 출력</small>
                <span className="channel-when">
                  {job.when} · {job.channel}
                </span>
              </div>
            </div>
          ))}
        </div>
        <article className="panel" style={{ marginTop: 24 }}>
          <h4>{scheduler.extraTitle}</h4>
          <p>{scheduler.extra}</p>
        </article>
      </div>
    </section>
  );
}

export function ClosingSection() {
  const { closing } = content;
  return (
    <section id="closing">
      <div className="container">
        <article className="panel">
          <div className="section-head">
            <span className="section-label">{closing.label}</span>
            <h3>{closing.title}</h3>
            <p className="section-desc">{closing.desc}</p>
          </div>
          <ul>
            {closing.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
