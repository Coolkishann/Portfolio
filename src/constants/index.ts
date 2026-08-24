export interface Skill {
  skill_name: string
  Image: string
  width: number
  height: number
  category: 'ai' | 'design' | 'ai' | 'frontend' | 'backend' | 'database' | 'devops' | 'other'
}

export const skills: Skill[] = [
  // Frontend
  { skill_name: 'HTML5', Image: '/html.png', width: 80, height: 80, category: 'frontend' },
  { skill_name: 'CSS', Image: '/css.png', width: 80, height: 80, category: 'frontend' },
  { skill_name: 'JavaScript', Image: '/js.png', width: 65, height: 65, category: 'frontend' },
  { skill_name: 'TypeScript', Image: '/ts.png', width: 80, height: 80, category: 'frontend' },
  { skill_name: 'React', Image: '/react.png', width: 80, height: 80, category: 'frontend' },
  { skill_name: 'Next.js', Image: '/next.png', width: 80, height: 80, category: 'frontend' },
  { skill_name: 'Redux', Image: '/redux.png', width: 80, height: 80, category: 'frontend' },
  { skill_name: 'Tailwind CSS', Image: '/tailwind.png', width: 80, height: 80, category: 'frontend' },

  // Backend
  { skill_name: 'Node.js', Image: '/node-js.png', width: 80, height: 80, category: 'backend' },
  { skill_name: 'Express.js', Image: '/express.png', width: 80, height: 80, category: 'backend' },
  { skill_name: 'Spring Boot', Image: '/spring-boot.png', width: 55, height: 55, category: 'backend' },
  { skill_name: 'Rust', Image: '/rust.png', width: 70, height: 70, category: 'backend' },
  { skill_name: 'Go', Image: '/go.png', width: 60, height: 60, category: 'backend' },
  { skill_name: 'nestjs', Image: '/nestjs.png', width: 60, height: 60, category: 'backend' },
  { skill_name: 'RestApi', Image: '/restapi.png', width: 60, height: 60, category: 'backend' },

  // Database
  { skill_name: 'PostgreSQL', Image: '/postger.png', width: 70, height: 70, category: 'database' },
  { skill_name: 'MySQL', Image: '/mysql.png', width: 70, height: 70, category: 'database' },
  { skill_name: 'Prisma', Image: '/prisma.webp', width: 70, height: 70, category: 'database' },
  { skill_name: 'GraphQL', Image: '/graphql.png', width: 80, height: 80, category: 'database' },

  // DevOps / Cloud
  { skill_name: 'Terraform', Image: '/terraform.png', width: 80, height: 80, category: 'devops' },
  { skill_name: 'Docker', Image: '/docker.webp', width: 70, height: 70, category: 'devops' },
  { skill_name: 'Kubernetes', Image: '/kubernetes.png', width: 50, height: 50, category: 'devops' },
  { skill_name: 'AWS', Image: '/aws.png', width: 70, height: 70, category: 'devops' },
  { skill_name: 'CloudFlare', Image: '/cloudflare.png', width: 80, height: 80, category: 'devops' },

  { skill_name: 'claude', Image: '/claude.png', width: 80, height: 80, category: 'ai' },
  { skill_name: 'gemini', Image: '/gemini.png', width: 80, height: 80, category: 'ai' },
  { skill_name: 'stitch', Image: '/stitch.png', width: 80, height: 80, category: 'ai' },
  { skill_name: 'chatgpt', Image: '/chatgpt.png', width: 80, height: 80, category: 'ai' },
  { skill_name: 'perplexity', Image: '/perplexity.png', width: 80, height: 80, category: 'ai' },
  { skill_name: 'lovable', Image: '/lovable.png', width: 80, height: 80, category: 'ai' },
  { skill_name: 'antigravity', Image: '/antigravity.png', width: 80, height: 80, category: 'ai' },
  { skill_name: 'webflow', Image: 'https://cdn.simpleicons.org/webflow/white', width: 80, height: 80, category: 'design' },
  { skill_name: 'dribbble', Image: 'https://cdn.simpleicons.org/dribbble/white', width: 80, height: 80, category: 'design' },
  { skill_name: 'awwwards', Image: 'https://cdn.simpleicons.org/awwwards/white', width: 80, height: 80, category: 'design' },
  { skill_name: 'gsap', Image: 'https://cdn.simpleicons.org/gsap', width: 80, height: 80, category: 'frontend' }, // brand green, looks fine as-is
  { skill_name: 'threejs', Image: 'https://cdn.simpleicons.org/threedotjs/white', width: 80, height: 80, category: 'frontend' },
]

