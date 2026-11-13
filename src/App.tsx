import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';

const emailAddress = 'asnithish125@gmail.com';
const publicUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
const visionVoiceImage = publicUrl('images/visionvoice.png');
const spendWiseImage = publicUrl('images/spendwise.png');
const coldGuardImage = publicUrl('images/coldguard.png');
const vistaImage = publicUrl('images/vista.png');
const credentialAssets = publicUrl('assets/credentials');
const socialLinks = [
  { label: 'Email', href: `mailto:${emailAddress}`, icon: 'mail' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nithish-a-s-2a0b50373/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Nithish2102-stark',
    icon: 'github',
  },
] as const;

const projects = [
  {
    name: 'VISIONVOICE',
    category: 'AI-powered voice interaction',
    description:
      'An AI-powered voice interaction system exploring voice processing, intelligent communication, and automation.',
    stack: ['Python', 'AI', 'Voice'],
    monogram: 'VV',
    color: 'peach',
    detail:
      'A voice-focused AI exploration. Add a verified repository, demo, and project screenshots when they are ready to share.',
  },
  {
    name: 'SPENDWISE',
    category: 'Personal finance application',
    description:
      'A Flutter and Dart-based expense tracking application designed to help users understand their spending habits.',
    stack: ['Flutter', 'Dart', 'UX'],
    monogram: 'SW',
    color: 'blue',
    detail:
      'A personal finance and expense-tracking application. Add a verified repository, demo, and real app screenshots when available.',
  },
  {
    name: 'COLDGUARD',
    category: 'Predictive cold-chain monitoring',
    description:
      'A predictive platform designed to monitor cold-box conditions, identify risks, and generate alerts.',
    stack: ['Python', 'Sensors', 'ML'],
    monogram: 'CG',
    color: 'clay',
    detail:
      'A predictive cold-chain monitoring concept. Add verified implementation details, a repository, demo, and project imagery when available.',
  },
  {
    name: 'VISTA',
    category: 'Autonomous robotics',
    description:
      'A vision-based autonomous robotics project combining computer vision, sensors, and intelligent navigation.',
    stack: ['Vision', 'Robotics', 'AI'],
    monogram: 'VS',
    color: 'blue',
    detail:
      'A vision-based autonomous robotics project. Add verified implementation details, a repository, demo, and project imagery when available.',
  },
] as const;

type CredentialCategory =
  | 'CERTIFICATIONS'
  | 'PROGRAM COMPLETION'
  | 'HACKATHONS';

type Credential = {
  title: string;
  issuer: string;
  category: CredentialCategory;
  file: string;
  preview: string;
  fileType: 'pdf' | 'image';
  date?: string;
  note?: string;
};

