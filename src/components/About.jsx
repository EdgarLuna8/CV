import React, { useEffect, useState } from 'react';
import styles from './about.module.css';

const contactLinks = [
  { label: 'Phone', value: '+52 333 009 9430', href: 'https://wa.me/523330099430' },
  { label: 'Email', value: 'ealuna1998@gmail.com', href: 'mailto:ealuna1998@gmail.com' },
  { label: 'Location', value: 'Zapopan, Jalisco', href: 'https://www.google.com/maps/place/Zapopan,+Jalisco' },
  { label: 'LinkedIn', value: '/edgarluna8', href: 'https://www.linkedin.com/in/edgarluna8/' },
  { label: 'GitHub', value: 'github.com/edgarluna8', href: 'https://github.com/edgarluna8' },
];

const highlights = [
  'Data & Tech Lead',
  'AI Architect',
  'AI Evangelist',
  'IT Engineer',
  'Analytics Engineer',
  'Full-Stack Developer',
  'Enterprise Architecture',
  'Technical Project Lead',
  'Data & BI Strategy',
  'Cloud & Automation',
  'Business Systems Analyst',
];

const leadershipFocus = [
  ['Direction', 'Technology roadmaps and architecture'],
  ['People', 'Team coordination and technical guidance'],
  ['Innovation', 'AI adoption and process automation'],
  ['Business', 'Stakeholder and IT alignment'],
];

const jobs = [
  {
    company: 'PiSA',
    role: 'Data Expert',
    period: 'May 2025 - Present',
    bullets: [
      'BI & analytics initiatives',
      'Cloud data platforms with BigQuery',
      'Data science and advanced analytics',
      'AI solutions for NLP and process automation',
      'Data modeling and quality assurance',
    ],
  },
  {
    company: 'Toka',
    role: 'Software Engineer',
    period: 'Apr 2024 - Apr 2025',
    bullets: [
      'Led technology projects and coordinated team members under my supervision',
      'TOGAF-based enterprise architecture analysis',
      'Business and technology alignment in finance',
      'Design and development of financial systems',
    ],
  },
  {
    company: 'Flex',
    role: 'Full-Stack Developer',
    period: 'Jan 2021 - Dec 2023',
    bullets: [
      'Provided technical leadership across initiatives, guiding delivery and team collaboration',
      'Web, desktop and mobile development',
      'IT workflow design and optimization',
      'SharePoint, bots and analytics solutions',
      'Cloud infrastructure and deployment',
    ],
  },
  {
    company: 'Inprodi Web Studio',
    role: 'Web Developer',
    period: 'May 2020 - Jan 2021',
    bullets: [
      'Frontend architecture and UX/UI',
      'CRM/ERP, SPAs and microservices development',
      'Product ownership and testing strategy',
      'Agile planning with sprints and user stories',
      'Full stack Laravel and MERN delivery',
    ],
  },
];

const education = [
  {
    school: 'Technology Institute of Jalisco (ITJ)',
    program: 'Software Engineer',
    period: 'August 2017 - December 2022',
    bullets: ['Average grade: 88/100', 'Instructor, E-commerce Course', 'Football Club Member', 'Project Fair Participant, TECMM (2018 and 2019)'],
  },
  {
    school: 'Tecmilenio University',
    program: 'High school',
    period: 'August 2014 - July 2017',
    bullets: ['Average grade: 89/100', 'Halley Society Member', 'Tecmilenio Project Fair Participant', 'Football Team Member'],
  },
];

