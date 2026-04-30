import { Fragment } from "react";
import { content } from "../content";

export function Flow() {
  const { flow } = content;
  return (
    <section id="flow">
      <div className="container">
        <div className="section-head">
          <span className="section-label">{flow.label}</span>
          <h3>{flow.title}</h3>
          <p className="section-desc">{flow.desc}</p>
        </div>

        <div>
          {flow.diagrams.map((diagram) => (
            <div className="flow-block" key={diagram.title}>
              <p className="flow-title">{diagram.title}</p>
              <div className="flow">
                {diagram.steps.map((step, idx) => (
                  <Fragment key={step.box}>
                    <div className="flow-step">
                      <strong>{step.box}</strong>
                      <span>{step.note}</span>
                    </div>
                    {idx < diagram.steps.length - 1 ? (
                      <div className="flow-arrow" aria-hidden>
                        →
                      </div>
                    ) : null}
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