export interface SocialLink {
  name: string
  href: string
  label: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/coolkishann',
    label: 'GitHub',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kishanvishwakarma1406/',
    label: 'LinkedIn',
  },
  {
    name: 'Twitter',
    href: 'https://x.com/ashlok2003',
    label: 'Twitter',
  },
]

export interface Experience {
  id: number
  role: string
  company: string
  location: string
  date: string
  description: string
  achievements: string[]
  tags: string[]
}

export const experienceData: Experience[] = [
  {
    id: 0,
    role: 'Mern Stack Developer',
    company: 'CodesStudios',
    location: 'Onsite - Mumbai, Maharashtra',
    date: 'Jul 2025 - Present',
    description:
      'Built and maintained full-stack web applications end-to-end across a modern TypeScript stack — Next.js, NestJS, and Turborepo — taking ownership of features from technical design through production deployment, with a focus on clean architecture, data integrity, and measurable performance gains.',
    achievements: [
      "Owned end-to-end delivery of full-stack product features, from requirement breakdown and technical planning to production rollout",
      "Engineered scalable frontend experiences with Next.js, React.js, and Tailwind CSS, improving usability, responsiveness, and maintainability",
      "Modeled and optimized data layers across MongoDB and PostgreSQL using Prisma, improving query efficiency, reliability, and operational simplicity",
      "Integrated Redis caching to reduce response times by 30% on frequently accessed services in a real-time IT service management dashboard",
      "Structured a scalable monorepo using Turborepo, streamlining shared code, build pipelines, and cross-package dependency management",
      "Supported production systems, resolved live issues quickly, and improved service reliability through debugging and iterative performance tuning"
    ],
    tags: ['Nextjs', 'Node.js', 'PostgreSQL', 'Redis', 'RestApi', 'mongodb', 'NestJs'],
  },


]

export interface Project {
  title: string
  image: string
  description: string
  date: string
  problem: string
  approach: string
  infra: string
  challenge: string
  outcome: string
  github: string
  live: string
  tags: string[]
}