const skillGroups = [
  {
    title: 'Technology Leadership & Governance',
    focus: 'Connecting technical direction, delivery and business priorities.',
    items: [
      ['Leadership', 'Technical direction, project leadership and cross-functional collaboration'],
      ['Governance', 'ITIL, COBIT, PMP, DAMA-DMBOK and TOGAF'],
      ['Planning', 'GAP analysis, Gantt planning, MVPs, user stories and Scrum'],
      ['Business', 'Working capital, inventory, payment methods and functional/matrix structures'],
      ['Industries', 'Pharma, finance, manufacturing and real estate'],
    ],
  },
  {
    title: 'Architecture, Cloud & Security',
    focus: 'Designing scalable, secure and operationally sound technology ecosystems.',
    items: [
      ['Architecture', 'Enterprise architecture, microservices, MVC, SPA, SaaS and IaaS'],
      ['Cloud & Platforms', 'Azure, AWS, GCP, Heroku and Hostinger'],
      ['Infrastructure', 'Linux, Windows Server, Nginx, Apache, Docker, YAML and SSH'],
      ['Security', 'OWASP, OAuth2, SSO, OpenAPI and JWT'],
      ['Databases', 'PostgreSQL, Oracle, SQL Server, MySQL, MongoDB, MariaDB and SQLite'],
    ],
  },
  {
    title: 'Data, Analytics & AI',
    focus: 'Turning governed data and intelligent automation into business value.',
    items: [
      ['Data Strategy', 'BI, ETL, data quality, Medallion Architecture and DAMA-DMBOK'],
      ['Analytics', 'Power BI, Tableau and BigQuery'],
      ['AI & ML', 'Machine learning, LLMs, GenAI, NLP and Cognitive Services'],
      ['AI Enablement', 'Prompt engineering, Claude and Codex'],
      ['Automation', 'Power Automate, Selenium, scraping and MLOps'],
    ],
  },
  {
    title: 'Engineering & Product Delivery',
    focus: 'Leading reliable software delivery from discovery through operation.',
    items: [
      ['Full-Stack', 'JavaScript, PHP, Python and .NET'],
      ['Delivery', 'DevOps, CI/CD, SDLC, SOLID, Git, Jira and Azure DevOps'],
      ['Products', 'Web, desktop and mobile solutions, CRM/ERP and business systems'],
      ['Tooling', 'pip, npm, NuGet, Composer and Postman'],
      ['Design & Documentation', 'UML, use cases, Mermaid, Figma, Draw.io, Confluence and Notion'],
    ],
  },
];

const traits = ['Proactive', 'Versatile', 'Geek', 'VISA', 'Passport', 'Single'];

const summary =
  'IT Engineer, Tech Lead and Analytics Engineer with 5+ years of experience designing scalable, secure and efficient technology systems. Experienced in AI architecture and adoption, data platforms, business systems, software architecture, automation, full-stack development, technical leadership and business-technology alignment.';

