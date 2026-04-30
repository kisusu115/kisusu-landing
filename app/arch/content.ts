export const content = {
  meta: {
    title: "타타·꽁꽁이 · mac mini Architecture",
    description:
      "관리자(임제형)의 mac mini 위에서 돌아가는 KB·실행 런타임·디스코드 창구·주기 업무 아키텍처",
    canonical: "https://arch.kisusu.dev/",
    ogImage: "https://arch.kisusu.dev/og.png",
  },

  brand: {
    badge: "ARC",
    name: "Architecture · mac mini",
  },

  navLinks: [
    { href: "#foundation", label: "Foundation" },
    { href: "#tata", label: "타타" },
    { href: "#kkongkkong", label: "꽁꽁이 + Hermes" },
    { href: "#scheduler", label: "Scheduler" },
    { href: "#flow", label: "Flow" },
  ],
  navCta: {
    href: "https://github.com/kisusu115",
    label: "GitHub",
  },

  hero: {
    eyebrow: "회고 · 정리 · 가끔 다른 사람한테도",
    titleLead: "한 대의 mac mini 위에서 돌아가는,",
    titleHighlight: "타타·꽁꽁이의 풀스택",
    lead: "관리자의 컨텍스트를 축적하는 KB와 24시간 실행 런타임이 한 호스트 위에 같이 살고 있습니다. 외부 창구는 권한이 격리된 봇이 받고, 내부 작업은 풀 권한 타타가 받습니다.",
    primary: { href: "https://github.com/kisusu115", label: "kisusu115 / GitHub" },
    secondary: { href: "https://kisusu.dev", label: "kisusu.dev" },
    facts: [
      {
        strong: "24/7 mac mini",
        span: "Colima Docker · launchd · Vercel + Cloudflare 통합",
      },
      {
        strong: "타타 (TA-TA)",
        span: "관리자 컨텍스트 KB + 실행 런타임 · Claude Code Max",
      },
      {
        strong: "꽁꽁이 (kkongkkong)",
        span: "외부 디스코드 창구 봇 · Hermes + gpt-5.4-mini",
      },
    ],
  },

  foundation: {
    label: "Foundation",
    title: "mac mini 위에서 모두 돌아갑니다",
    desc: "한 대의 mac mini가 KB·런타임·외부 봇·주기 업무를 같이 호스팅합니다. 별도 클라우드 워커 없이, 호스트와 컨테이너만으로 분리합니다.",
    panels: [
      {
        h: "1. 호스트 · 컨테이너",
        p: "외부 노출 표면(꽁꽁이 봇·게이트웨이·대시보드)은 Colima(Docker) 안에서만 동작합니다. 호스트의 메모리 디렉터리·인증 정보는 컨테이너에 마운트하지 않습니다.",
      },
      {
        h: "2. 자동 부팅",
        p: "Hermes 스택·호스트 브리지·주기 업무 모두 launchd LaunchAgent로 부팅 시 자동 기동. Colima 자체도 brew services로 자동 시작합니다.",
      },
      {
        h: "3. 호스팅 · 도메인",
        p: "kisusu.dev는 단일 Next.js 앱(Vercel)을 서브도메인 라우팅으로 분기합니다. Cloudflare DNS는 Vercel 통합으로 자동 등록·SSL 발급.",
      },
      {
        h: "4. 런타임 · 모델",
        p: "내부 권한이 필요한 타타는 Claude Code(Max OAuth). 외부 응대용 꽁꽁이는 gpt-5.4-mini(OpenAI Codex OAuth). 키와 모델 자체가 분리되어 있습니다.",
      },
    ],
  },

  tata: {
    label: "TA-TA",
    title: "타타 — 관리자의 KB이자 실행 런타임",
    desc: "타타는 관리자의 프로필·취향·진행 중 프로젝트·피드백·레퍼런스를 누적하는 KB이자, 그 컨텍스트로 실제 작업을 수행하는 런타임입니다.",
    bullets: [
      "메모리 인덱스(MEMORY.md) → 필요한 파일만 읽어 컨텍스트 적재",
      "메모리 타입: Identity / User Profile (KB) / Projects / Plans",
      "Skill·Hooks·MCP로 작업 능력 확장 — 라우팅도 KB 기반",
      "터미널 직접 호출은 풀 권한, 외부 채널 경유는 read-only",
    ],
    quote:
      "메모리에 누락이 곧 퇴행. 새 사실·피드백·산출물이 보이면 즉시 해당 메모리 파일을 갱신합니다.",
    timeline: [
      {
        year: "Identity",
        text: "타타의 미션·행동 규칙·페르소나 분리 — 새 세션이 첫 로드 시점에 자기 정의를 가지도록 고정.",
      },
      {
        year: "User Profile",
        text: "관리자 신원(PII는 격리)·프로필·관찰 노트·포트폴리오·아이디어 취향. 작업 산출물의 기준선.",
      },
      {
        year: "Projects",
        text: "진행 중 프로젝트의 결정·근거·우선순위. 같은 일을 두 번 설명하지 않게 하는 핵심 축.",
      },
      {
        year: "Plans",
        text: "여러 세션을 가로지르는 계획. 진행 중 작업이 다른 세션에서도 일관되게 이어지도록.",
      },
    ],
  },

  kkongkkong: {
    label: "Kkongkkong + Hermes",
    title: "외부 창구는 권한이 격리된 봇이 받습니다",
    desc: "디스코드 등 외부 채널로 들어오는 모든 입력은 꽁꽁이가 1차로 받습니다. KB가 필요한 질의만 권한이 제한된 타타로 escalate되며, 그때도 응답 단계에서 한 번 더 sanitize됩니다.",
    panels: [
      {
        h: "꽁꽁이 (kkongkkong)",
        p: "Hermes 위에서 동작하는 Discord 봇. 가벼운 톤·외부 응대 전담. KB는 직접 못 보고, 필요할 때만 사수인 타타에게 escalate합니다.",
      },
      {
        h: "권한 격리 — read-only 모드",
        p: "외부 경로로 호출된 타타는 Read·Grep·Glob과 화이트리스트 read-only Bash만 허용. WebFetch·Edit·Write·위험 Bash 차단.",
      },
      {
        h: "응답 sanitize",
        p: "꽁꽁이를 거쳐 나가는 응답은 PII·토큰·내부 절대 경로를 자체 필터링. 외부 신뢰 단계가 낮을수록 더 강하게.",
      },
      {
        h: "신뢰 단계 (T0 / T1)",
        p: "T0(관리자 본인)만 KB까지 닿는 escalate 권한. T1은 봇과의 일반 대화까지만. 디스코드 멘션이 곧 라우팅이고 별도 프로토콜은 두지 않습니다.",
      },
    ],
    defenseTitle: "4중 방어선",
    defense: [
      {
        h: "Container",
        p: "Hermes는 Colima(Docker) 안. 호스트의 ~/.claude·인증 정보는 컨테이너에 절대 마운트하지 않음.",
      },
      {
        h: "Bearer + Whitelist",
        p: "호스트 브리지는 TCP localhost로 노출. bearer token + admin user ID 이중 검증을 통과해야 진입.",
      },
      {
        h: "Capability Profile",
        p: "외부 경로 타타는 read-only settings로 부팅. 액션 도구(Edit/Write/위험 Bash·WebFetch) 차단.",
      },
      {
        h: "Output Sanitize",
        p: "응답 단계에서 PII·시크릿·내부 경로 필터링. 권한 격리 위에 정보 격리를 한 겹 더.",
      },
    ],
    endpointsTitle: "브리지 엔드포인트",
    endpoints: [
      {
        method: "POST",
        path: "/escalate",
        note: "Hermes → 타타 (read-only). 즉답.",
      },
      {
        method: "POST",
        path: "/inbox",
        note: "Hermes → 타타. 비동기 메모로 적재.",
      },
      {
        method: "POST",
        path: "/outbound",
        note: "타타 → Hermes. 디스코드 채널로 송신.",
      },
    ],
  },

  scheduler: {
    label: "Scheduler",
    title: "24시간 주기 업무 — claude-scheduler",
    desc: "launchd가 매일 정해진 시각에 잡을 깨우고, claude-scheduler 안의 잡이 Claude Code(-p)로 실제 작업을 돌린 뒤 디스코드 채널로 결과를 떨어뜨립니다.",
    jobs: [
      {
        name: "tech-news-daily",
        when: "매일 09:00 KST",
        what: "관리자 관심 영역 기준으로 기술 뉴스를 큐레이션해 채널에 발송",
        channel: "#tata-news",
      },
      {
        name: "ideation-collector",
        when: "08:50 / 12:50 / 18:50",
        what: "Reddit · HackerNews · ProductHunt 풀을 슬롯별 프로파일로 수집",
        channel: "stdout → state pool",
      },
      {
        name: "ideation-problems",
        when: "09:00 / 13:00 / 19:00",
        what: "B2C / Tech / B2B 슬롯 독립 — Whiner가 pain 카드를 뽑아 채널 분기",
        channel: "#tata-problems-{b2c,tech,b2b}",
      },
      {
        name: "ideation-ideas",
        when: "21:00",
        what: "같은 날 09·13·19 결과를 3-way merge → Planner + Validator로 아이디어 카드",
        channel: "#tata-ideas",
      },
    ],
    extraTitle: "ad-hoc 발산 — /freshscan",
    extra:
      "정시 잡과 별개로, 임의 서브셋·임의 cap으로 collect → Whiner → 디스코드 발송을 한 번에 도는 슬래시 스킬. 정시 풀과 격리된 alias 풀에 결과를 쓰기 때문에 평상 운영을 오염시키지 않습니다.",
  },

  flow: {
    label: "Flow",
    title: "데이터 흐름 — 한 페이지 요약",
    desc: "외부에서 들어오는 입력, 타타에서 나가는 출력, 그리고 정시 잡이 떨어뜨리는 결과까지 — 같은 호스트 안에서 권한과 채널만 다르게 라우팅됩니다.",
    diagrams: [
      {
        title: "Inbound — 외부 입력은 권한 격리를 통과해서만 KB에 닿습니다",
        steps: [
          { box: "Discord 채널", note: "T0/T1 화이트리스트" },
          { box: "꽁꽁이 (Hermes)", note: "1차 응대 · 적재 판단" },
          { box: "호스트 브리지", note: "bearer + user ID 검증" },
          { box: "타타 (read-only)", note: "Read/Grep/Glob 한정" },
          { box: "응답 sanitize", note: "PII·시크릿·경로 필터" },
        ],
      },
      {
        title: "Outbound — 타타가 능동 알림을 보내는 경로",
        steps: [
          { box: "타타 작업", note: "주기 업무 · 발견사항" },
          { box: "tata-discord", note: "헬퍼 CLI" },
          { box: "호스트 브리지", note: "/outbound 채널 정책 적용" },
          { box: "Discord 채널", note: "home · admin-dm · 그룹" },
        ],
      },
      {
        title: "Cron — launchd가 깨우는 정시 잡",
        steps: [
          { box: "launchd LaunchAgent", note: "com.tata.*" },
          { box: "claude-scheduler/jobs", note: "venv + claude -p" },
          { box: "잡 산출물", note: "JSON 카드 · 로그" },
          { box: "Discord 웹훅", note: "주제별 채널 분기" },
        ],
      },
    ],
  },

  closing: {
    label: "Why",
    title: "왜 이렇게까지 만들어 두었는가",
    desc: "사람이 같은 정보를 두 번 설명하지 않아도 되도록, 같은 작업을 두 번 시키지 않아도 되도록 — 컨텍스트는 KB로 누적되고, 실행은 런타임이 알아서 합니다.",
    bullets: [
      "1. 관리자에 대한 컨텍스트를 잃지 않는다 — KB가 곧 기억",
      "2. 외부 채널이 KB·시스템을 오염시킬 수 없게 한다 — 권한 격리 + sanitize",
      "3. 반복 가능한 일은 사람 손을 떠나게 한다 — launchd × claude-scheduler",
    ],
  },

  footer: {
    title: "한 호스트 위에 KB·런타임·외부 창구·주기 업무를 같이 둡니다.",
    desc: "회고용으로 그림을 남기고, 가끔 다른 사람에게도 같은 그림을 보여줍니다. 자세한 결정 과정은 메모리 안에.",
    primary: { href: "https://github.com/kisusu115", label: "github.com/kisusu115" },
    secondary: { href: "https://kisusu.dev", label: "kisusu.dev" },
  },
};