export const projectsData: Project[] = [
  {
    title: 'Distributed URL Shortener',
    image: "/url.png",
    description:
      'A scalable load-balanced URL shortener built with microservices architecture, Redis caching, and PostgreSQL for high performance and reliability.',
    date: '06.2025',
    problem:
      'Traditional URL shorteners struggle with scalability, fault tolerance, and low-latency redirection under high traffic.',
    approach:
      'Designed a distributed architecture with load balancing, Redis caching, and PostgreSQL-backed persistence.',
    infra:
      'Node.js · Fastify · Redis · PostgreSQL · Docker',
    challenge:
      'Maintaining fast redirect performance while ensuring consistency across distributed services.',
    outcome:
      'Built a highly scalable URL shortening platform capable of handling large traffic volumes with efficient caching.',
    github: 'https://github.com/Coolkishann/Sipy-Url-shortner',
    live: 'https://github.com/Coolkishann/Sipy-Url-shortner',
    tags: ['Load Balancing', 'Caching', 'Microservices', 'System Design', 'Scalability'],
  },
  {
    title: 'DataEngine (CSV & PDF Processor)',
    image: "/fileflows.png",
    description:
      'A high-performance data processing engine capable of generating and processing large CSV and PDF datasets.',
    date: '02.2025',
    problem:
      'Large-scale file generation and processing tasks become slow and resource-intensive in single-threaded environments.',
    approach:
      'Utilized worker threads and WebSocket telemetry for parallelized processing and monitoring.',
    infra:
      'Node.js · React · MongoDB',
    challenge:
      'Efficiently distributing workloads while maintaining real-time progress tracking.',
    outcome:
      'Achieved scalable parallel processing with live telemetry and improved throughput.',
    github:
      'https://github.com/Coolkishann/PDF-CSV-Processor-Generator----Backend',
    live:
      'https://github.com/Coolkishann/PDF-CSV-Processor-Generator----Backend',
    tags: ['Worker Threads', 'WebSockets', 'File Processing', 'Parallel Computing'],
  },
  {
    title: 'Moto Edge 60 Fusion Showcase',
    image: "/motorola.png",
    description:
      'An Apple-style cinematic product showcase for the Moto Edge 60 Fusion featuring scroll-driven storytelling, immersive motion design, and premium visual presentation inspired by modern device launch pages.',
    date: '06.2026',
    problem:
      'Traditional product landing pages often fail to communicate hardware design, premium feel, and feature highlights in a memorable interactive way.',
    approach:
      'Designed a scroll-synced storytelling experience combining pinned sections, cinematic transitions, feature reveals, and Apple-inspired minimal layouts to showcase the device as a premium digital product experience.',
    infra:
      'Next.js · TypeScript · GSAP · ScrollTrigger · Framer Motion · ThreeJs · 3D Model',
    challenge:
      'Balancing heavy visual storytelling and smooth scroll-linked animations while keeping the experience performant, responsive, and visually clean across devices.',
    outcome:
      'Built a polished interactive product microsite that highlights the Edge 60 Fusion’s display, camera, charging, and design language through immersive motion and premium presentation.',
    github: 'https://github.com/Coolkishann/edge-60-fusion-showcase', // replace if different
    live: 'https://edge-60-fusion-showcase.vercel.app/',
    tags: ['GSAP', 'ScrollTrigger', 'Product Showcase', 'Motion Design', 'Premium UI'],
  },
  {
    title: 'Cinematic Studio Portfolio',
    image: "/cinematic.png",
    description:
      'A premium visual storytelling platform featuring immersive scroll-triggered animations and interactive experiences.',
    date: '05.2025',
    problem:
      'Traditional portfolios fail to showcase frontend engineering and design capabilities in an engaging way.',
    approach:
      'Built a cinematic scrolling experience using GSAP, Framer Motion, and carefully orchestrated transitions.',
    infra:
      'Next.js · GSAP · TypeScript · Vanilla CSS · Framer Motion',
    challenge:
      'Balancing visual richness with performance and responsiveness across screen sizes.',
    outcome:
      'Created a polished portfolio experience highlighting advanced frontend engineering and UX craftsmanship.',
    github: 'https://studio-gsap.vercel.app',
    live: 'https://studio-gsap.vercel.app',
    tags: ['Animation', 'ScrollTrigger', 'Visual Storytelling', 'Premium UX', 'Frontend Engineering'],
  },
  {
    title: 'SrcStash',
    image: "/srcstash.png",
    description:
      'A personal developer resource manager for saving and organizing websites, docs, GitHub repos, YouTube videos, and Instagram reels in one quiet, structured place.',
    date: '06.2026', // TODO: confirm actual date
    problem:
      'Developers constantly stumble on useful links, docs, repos, and videos across the web but have no single, organized place to save and revisit them — bookmarks get buried and notes get scattered.',
    approach:
      'Built with Next.js and TypeScript, using a raw, brutalist dashboard UI that favors clear hierarchy and function over decoration, so saved resources stay easy to scan and retrieve regardless of type.',
    infra:
      'Next.js · TypeScript · Brutalist Dashboard UI',
    challenge:
      'Designing a single interface that handles very different content types — links, repos, videos, reels — without the UI feeling cluttered or generic.',
    outcome:
      'Shipped a focused personal stash tool that organizes mixed-format resources the way developers actually think, instead of relying on browser bookmarks.',
    github: 'https://github.com/Coolkishann/cuddly-creations-lab',
    live: 'https://srcstash.vercel.app/',
    tags: ['Bookmarking', 'Developer Tools', 'Productivity', 'Dashboard UI'],
  },
  {
    title: 'NovaShape Interactive 3D Experience',
    image: "/novashape.png",
    description:
      'A premium scroll-driven 3D storytelling site where thousands of WebGL particles morph through shapes in sync with scroll-triggered motion content.',
    date: '06.2026', // TODO: confirm actual date
    problem:
      'Most 3D portfolio pieces either look impressive but run poorly, or perform well but feel static — few combine dense particle rendering with tightly choreographed scroll storytelling.',
    approach:
      "Rendered over 12,000 particles at 60 FPS in Three.js using custom BufferGeometries for efficient memory use and fast state morphing, then choreographed every particle's position through GSAP ScrollTrigger timelines for pixel-perfect sync with scroll. Layered Framer Motion for UI-level micro-interactions and Lenis for smooth, eased scrolling, with custom vertex and fragment shaders driving the visual ribbon effects on the GPU — all inside a Next.js App Router foundation with Tailwind CSS.",
    infra:
      'Next.js · Three.js · GSAP · ScrollTrigger · Framer Motion · Lenis Scroll · GLSL Shaders · Tailwind CSS',
    challenge:
      'Keeping particle morphing and shader-driven effects at a stable 60 FPS while GSAP timelines, Lenis scroll easing, and Framer Motion UI transitions all stayed perfectly synchronized.',
    outcome:
      'Delivered a technical showcase site demonstrating high-performance WebGL rendering tightly bound to scroll, used as a portfolio piece highlighting 3D and motion engineering depth.',
    github: 'https://github.com/Coolkishann/Threejs-Gsap-Scroll',
    live: 'https://threejs-gsap-scroll.vercel.app/',
    tags: ['Three.js', 'GSAP', 'WebGL', 'Particles', 'Scroll Animation', 'GLSL'],
  }
];