const About = () => {
  const [printMode, setPrintMode] = useState('visual');

  useEffect(() => {
    const resetPrintMode = () => setPrintMode('visual');
    window.addEventListener('afterprint', resetPrintMode);

    return () => {
      window.removeEventListener('afterprint', resetPrintMode);
    };
  }, []);

  const handlePrint = (mode) => {
    setPrintMode(mode);
    window.setTimeout(() => window.print(), 80);
  };

  return (
    <main className={`${styles.page} ${printMode === 'ats' ? styles.printAts : styles.printVisual}`}>
      <div className={styles.printToolbar} aria-label="Download options">
        <button type="button" onClick={() => handlePrint('visual')}>
          PDF
        </button>
        <button type="button" onClick={() => handlePrint('ats')}>
          PDF ATS
        </button>
        <a href="mailto:ealuna1998@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/edgarluna8/">LinkedIn</a>
      </div>

      <section className={styles.shell} aria-label="Edgar Luna curriculum">
        <aside className={styles.sidebar}>
          <div className={styles.photoWrap}>
            <img className={styles.photo} src="tft.png" alt="Edgar Luna" />
            <span className={styles.flag}>MX</span>
          </div>

          <div className={styles.identity}>
            <p className={styles.kicker}>Curriculum Vitae</p>
            <h1>Edgar Luna</h1>
            <p>Data & Tech Lead</p>
          </div>

          <p className={styles.about}>
            I am Edgar Luna, an innovative IT Engineer, Tech Lead and Analytics Engineer with over
            5 years of experience designing scalable, secure and efficient technology systems while
            aligning IT strategy with business objectives.
          </p>

          <section className={styles.panel}>
            <h2>Reach Me At</h2>
            <div className={styles.contactList}>
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} className={styles.contactItem}>
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
          </section>

          <section className={styles.panel}>
            <h2>Core Profile</h2>
            <div className={styles.chips}>
              {highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section className={`${styles.panel} ${styles.leadershipPanel}`}>
            <h2>Leadership Focus</h2>
            <div className={styles.leadershipList}>
              {leadershipFocus.map(([label, value]) => (
                <div key={label}>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>

        <div className={styles.content}>
          <section className={styles.heroStrip}>
            <div>
              <p className={styles.kicker}>Data, AI, Architecture and Delivery</p>
              <h2>Business-minded engineering for useful systems.</h2>
            </div>
            <div className={styles.metrics} aria-label="Quick profile metrics">
              <span>5+ Years</span>
              <span>Spanish 100%</span>
              <span>English B2</span>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Career History</h2>
            <div className={styles.timeline}>
              {jobs.map((job) => (
                <article className={styles.timelineItem} key={`${job.company}-${job.role}`}>
                  <div>
                    <h3>{job.company}</h3>
                    <p>
                      {job.role} <span>{job.period}</span>
                    </p>
                  </div>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Academic History</h2>
            <div className={styles.educationGrid}>
              {education.map((item) => (
                <article className={styles.educationCard} key={item.school}>
                  <h3>{item.school}</h3>
                  <p>
                    {item.program} <span>{item.period}</span>
                  </p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Leadership & Technical Capabilities</h2>
            <div className={styles.skillsGrid}>
              {skillGroups.map((group) => (
                <article className={styles.skillCard} key={group.title}>
                  <h3>{group.title}</h3>
                  <p className={styles.skillFocus}>{group.focus}</p>
                  <ul>
                    {group.items.map(([label, value]) => (
                      <li key={label}>
                        <strong>{label}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className={`${styles.section} ${styles.traitSection}`}>
            <h2>Personal Signals</h2>
            <div className={styles.traits}>
              {traits.map((trait) => (
                <span key={trait}>{trait}</span>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className={styles.atsResume} aria-label="ATS resume">
        <header className={styles.atsHeader}>
          <h1>Edgar Luna</h1>
          <p>Data & Tech Lead | AI Architect | IT Engineer | Analytics Engineer | Full-Stack Developer</p>
          <address>
            Zapopan, Jalisco, Mexico | Phone: +52 333 009 9430 | Email: ealuna1998@gmail.com |
            LinkedIn: linkedin.com/in/edgarluna8 | GitHub: github.com/edgarluna8
          </address>
        </header>

        <section className={styles.atsSection}>
          <h2>Summary</h2>
          <p>{summary}</p>
        </section>

        <section className={styles.atsSection}>
          <h2>Experience</h2>
          {jobs.map((job) => (
            <article className={styles.atsItem} key={`ats-${job.company}-${job.role}`}>
              <h3>{job.company}</h3>
              <p>
                <strong>{job.role}</strong> | {job.period}
              </p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={`ats-${job.company}-${bullet}`}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className={styles.atsSection}>
          <h2>Education</h2>
          {education.map((item) => (
            <article className={styles.atsItem} key={`ats-${item.school}`}>
              <h3>{item.school}</h3>
              <p>
                <strong>{item.program}</strong> | {item.period}
              </p>
            </article>
          ))}
        </section>

        <section className={styles.atsSection}>
          <h2>Skills</h2>
          {skillGroups.map((group) => (
            <p key={`ats-${group.title}`}>
              <strong>{group.title}:</strong> {group.focus}{' '}
              {group.items.map(([label, value]) => `${label}: ${value}`).join('; ')}
            </p>
          ))}
        </section>
      </section>
    </main>
  );
};

export default About;
