import "./intro.css";

export default function IntroPage() {
  return (
    <div className="intro-root">
      <div className="nav-wrap">
        <div className="container">
          <nav>
            <a className="brand" href="#top">
              <span className="brand-badge">LJH</span>
              <span>임제형 · SOMA Team Builder</span>
            </a>
            <div className="nav-links">
              <a href="#direction">방향</a>
              <a href="#strengths">강점</a>
              <a href="#teammate">선호 팀원</a>
              <a href="#project">기획안</a>
              <a href="#contact">연락처</a>
            </div>
            <a className="nav-cta" href="mailto:kisusu115@gmail.com">
              지금 연락하기
            </a>
          </nav>
        </div>
      </div>

      <header className="hero" id="top">
        <div className="container">
          <div className="hero-grid">
            <section className="glass-card hero-card">
              <div className="eyebrow">안녕하세요! 백엔드 개발자 임제형입니다</div>
              <h1>
                소마에서 <span>끝까지 함께 달릴</span>
                <br />
                팀원을 찾고 있습니다.
              </h1>
              <p className="lead">
                Agent를 개발 프로세스에 자연스럽게 녹여 AI-Native한 팀 문화를 함께 만들고 싶습니다.
                백엔드와 인프라 경험을 바탕으로, 이번 소마에서는 풀스택은 물론 기획과 마케팅까지 확장하며
                실제로 유저에게 닿는 프로덕트를 집요하게 만들어보고 싶어요.
              </p>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href="https://open.kakao.com/o/sT1VJjni"
                  target="_blank"
                  rel="noreferrer"
                >
                  오픈채팅으로 연락하기
                </a>
                <a className="btn btn-secondary" href="#project">
                  기획안 살펴보기
                </a>
              </div>
              <div className="facts">
                <div className="fact">
                  <strong>우수자 인증 목표</strong>
                  <span>소마 과정에 전념하며 밀도 있게 결과를 만들고 싶습니다.</span>
                </div>
                <div className="fact">
                  <strong>서울 거주 · 오프라인 선호</strong>
                  <span>대면 회의와 센터 상주 개발 모두 적극 환영합니다.</span>
                </div>
                <div className="fact">
                  <strong>투명한 소통</strong>
                  <span>회피하지 않고 상황과 관점을 빠르게 공유하는 협업을 좋아합니다.</span>
                </div>
              </div>
            </section>

            <aside className="glass-card profile-card">
              <div>
                <div className="avatar">임</div>
              </div>
              <div>
                <h2>임제형</h2>
                <p className="section-desc" style={{ marginTop: 10, fontSize: 15 }}>
                  Backend Developer · Infra Friendly · Fullstack Curious · Builder Mindset
                </p>
              </div>
              <div className="meta-list">
                <div className="meta-item">
                  <span className="meta-label">Email</span>
                  <a href="mailto:kisusu115@gmail.com">kisusu115@gmail.com</a>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Phone</span>
                  <a href="tel:01054101558">010-5410-1558</a>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Open Chat</span>
                  <a
                    href="https://open.kakao.com/o/sT1VJjni"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://open.kakao.com/o/sT1VJjni
                  </a>
                </div>
                <div className="meta-item">
                  <span className="meta-label">GitHub</span>
                  <a
                    href="https://github.com/kisusu115"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/kisusu115
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <main>
        <section id="direction">
          <div className="container">
            <div className="section-head">
              <span className="section-label">Direction</span>
              <h3>소마에서 이런 방향으로 성장하고 싶습니다</h3>
              <p className="section-desc">
                단순히 기술 스택을 더하는 것이 아니라, AI와 제품 개발을 더 자연스럽게 연결하는 사람으로 성장하는 것이 목표입니다.
              </p>
            </div>
            <div className="grid-3">
              <article className="panel">
                <h4>1. AI-Native 개발 프로세스 탐구</h4>
                <p>
                  Agent를 개발 프로세스에 자연스럽게 녹이며, 팀 단위로 더 빠르고 더 좋은 의사결정을 만드는 방식을 실험하고 싶습니다.
                </p>
              </article>
              <article className="panel">
                <h4>2. 풀스택 + 비개발 영역 확장</h4>
                <p>
                  백엔드/인프라 경험을 기반으로 프론트엔드, 기획, 마케팅까지 경험하며 Builder로서의 폭을 넓히고 싶습니다.
                </p>
              </article>
              <article className="panel">
                <h4>3. 결국은 유저에게 닿는 제품</h4>
                <p>
                  창업/취업이라는 결과보다, 실제 유저가 쓰는 프로덕트를 팀과 함께 만들어내는 과정을 더 즐깁니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="strengths">
          <div className="container">
            <div className="grid-2">
              <article className="panel">
                <div className="section-head">
                  <span className="section-label">Strengths</span>
                  <h3>제가 팀에 기여할 수 있는 것</h3>
                </div>
                <ul>
                  <li>소마 기간 동안 이탈 없이 몰입하며 결과물을 만드는 집중력</li>
                  <li>서울 거주 기반의 오프라인 협업 선호, 필요하면 센터 상주 개발도 가능</li>
                  <li>운영 이슈가 생기면 빠르게 상황을 파악하고 해결하는 실행력</li>
                  <li>백엔드/인프라 기반으로 제품 전체 흐름을 안정적으로 받쳐주는 시야</li>
                  <li>과정을 숨기지 않고 공유하는 투명한 소통 방식</li>
                </ul>
                <div className="tag-row">
                  <span className="tag">백엔드</span>
                  <span className="tag">인프라</span>
                  <span className="tag">풀스택 확장</span>
                  <span className="tag">AI-Native</span>
                  <span className="tag">오프라인 협업</span>
                </div>
              </article>
              <aside className="quote-card">
                <p>“지금까지 연락 GOAT 개발자로 살아왔습니다.”</p>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-year">e.g.</div>
                    <div className="timeline-text">
                      교양 시험 30분 전에 PM 요청을 받고, 즉시 운영 서버 로그를 확인한 뒤 hotfix를 진행해 문제를 해결한 경험이 있습니다.
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">협업 모토</div>
                    <div className="timeline-text">
                      거리낌 없이 소통하며, 서로 다른 관점에서 나온 정보를 빠르게 공유하는 협업을 중요하게 생각합니다.
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="teammate">
          <div className="container">
            <div className="section-head">
              <span className="section-label">Team Fit</span>
              <h3>이런 팀원을 선호합니다</h3>
              <p className="section-desc">
                실력보다 더 중요하게 보는 것은 태도와 지속성입니다. 함께 오래 고민하고 끝까지 만드는 팀을 원합니다.
              </p>
            </div>
            <div className="grid-2">
              <article className="panel">
                <h4>함께 달리고 싶은 사람</h4>
                <ol>
                  <li>소마 과정 동안 이탈하지 않고 같이 집중하실 수 있는 분</li>
                  <li>우수자 인증을 목표로 밀도 있게 달려갈 분</li>
                  <li>실력과 무관하게 과정 속에서 같이 고민하고 탐구할 분</li>
                  <li>회피하지 않는 투명한 소통을 지향하는 분</li>
                </ol>
              </article>
              <article className="panel">
                <h4>협업 방식</h4>
                <p>
                  온라인 미팅도 좋지만 오프라인 미팅을 특히 선호합니다. 빠르게 만나서 정리하고,
                  바로 실행으로 연결되는 리듬을 좋아합니다. 생각을 숨기지 않고 공유하면서도,
                  서로 다른 관점을 존중하는 팀이면 정말 잘 맞을 것 같습니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="project">
          <div className="container">
            <div className="section-head">
              <span className="section-label">Project Idea</span>
              <h3>현재 디벨롭 중인 기획안</h3>
            </div>
            <article className="panel project-box">
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="eyebrow">선택지 중 하나로 열어둔 아이디어</div>
                <h4 className="project-title">
                  코치와 실시간으로 함께하는 온라인 홈트레이닝 클래스 플랫폼
                </h4>
                <p>
                  워크숍을 거치며 기획 자체가 핵심은 아니라는 점도 느꼈지만, 실제로 유저에게 가치를 줄 수 있는 하나의 방향으로 충분히 발전 가능성이 있다고 생각합니다.
                  관심이 있으시다면 아래 링크를 통해 기획안을 먼저 살펴보시고, 떠오르는 아이디어가 있다면 함께 디벨롭해보면 좋겠습니다.
                </p>
                <div className="hero-actions" style={{ marginTop: 20 }}>
                  <a
                    className="btn btn-primary"
                    href="https://www.notion.so/3333a42c14dd8078bb77f98d08c72d58?pvs=21"
                    target="_blank"
                    rel="noreferrer"
                  >
                    노션 기획안 보기
                  </a>
                  <a className="btn btn-secondary" href="mailto:kisusu115@gmail.com">
                    이 기획 아니어도 연락하기
                  </a>
                </div>
                <p style={{ marginTop: 18, color: "var(--muted)", fontSize: 15 }}>
                  이 기획이 아니더라도 괜찮습니다. 함께 무언가를 제대로 만들어보고 싶은 분이라면 부담 없이 연락 주세요.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="grid-2">
              <article className="panel">
                <div className="section-head">
                  <span className="section-label">Education &amp; Certificate</span>
                  <h3>기본 정보</h3>
                </div>
                <div className="channel-list">
                  <div className="channel">
                    <div>
                      <small>Education</small>
                      <strong>2020 ~ 2026 · 건국대학교 컴퓨터공학부 졸업</strong>
                    </div>
                  </div>
                  <div className="channel">
                    <div>
                      <small>Certificate</small>
                      <strong>정보처리기사 · SQLD · OPIc IH</strong>
                    </div>
                  </div>
                  <div className="channel">
                    <div>
                      <small>Tech Stacks</small>
                      <strong>기술 스택 상세 보기</strong>
                    </div>
                    <a
                      href="https://www.notion.so/32f91e401fdf80548081fcde6f733119?pvs=21"
                      target="_blank"
                      rel="noreferrer"
                    >
                      열기
                    </a>
                  </div>
                  <div className="channel">
                    <div>
                      <small>Projects</small>
                      <strong>프로젝트 상세 보기</strong>
                    </div>
                    <a
                      href="https://www.notion.so/32f91e401fdf801e823fceb50fd3c74f?pvs=21"
                      target="_blank"
                      rel="noreferrer"
                    >
                      열기
                    </a>
                  </div>
                  <div className="channel">
                    <div>
                      <small>Activities</small>
                      <strong>활동 상세 보기</strong>
                    </div>
                    <a
                      href="https://www.notion.so/32f91e401fdf801bac5fc086963ade6d?pvs=21"
                      target="_blank"
                      rel="noreferrer"
                    >
                      열기
                    </a>
                  </div>
                </div>
              </article>

              <article className="panel" id="contact">
                <div className="section-head">
                  <span className="section-label">Contact</span>
                  <h3>편하게 연락 주세요</h3>
                  <p className="section-desc" style={{ fontSize: 15, marginTop: 8 }}>
                    빠르게 응답하고, 대화에서 실행까지 연결되는 협업을 선호합니다.
                  </p>
                </div>
                <div className="channel-list">
                  <div className="channel">
                    <div>
                      <small>Email</small>
                      <strong>kisusu115@gmail.com</strong>
                    </div>
                    <a href="mailto:kisusu115@gmail.com">메일 보내기</a>
                  </div>
                  <div className="channel">
                    <div>
                      <small>Phone</small>
                      <strong>010-5410-1558</strong>
                    </div>
                    <a href="tel:01054101558">전화하기</a>
                  </div>
                  <div className="channel">
                    <div>
                      <small>Open Chat</small>
                      <strong>카카오 오픈채팅으로 바로 연결</strong>
                    </div>
                    <a
                      href="https://open.kakao.com/o/sT1VJjni"
                      target="_blank"
                      rel="noreferrer"
                    >
                      입장하기
                    </a>
                  </div>
                  <div className="channel">
                    <div>
                      <small>GitHub</small>
                      <strong>github.com/kisusu115</strong>
                    </div>
                    <a
                      href="https://github.com/kisusu115"
                      target="_blank"
                      rel="noreferrer"
                    >
                      방문하기
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-card">
            <div>
              <h4 style={{ margin: "0 0 8px", fontSize: 28, letterSpacing: "-0.05em" }}>
                끝까지 함께 달릴 팀을 찾고 있습니다.
              </h4>
              <p>
                우수자 인증을 목표로, 소통을 숨기지 않고, 실제 사용자에게 닿는 결과를 같이 만들어보고 싶습니다.
              </p>
            </div>
            <div className="hero-actions" style={{ marginTop: 0 }}>
              <a
                className="btn btn-primary"
                href="https://open.kakao.com/o/sT1VJjni"
                target="_blank"
                rel="noreferrer"
              >
                오픈채팅
              </a>
              <a
                className="btn btn-secondary"
                href="mailto:kisusu115@gmail.com"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.18)",
                }}
              >
                이메일
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