export interface Blog {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
}

export const blogsData: Blog[] = [
  {
    id: 1,
    title: 'Scaling E-Commerce to 10K RPS with GraphQL Federation',
    excerpt: 'How I decomposed a monolithic storefront into federated subgraphs, implemented distributed caching, and achieved sub-100ms P99 latency at scale.',
    date: '10.2025',
    content: `When ShopXIndia outgrew its monolithic REST API, I led the migration to a federated GraphQL architecture using Apollo Federation v2. The system was decomposed into five domain-aligned subgraphs — catalog, inventory, orders, users, and payments — each independently deployable and owned by separate teams.\n\nThe critical challenge was query performance. A single storefront page could resolve data across three subgraphs. I implemented a multi-tier caching strategy: Redis for entity-level caching with 30s TTL, DataLoader for request-scoped batching to eliminate N+1 queries, and Cloudflare edge caching for anonymous catalog requests.\n\nAuthentication was handled via a custom gateway plugin that validates JWTs at the router level and propagates user context to subgraphs through headers, avoiding redundant token verification. For observability, I instrumented every resolver with OpenTelemetry spans, feeding into Grafana dashboards that track per-subgraph latency, error rates, and cache hit ratios.\n\nThe result: P99 latency dropped from 1.2s to 87ms, the system comfortably handles 10K requests per second during flash sales, and deployment frequency increased from weekly to multiple times per day per service.`,
  },
  {
    id: 2,
    title: 'Building Real-Time Infrastructure: WebSockets at Scale',
    excerpt: 'Architecture decisions behind a real-time messaging system supporting 50K concurrent connections with presence, typing indicators, and WebRTC signaling.',
    date: '04.2025',
    content: `SocialPedia required real-time capabilities that went far beyond basic chat — presence tracking, typing indicators, read receipts, live notifications, and peer-to-peer video calling via WebRTC signaling.\n\nI architected the real-time layer using a horizontally scaled WebSocket cluster backed by Redis Pub/Sub for cross-instance message fanout. Each Socket.IO server instance maintains local connection state, while Redis handles room-level broadcasting. This allows us to add WebSocket nodes behind a load balancer without sticky sessions — connections are stateless at the infrastructure level.\n\nFor presence, I implemented a heartbeat-based system where clients send a ping every 15 seconds. Absence of two consecutive pings triggers an offline event propagated to all friends via Redis. Typing indicators use a debounced emit pattern — the client sends a "typing" event, and the server auto-expires it after 3 seconds if no follow-up arrives.\n\nWebRTC signaling was the most complex piece. I built a custom signaling server that handles offer/answer exchange and ICE candidate trickling through the existing WebSocket channel, eliminating the need for a separate signaling infrastructure. TURN server fallback is configured for users behind symmetric NATs.\n\nAt peak, the system sustains 50K concurrent WebSocket connections across 4 nodes with a median message delivery latency of 12ms.`,
  },
  {
    id: 3,
    title: 'Zero-Trust File Sharing: End-to-End Encryption in the Browser',
    excerpt: 'Implementing client-side AES-256-GCM encryption, pre-signed S3 URLs, and ephemeral access links for a file sharing platform with zero server-side trust.',
    date: '03.2025',
    content: `FileShareX was designed around a zero-trust principle: the server should never have access to plaintext file contents. Every file is encrypted client-side using the Web Crypto API with AES-256-GCM before upload.\n\nThe encryption flow works as follows: the browser generates a random 256-bit key and a 96-bit IV per file. The file is encrypted in streaming chunks (64KB buffers) to handle large files without memory pressure. The encrypted blob is uploaded directly to S3 via a pre-signed PUT URL — the server never touches the file bytes. The decryption key is embedded in the URL fragment (after the #), which browsers never send to servers.\n\nFor sharing, I implemented three mechanisms: direct links with the key fragment, QR codes encoding the full URL, and email-based sharing where the recipient gets a link that prompts for a PIN (the PIN derives the decryption key via PBKDF2 with 100K iterations). Ephemeral links auto-expire after a configurable TTL or download count using S3 object lifecycle policies and a Lambda function that revokes pre-signed URLs.\n\nThe architecture uses pre-signed URLs for both upload and download, meaning S3 bandwidth costs are the only storage expense — no application-layer proxy needed. File metadata (name, size, expiry, share method) is stored in MongoDB, but never the encryption key.`,
  },
]