const credentials: Credential[] = [
  {
    title: 'Google AI Professional Certificate',
    issuer: 'Google / Coursera',
    category: 'CERTIFICATIONS',
    date: 'March 16, 2026',
    file: `${credentialAssets}/google-ai.pdf`,
    preview: `${credentialAssets}/google-ai-preview.png`,
    fileType: 'pdf',
  },
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google / Coursera',
    category: 'CERTIFICATIONS',
    date: 'August 13, 2026',
    file: `${credentialAssets}/google-it-support.pdf`,
    preview: `${credentialAssets}/google-it-support-preview.png`,
    fileType: 'pdf',
  },
  {
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL, IIT Kharagpur',
    category: 'CERTIFICATIONS',
    note: 'Score: 70% — Elite',
    file: `${credentialAssets}/nptel-iot.pdf`,
    preview: `${credentialAssets}/nptel-iot-preview.png`,
    fileType: 'pdf',
  },
  {
    title: 'HTML and CSS in Depth',
    issuer: 'Meta / Coursera',
    category: 'CERTIFICATIONS',
    date: 'February 14, 2026',
    file: `${credentialAssets}/meta-html-css.pdf`,
    preview: `${credentialAssets}/meta-html-css-preview.png`,
    fileType: 'pdf',
  },
  {
    title: 'Problem Solving Using Computational Thinking',
    issuer: 'University of Michigan / Coursera',
    category: 'CERTIFICATIONS',
    date: 'February 6, 2026',
    file: `${credentialAssets}/computational-thinking.pdf`,
    preview: `${credentialAssets}/computational-thinking-preview.png`,
    fileType: 'pdf',
  },
  {
    title: 'thinkRAISE Program — Certificate of Completion',
    issuer: 'AIC RAISE',
    category: 'PROGRAM COMPLETION',
    date: 'April–August 2026',
    file: `${credentialAssets}/thinkraise.jpg`,
    preview: `${credentialAssets}/thinkraise.jpg`,
    fileType: 'image',
  },
  {
    title: 'Smart Horizon 2026 — 48-Hour International Hackathon',
    issuer: 'New Horizon College of Engineering, Bengaluru',
    category: 'HACKATHONS',
    date: 'September 3–5, 2026',
    file: `${credentialAssets}/smart-horizon.png`,
    preview: `${credentialAssets}/smart-horizon.png`,
    fileType: 'image',
    note: 'Certificate of Participation',
  },
  {
    title: "Techbyte Summit '26 — Code Vault, 12-Hour Hackathon",
    issuer: 'KPR Institute of Engineering and Technology',
    category: 'HACKATHONS',
    date: 'October 14–15, 2026',
    file: `${credentialAssets}/techbyte-summit.pdf`,
    preview: `${credentialAssets}/techbyte-summit-preview.png`,
    fileType: 'pdf',
    note: 'Certificate of Participation',
  },
  {
    title: 'NeuraMorphix HackForge 2026',
    issuer: 'SRM Institute of Science and Technology',
    category: 'HACKATHONS',
    file: `${credentialAssets}/neuramorphix.pdf`,
    preview: `${credentialAssets}/neuramorphix-preview.png`,
    fileType: 'pdf',
    note: 'Team LAST STRIKE · Certificate of Participation',
  },
  {
    title: 'CODEFUSION 2K26',
    issuer: 'Echelon Institute of Technology, Faridabad',
    category: 'HACKATHONS',
    file: `${credentialAssets}/codefusion.pdf`,
    preview: `${credentialAssets}/codefusion-preview.png`,
    fileType: 'pdf',
    note: 'Certificate of Participation',
  },
];

const skillGroups = [
  { title: 'Programming', items: 'Python · Java · C · JavaScript · Dart' },
  {
    title: 'AI & machine learning',
    items: 'Artificial Intelligence · Machine Learning Fundamentals · Generative AI · Prompt Engineering',
  },
  { title: 'Frontend', items: 'HTML · CSS · React · Tailwind CSS' },
  { title: 'Backend', items: 'Python · FastAPI · REST APIs' },
  { title: 'Database', items: 'PostgreSQL · Supabase' },
  { title: 'Mobile development', items: 'Flutter · Dart' },
  { title: 'Tools', items: 'Git · GitHub · VS Code · Figma · Antigravity' },
] as const;

const interests = [
  {
    title: 'Artificial Intelligence',
    description:
      "Artificial Intelligence is one of my primary areas of interest. I'm exploring how intelligent systems can understand information, solve problems, and support decision-making. I'm particularly interested in practical AI applications that can address real-world challenges.",
  },
  {
    title: 'Machine Learning',
    description:
      "I'm exploring the fundamentals of Machine Learning, including supervised learning, unsupervised learning, model training, and prediction. My focus is on understanding how data can be used to build models that identify patterns and make useful predictions.",
  },
  {
    title: 'Generative AI',
    description:
      "I'm interested in Generative AI and its ability to create new content, assist developers, and improve productivity. I'm exploring AI-powered tools, prompt engineering, and practical applications of generative models.",
  },
  {
    title: 'Large Language Models',
    description:
      "I'm exploring Large Language Models, their architecture, capabilities, and applications. I'm particularly interested in how LLMs can be integrated into applications to build intelligent assistants, conversational interfaces, and context-aware systems.",
  },
  {
    title: 'Full-Stack Development',
    description:
      "I'm continuously improving my full-stack development skills, working with frontend technologies, backend APIs, databases, and application integration. I enjoy building complete applications that combine intuitive user interfaces with reliable backend systems.",
  },
  {
    title: 'Intelligent Automation',
    description:
      "I'm interested in developing intelligent automation systems that reduce repetitive tasks and improve efficiency. I'm exploring how Python, APIs, AI models, and connected systems can work together to automate practical workflows.",
  },
] as const;

