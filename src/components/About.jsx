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
  'IT Engineer',
  'Analytic Engineer',
  'Full Stack Developer',
  'Business Systems Analyst',
];

const jobs = [
  {
    company: 'PiSA',
    role: 'Data Expert',
    period: 'May 2025 - Now',
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
      'TOGAF-based enterprise architecture analysis',
      'Business and technology alignment in finance',
      'Design and development of financial systems',
    ],
  },
  {
    company: 'Flex',
    role: 'Full Stack Developer',
    period: 'Jan 2021 - Dec 2023',
    bullets: [
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
    bullets: ['Prom 88', 'Teacher, E-Commerce Course', 'Member, Football Team Club', 'Member, Fair Projects TECMM 2018, 2019'],
  },
  {
    school: 'Tecmilenio University',
    program: 'High school',
    period: 'August 2014 - July 2017',
    bullets: ['Prom 89', 'Member, Halley Society', 'Member, Fair Project Tecmilenio', 'Member, Football Team'],
  },
];

const skillGroups = [
  {
    title: 'Software Development Stacks',
    items: [
      ['Full-Stack', 'JavaScript, PHP, Python and .NET, Git, Jira'],
      ['Libraries', 'pip, npm, nuget, composer, Claude and Codex'],
      ['Documentation', 'Confluence, Notion, Azure DevOps'],
    ],
  },
  {
    title: 'Technologies & Tools',
    items: [
      ['Cloud', 'Azure, AWS, GCP, Heroku, Hostinger'],
      ['Data/BI', 'Power BI, Tableau, BigQuery'],
      ['Architecture', 'Microservices, MVC, SPA, Docker, YAML'],
      ['Automation', 'Power Automate, Selenium, Postman'],
      ['Databases', 'PostgreSQL, Oracle, SQL Server, MySQL, MongoDB, MariaDB, SQLite'],
      ['Flows & UX/UI', 'Mermaid, UML, User Cases, Figma, Draw.io'],
    ],
  },
  {
    title: 'Infrastructure, Security & Data AI',
    items: [
      ['Env', 'Linux, Windows Server, Nginx, Apache, SSH'],
      ['Sec', 'OWASP, OAuth2, SSO, OpenAPI, JWT'],
      ['Data', 'BI, ETL, Medallion Architecture'],
      ['AI', 'ML, LLMs, Prompt Engineering, GenAI, NLP, Cognitive Services'],
    ],
  },
  {
    title: 'Business & Delivery Knowledge',
    items: [
      ['Features', 'DevOps, CI/CD, SOLID, SDLC, Scrum'],
      ['Frameworks', 'ITIL, COBIT, PMP, DAMA-DMBOK, TOGAF'],
      ['Business', 'Stock, working capital, functional and matrix structure'],
      ['IT', 'User stories, GAP analysis, Gantts, MVPs, pay methods, CRM/ERP, SaaS/IaaS, MLOps, scraping'],
      ['Industries', 'Real estate, manufacturing, finance and pharma'],
    ],
  },
];

const traits = ['Proactive', 'Versatile', 'Geek', 'VISA', 'Passport', 'Single'];

const summary =
  'IT Engineer, Tech Lead and Analytic Engineer with 5+ years of experience designing scalable, secure and efficient technology systems. Experienced in data platforms, business systems, software architecture, automation, AI solutions, full stack development and business-technology alignment.';

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
            I am Edgar Luna, a passionate and innovative IT Engineer, Tech Lead and Analytic
            Engineer with over 5 years of experience designing scalable, secure and efficient tech
            systems while aligning IT strategies with business objectives.
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
            <h2>Skills & Stacks</h2>
            <div className={styles.skillsGrid}>
              {skillGroups.map((group) => (
                <article className={styles.skillCard} key={group.title}>
                  <h3>{group.title}</h3>
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
          <p>Data & Tech Lead | IT Engineer | Analytic Engineer | Full Stack Developer</p>
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
                <strong>{job.role}</strong> | {job.period.replace('Now', 'Present')}
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
              <strong>{group.title}:</strong>{' '}
              {group.items.map(([label, value]) => `${label}: ${value}`).join('; ')}
            </p>
          ))}
        </section>
      </section>
    </main>
  );
};

export default About;