type IconName = (typeof socialLinks)[number]['icon'] | 'arrow' | 'menu' | 'close';

function Icon({ name }: { name: IconName }) {
  if (name === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="1" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    );
  }
  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 9v10M5 5.5v.1M10 19v-6a4 4 0 0 1 8 0v6M10 9v10" />
        <circle cx="5" cy="5.5" r="1.25" />
      </svg>
    );
  }
  if (name === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.2 19.2c-4.1 1.2-4.1-2.1-5.8-2.5m11.6 5v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.3 4.4 4.4 0 0 0-.1-3.3s-1-.3-3.3 1.3a11.5 11.5 0 0 0-6 0C5.7 3.4 4.7 3.7 4.7 3.7a4.4 4.4 0 0 0-.1 3.3 4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.8 5.7 5.5 6a2.8 2.8 0 0 0-.8 2.2v3.2" />
      </svg>
    );
  }
  if (name === 'menu') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    );
  }
  if (name === 'close') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5M7 5h12v12" />
    </svg>
  );
}

function Eyebrow({ number, children }: { number: string; children: string }) {
  return (
    <div className="eyebrow">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon,
  className = '',
}: {
  href: string;
  label: string;
  icon: IconName;
  className?: string;
}) {
  const external = href.startsWith('https://');
  return (
    <a
      className={`social-link ${className}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <Icon name={icon} />
      <span>{label}</span>
      {className.includes('contact-social') && <Icon name="arrow" />}
    </a>
  );
}

function ProjectVisual({
  name,
  monogram,
  color,
  imageUrl,
  onOpen,
}: {
  name: string;
  monogram: string;
  color: string;
  imageUrl?: string;
  onOpen: () => void;
}) {
  return (
    <button
      className={`project-visual visual-${color}${imageUrl ? ' project-visual--image' : ''}`}
      onClick={onOpen}
      type="button"
      aria-label={`Open ${name} project details`}
    >
      {imageUrl ? (
        <img className="project-visual-image" src={imageUrl} alt="" />
      ) : (
        <>
          <span className="visual-orbit" aria-hidden="true" />
          <span className="visual-monogram" aria-hidden="true">
            {monogram}
          </span>
          <span className="visual-note">ADD PROJECT IMAGE</span>
        </>
      )}
      <span className="visual-open" aria-hidden="true">
        <Icon name="arrow" />
      </span>
    </button>
  );
}

function CredentialCarousel() {
  const categories = [
    'ALL',
    'CERTIFICATIONS',
    'PROGRAM COMPLETION',
    'HACKATHONS',
  ] as const;
  const [category, setCategory] =
    useState<(typeof categories)[number]>('ALL');
  const [cardsPerPage, setCardsPerPage] = useState(() => {
    if (typeof window === 'undefined') return 3;
    return window.innerWidth < 600 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  });
  const [pageIndex, setPageIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [activeCredential, setActiveCredential] =
    useState<Credential | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    deltaX: number;
    horizontal: boolean;
  } | null>(null);
  const suppressClickRef = useRef(false);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);

  const filteredCredentials =
    category === 'ALL'
      ? credentials
      : credentials.filter((credential) => credential.category === category);
  const pageCount = Math.ceil(filteredCredentials.length / cardsPerPage);
  const pages = Array.from({ length: pageCount }, (_, pageIndex) =>
    filteredCredentials.slice(
      pageIndex * cardsPerPage,
      (pageIndex + 1) * cardsPerPage,
    ),
  );
  const lastPage = Math.max(0, pages.length - 1);
  const currentPage = Math.min(pageIndex, lastPage);
  const progress = pageCount ? ((currentPage + 1) / pageCount) * 100 : 0;

  useEffect(() => {
    const handleResize = () => {
      const nextCardsPerPage =
        window.innerWidth < 600 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setCardsPerPage(nextCardsPerPage);
      setPageIndex(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!activeCredential) return;
    lightboxCloseRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveCredential(null);
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = document.querySelectorAll<HTMLElement>(
        '.credential-lightbox button:not([disabled]), .credential-lightbox a[href]',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      returnFocusRef.current?.focus();
      returnFocusRef.current = null;
    };
  }, [activeCredential]);

  function movePage(direction: -1 | 1) {
    setPageIndex((current) =>
      Math.max(0, Math.min(lastPage, current + direction)),
    );
  }

  function handleCarouselKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'ArrowLeft' && currentPage > 0) {
      event.preventDefault();
      movePage(-1);
    } else if (event.key === 'ArrowRight' && currentPage < lastPage) {
      event.preventDefault();
      movePage(1);
    }
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      deltaX: 0,
      horizontal: false,
    };
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;
    if (!drag.horizontal && Math.max(Math.abs(deltaX), Math.abs(deltaY)) > 8) {
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        dragRef.current = null;
        setDragOffset(0);
        return;
      }
      drag.horizontal = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (!drag.horizontal) return;
    drag.deltaX = deltaX;
    setDragOffset(deltaX);
    if (event.pointerType === 'mouse') event.preventDefault();
  }

  function finishPointer(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    dragRef.current = null;
    setDragOffset(0);
    if (!drag.horizontal) return;
    const threshold = Math.max(
      45,
      (carouselRef.current?.clientWidth ?? 0) * 0.12,
    );
    if (drag.deltaX <= -threshold && currentPage < lastPage) {
      movePage(1);
    } else if (drag.deltaX >= threshold && currentPage > 0) {
      movePage(-1);
    }
    suppressClickRef.current = true;
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
  }

  function openCredential(
    credential: Credential,
    trigger: HTMLButtonElement,
  ) {
    if (suppressClickRef.current) return;
    returnFocusRef.current = trigger;
    setActiveCredential(credential);
  }

  return (
    <>
      <div className="credential-filters" aria-label="Filter credentials">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? 'is-active' : ''}
            type="button"
            aria-pressed={category === item}
            onClick={() => {
              setCategory(item);
              setPageIndex(0);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div
        className={`credential-carousel${dragOffset ? ' is-dragging' : ''}`}
      >
        <div
          ref={carouselRef}
          className="credential-viewport"
          role="region"
          aria-label="Certificates and achievements"
          tabIndex={0}
          onKeyDown={handleCarouselKeyDown}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishPointer}
          onPointerCancel={finishPointer}
        >
          <div
            className="credential-track"
            style={{
              transform: `translate3d(calc(-${currentPage * 100}% + ${dragOffset}px), 0, 0)`,
            }}
          >
            {pages.map((page, pageNumber) => (
              <div
                className="credential-page"
                key={`${category}-${pageNumber}-${page[0]?.title ?? 'empty'}`}
                aria-hidden={pageNumber !== currentPage}
                inert={pageNumber !== currentPage}
                style={
                  { '--credential-columns': cardsPerPage } as CSSProperties
                }
              >
                {page.map((credential) => (
                  <article className="credential-card" key={credential.title}>
                    <button
                      className="credential-preview"
                      type="button"
                      aria-label={`Open full-size preview: ${credential.title}`}
                      onClick={(event) =>
                        openCredential(credential, event.currentTarget)
                      }
                      draggable={false}
                    >
                      <img
                        src={credential.preview}
                        alt=""
                        draggable={false}
                        loading={pageNumber === currentPage ? 'eager' : 'lazy'}
                      />
                    </button>
                    <div className="credential-card-caption">
                      <span className="credential-category">
                        {credential.category}
                      </span>
                      <h3>{credential.title}</h3>
                      <p>{credential.issuer}</p>
                      {credential.date && <p>{credential.date}</p>}
                      {credential.note && (
                        <p className="credential-note">{credential.note}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="credential-controls">
          <div
            className="credential-progress"
            role="progressbar"
            aria-label="Credential carousel progress"
            aria-valuemin={1}
            aria-valuemax={pageCount}
            aria-valuenow={currentPage + 1}
          >
            <span style={{ width: `${progress}%` }} />
          </div>
          <span className="credential-count" aria-live="polite">
            {String(pageCount ? currentPage + 1 : 0).padStart(2, '0')}{' '}
            / {String(pageCount).padStart(2, '0')}
          </span>
          <div className="credential-arrows">
            <button
              type="button"
              aria-label="Previous credentials"
              disabled={currentPage === 0}
              onClick={() => movePage(-1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 12H5m7 7-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next credentials"
              disabled={currentPage === lastPage}
              onClick={() => movePage(1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {activeCredential && (
        <div
          className="modal-backdrop credential-lightbox-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveCredential(null);
            }
          }}
        >
          <section
            className="credential-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby="credential-lightbox-title"
          >
            <button
              ref={lightboxCloseRef}
              className="modal-close"
              type="button"
              aria-label="Close certificate preview"
              onClick={() => setActiveCredential(null)}
            >
              <Icon name="close" />
            </button>
            <h2 id="credential-lightbox-title">
              {activeCredential.title}
            </h2>
            <img
              src={activeCredential.preview}
              alt={`${activeCredential.title} issued by ${activeCredential.issuer}`}
            />
            {activeCredential.fileType === 'pdf' && (
              <>
                <a
                  className="text-link credential-open-original"
                  href={activeCredential.file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OPEN ORIGINAL PDF
                </a>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [expandedInterests, setExpandedInterests] = useState<Set<number>>(
    () => new Set(),
  );
  const [formMessage, setFormMessage] = useState('');
  const modalRef = useRef<HTMLElement>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const activeProject =
    selectedProject === null ? null : projects[selectedProject];

  useEffect(() => {
    if (selectedProject === null) return;
    modalCloseRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        return;
      }
      if (event.key !== 'Tab' || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      returnFocusRef.current?.focus();
      returnFocusRef.current = null;
    };
  }, [selectedProject]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function openProject(index: number) {
    const activeElement = document.activeElement;
    returnFocusRef.current =
      activeElement instanceof HTMLElement ? activeElement : null;
    setSelectedProject(index);
  }

  function toggleInterest(index: number) {
    setExpandedInterests((expanded) => {
      const next = new Set(expanded);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const emailSubject = subject || `Portfolio enquiry from ${name}`;
    const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    setFormMessage('Opening a draft in your email app. Review it there to send.');
    window.location.href = mailto;
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          NITHISH&apos;S PORTFOLIO<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
        <nav
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {[
            ['ABOUT', '#about'],
            ['PROJECTS', '#projects'],
            ['SKILLS', '#skills'],
            ['EXPERIENCE', '#experience'],
            ['CONTACT', '#contact'],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <span className="nav-divider" />
          <a
            className="resume-link"
            href={publicUrl('resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            aria-label="Open resume PDF in a new tab"
          >
            RESUME <Icon name="arrow" />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-copy">
            <p className="hero-kicker">
              AI / ML STUDENT · SOFTWARE DEVELOPER <span>— 2025 / 29</span>
            </p>
            <h1>
              HELLO,
              <br />
              <em>I&apos;M NITHISH.</em>
            </h1>
            <p className="hero-subtitle">
              BUILDING IDEAS INTO
              <br />
              INTELLIGENT EXPERIENCES.
            </p>
            <p className="hero-description">
              I&apos;m Nithish A S, an Artificial Intelligence and Machine
              Learning student passionate about technology, software
              development, and building innovative solutions that solve
              real-world problems.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                EXPLORE MY WORK <span className="button-arrow">↘</span>
              </a>
              <a className="text-link" href="#contact">
                LET&apos;S CONNECT <Icon name="arrow" />
              </a>
            </div>
            <div className="hero-socials">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          <div className="hero-side">
            <div className="portrait-art">
              <img
                className="portrait-image"
                src={publicUrl('images/prof.png')}
                alt="Portrait of Nithish A S"
              />
              <div className="portrait-statement">
                <span>CURIOUS BY NATURE</span>
                <span>BUILDING WITH INTELLIGENCE</span>
                <span>CREATING WITH PURPOSE</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>COIMBATORE, INDIA</span>
            <a href="#about"><i /> SCROLL TO EXPLORE</a>
            <span>01 — 10</span>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <Eyebrow number="01">ABOUT ME</Eyebrow>
          <div className="about-main">
            <h2 className="display-heading">
              CURIOUS BY
              <br />
              NATURE.
              <br />
              <em>BUILDER BY</em>
              <br />
              <em>CHOICE.</em>
            </h2>
            <div className="about-copy">
              <p className="about-lead">
                I&apos;m Nithish A S, an Artificial Intelligence and Machine
                Learning student pursuing my B.E. at Rathinam Technical Campus
                (2025–2029).
              </p>
              <p>
                I&apos;m passionate about technology, software development, and
                building intelligent solutions that address real-world
                challenges.
              </p>
              <p>
                My interests span Artificial Intelligence, Machine Learning,
                application development, and modern web technologies. I enjoy
                working across different technologies, exploring new tools, and
                understanding how systems work together to create meaningful
                applications.
              </p>
              <p>
                I believe in learning by building. Through personal projects,
                technical experimentation, and collaborative development, I
                continuously work on strengthening my programming skills,
                improving my problem-solving abilities, and turning ideas into
                functional solutions.
              </p>
              <p>
                My goal is to grow as a technology professional, deepen my
                expertise in AI and software engineering, and contribute to
                developing practical, scalable, and impactful technology
                solutions.
              </p>
              <div className="about-meta">
                <div>
                  <span>EDUCATION</span>
                  <strong>B.E. AI &amp; ML / 2025—2029</strong>
                </div>
                <div>
                  <span>BASED IN</span>
                  <strong>Coimbatore, India</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="principles">
            {[
              ['01', 'EXPLORE', 'Exploring artificial intelligence, machine learning, and emerging technologies.'],
              ['02', 'CREATE', 'Transforming ideas into functional applications and intelligent solutions.'],
              ['03', 'EXPERIMENT', 'Learning through hands-on projects, collaboration, and iteration.'],
            ].map(([number, title, copy]) => (
              <article className="principle" key={number}>
                <span className="micro-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <Eyebrow number="02">SELECTED WORK</Eyebrow>
          <div className="section-intro">
            <h2 className="display-heading">
              A FEW THINGS
              <br />
              <em>I&apos;VE BUILT.</em>
            </h2>
            <p>
              Four explorations where code meets curiosity.
              <br />
              Open a project to see its current details.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article
                className={`project-card${index % 2 === 1 ? ' project-reverse' : ''}`}
                key={project.name}
              >
                <ProjectVisual
                  name={project.name}
                  monogram={project.monogram}
                  color={project.color}
                  imageUrl={
                    project.name === 'VISIONVOICE'
                      ? visionVoiceImage
                      : project.name === 'SPENDWISE'
                        ? spendWiseImage
                        : project.name === 'COLDGUARD'
                          ? coldGuardImage
                          : project.name === 'VISTA'
                            ? vistaImage
                            : undefined
                  }
                  onOpen={() => openProject(index)}
                />
                <div className="project-info">
                  <span className="project-number">
                    {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>
                  <h3>{project.name}</h3>
                  <p className="project-category">{project.category}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-footer">
                    <span>{project.stack.join(' / ')}</span>
                    <button
                      className="project-open"
                      type="button"
                      onClick={() => openProject(index)}
                      aria-label={`View ${project.name} details`}
                    >
                      VIEW PROJECT <Icon name="arrow" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-pad" id="skills">
          <Eyebrow number="03">MY TOOLKIT</Eyebrow>
          <div className="section-intro">
            <h2 className="display-heading">
              TOOLS OF
              <br />
              <em>MY TRADE.</em>
            </h2>
            <p>
              No percentages. No empty claims.
              <br />
              Just tools I use to make things.
            </p>
          </div>
          <div className="skill-list">
            {skillGroups.map((group, index) => (
              <div className="skill-row" key={group.title}>
                <span className="micro-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="experience section-pad" id="experience">
          <Eyebrow number="04">BEYOND THE CLASSROOM</Eyebrow>
          <div className="section-intro">
            <h2 className="display-heading">
              LEARNING
              <br />
              <em>BY DOING.</em>
            </h2>
            <p>
              A living record of collaborations,
              <br />
              workshops, and experiments.
            </p>
          </div>
          <div className="experience-list">
            <article className="experience-row">
              <span className="experience-date">2025 — ∞</span>
              <div>
                <h3>THE NEXT CHAPTER</h3>
                <p>
                  Verified hackathons, workshops, project development, team
                  collaboration, and technical leadership will be documented
                  here as they happen.
                </p>
              </div>
              <span className="experience-status">EDITABLE ENTRY</span>
            </article>
            <article className="experience-row">
              <span className="experience-date">NOW</span>
              <div>
                <h3>BUILDING IN PUBLIC</h3>
                <p>
                  Exploring intelligent systems and sharing the process of
                  turning ideas into useful software.
                </p>
              </div>
              <span className="experience-status">IN PROGRESS</span>
            </article>
          </div>
        </section>

        <section className="recognition section-pad" id="certifications">
          <Eyebrow number="05">RECOGNITION</Eyebrow>
          <div className="section-intro">
            <h2 className="display-heading">
              EVERY STEP
              <br />
              <em>COUNTS.</em>
            </h2>
            <p>
              Certifications, program completion,
              <br />
              and hackathon participation.
            </p>
          </div>
          <CredentialCarousel />
        </section>

        <section className="education section-pad" id="education">
          <Eyebrow number="06">EDUCATION</Eyebrow>
          <div className="education-layout">
            <div className="education-content">
              <h2 className="display-heading">
                WHERE THE
                <br />
                <em>JOURNEY BEGINS.</em>
              </h2>
              <div className="education-details">
                <h3>B.E. Artificial Intelligence and Machine Learning</h3>
                <p>Rathinam Technical Campus</p>
                <p className="education-location">
                  2025–2029 <span>Coimbatore, India</span>
                </p>
              </div>
              <ol className="education-timeline">
                <li>
                  <span>2025</span>
                  <p>Undergraduate journey begins.</p>
                </li>
                <li>
                  <span>2025–2029</span>
                  <p>B.E. Artificial Intelligence and Machine Learning.</p>
                </li>
                <li>
                  <span>2029</span>
                  <p>Graduation.</p>
                </li>
              </ol>
            </div>
            <figure className="education-image">
              <img
                src={publicUrl('images/rathinam-campus.png')}
                alt="Aerial view of Rathinam Technical Campus in Coimbatore"
                loading="lazy"
              />
              <figcaption>
                RATHINAM TECHNICAL CAMPUS · COIMBATORE, INDIA
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="interests section-pad" id="interests">
          <div className="interests-heading">
            <Eyebrow number="07">CURRENTLY EXPLORING</Eyebrow>
            <p>Always learning. Always building.</p>
          </div>
          <div className="interest-list">
            {interests.map((interest, index) => (
              <div
                className={`interest-row${expandedInterests.has(index) ? ' is-expanded' : ''}`}
                key={interest.title}
                role="button"
                tabIndex={0}
                aria-label={`${expandedInterests.has(index) ? 'Collapse' : 'Expand'} ${interest.title}`}
                aria-expanded={expandedInterests.has(index)}
                aria-controls={`interest-description-${index + 1}`}
                onClick={() => toggleInterest(index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleInterest(index);
                  }
                }}
              >
                <span className="micro-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{interest.title}</h3>
                <span className="interest-toggle" aria-hidden="true">
                  <Icon name="arrow" />
                </span>
                <div
                  className="interest-answer"
                  id={`interest-description-${index + 1}`}
                  aria-hidden={!expandedInterests.has(index)}
                  inert={!expandedInterests.has(index)}
                >
                  <div className="interest-answer-inner">
                    <p>{interest.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <Eyebrow number="08">GET IN TOUCH</Eyebrow>
          <div className="contact-layout">
            <div className="contact-copy">
              <h2 className="display-heading">
                LET&apos;S MAKE
                <br />
                SOMETHING
                <br />
                MEANINGFUL.
              </h2>
              <p>
                Have an interesting idea, project, or opportunity? Let&apos;s
                connect, exchange ideas, and build something impactful.
              </p>
              <div className="contact-socials">
                {socialLinks.map((link) => (
                  <SocialLink
                    key={link.label}
                    {...link}
                    className="contact-social"
                  />
                ))}
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label>
                <span>NAME</span>
                <input
                  autoComplete="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                <span>EMAIL</span>
                <input
                  autoComplete="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label>
                <span>SUBJECT</span>
                <input
                  name="subject"
                  placeholder="What are we building?"
                  required
                />
              </label>
              <label>
                <span>MESSAGE</span>
                <textarea
                  name="message"
                  placeholder="Tell me a little about it..."
                  rows={3}
                  required
                />
              </label>
              <button className="button button-dark" type="submit">
                SEND MESSAGE <Icon name="arrow" />
              </button>
              <p className="form-note" role="status" aria-live="polite">
                {formMessage ||
                  'This opens your email app with a ready-to-send message.'}
              </p>
            </form>
          </div>
        </section>
      </main>

      <a
        className="whatsapp-float"
        href={`https://wa.me/918438128409?text=${encodeURIComponent('Hi Nithish! I visited your portfolio and would like to connect with you.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact me on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 32l8.3-2.2c2.3 1.3 4.8 2 7.4 2h.1c8.6 0 15.6-7 15.6-15.6 0-4.2-1.6-8.1-4.6-11.1C24.1 2 20.2.4 16 .4zm0 28.7c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2.1-2-4.5-2-7C3 8.7 8.9 2.8 16.2 2.8c3.5 0 6.8 1.4 9.3 3.9s3.9 5.8 3.9 9.3c0 7.3-5.9 13.1-13.2 13.1z"
          />
          <path
            fill="currentColor"
            d="M23.1 19.2c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.8-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.3 6.8 6 .9.4 1.6.6 2.1.7.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z"
          />
        </svg>
        <span className="whatsapp-tooltip">Chat on WhatsApp</span>
      </a>

      {activeProject && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <section
            className="project-modal"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className="modal-close"
              ref={modalCloseRef}
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              <Icon name="close" />
            </button>
            <span className="project-number">
              {String((selectedProject ?? 0) + 1).padStart(2, '0')} /{' '}
              {String(projects.length).padStart(2, '0')} — PROJECT NOTES
            </span>
            <h2 id="modal-title">{activeProject.name}</h2>
            <p className="project-category">{activeProject.category}</p>
            <p className="modal-description">{activeProject.detail}</p>
            <div className="modal-stack">
              <span>TECHNOLOGY</span>
              <p>{activeProject.stack.join(' · ')}</p>
            </div>
            <div className="modal-links">
              {activeProject.name !== 'VISTA' &&
                activeProject.name !== 'SPENDWISE' && (
                  <p>
                    <span>REPOSITORY</span>
                    {activeProject.name === 'VISIONVOICE' ||
                    activeProject.name === 'COLDGUARD' ? (
                      <a
                        className="modal-repository-link"
                        href={
                          activeProject.name === 'VISIONVOICE'
                            ? 'https://github.com/Nithish2102-stark/visionvoice'
                            : 'https://github.com/Nithish2102-stark/Cold_Gaurd'
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View GitHub Repository <Icon name="github" />
                      </a>
                    ) : (
                      ' Link not provided'
                    )}
                  </p>
                )}
              <p
                className={
                  activeProject.name === 'VISIONVOICE' ||
                  activeProject.name === 'SPENDWISE' ||
                  activeProject.name === 'COLDGUARD' ||
                  activeProject.name === 'VISTA'
                    ? 'modal-project-image-row'
                    : undefined
                }
              >
                <span>PROJECT IMAGE</span>
                {activeProject.name === 'VISIONVOICE' ||
                activeProject.name === 'SPENDWISE' ||
                activeProject.name === 'COLDGUARD' ||
                activeProject.name === 'VISTA' ? (
                  <img
                    className="modal-project-image"
                    src={
                      activeProject.name === 'VISIONVOICE'
                        ? visionVoiceImage
                        : activeProject.name === 'SPENDWISE'
                          ? spendWiseImage
                          : activeProject.name === 'COLDGUARD'
                            ? coldGuardImage
                            : vistaImage
                    }
                    alt={`${activeProject.name} project infographic`}
                    loading="lazy"
                  />
                ) : (
                  ' Add original screenshot'
                )}
              </p>
            </div>
            <a
              className="text-link modal-contact"
              href={`mailto:${emailAddress}?subject=${encodeURIComponent(`Question about ${activeProject.name}`)}`}
            >
              ASK ABOUT THIS PROJECT <Icon name="arrow" />
            </a>
          </section>
        </div>
      )}
    </>
  );
}

export default App;
