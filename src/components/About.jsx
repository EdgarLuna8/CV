import React from 'react';

import 'bootstrap'
import Call from './ButtonCall'

const About = () => {
  return (
    <div className="container d-flex justify-content-center mt-4 mb-4 ">
      <div className="card shadow p-3 mb-5 bg-body rounded">
        <img className="rounded-circle mx-auto d-block mt-1" src="tft.png" alt="" height="150px" />

        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Edgar Adrian Luna Lopez</h1>
            <h2>| Software Engineer | Business Systems Analyst | Full stack Developer |</h2>
            <div className="row">
              <div className="col-md-6">
                <h3>About me</h3>
                <p className='text-center'>Hi there! I'm a 25-year-old software
                  developer and data analyst with 5 years of experience in the tech industry. <br />   I thrive on taking up new challenges and constantly
                  learning. <br />
                  I have a passion for coding and enjoy exploring new technologies, traveling to new places, and staying up to date with the latest tech trends.</p>
              </div>
              <div className="col-md-6">
                <h3>Contact me!</h3>
                <br />
                <Call link="mailto:ealuna1998@gmail.com" title="Email" />
                <Call link="https://wa.me/523330099430" title="WhatsApp" />
                <Call link="https://www.linkedin.com/in/edgarluna8/" title="LinkedIn" />
                <Call link="https://drive.google.com/file/d/1y-GzqPBk9uSQbyliEvxeTbgjE9DxGzQD/view?usp=sharing" title="CV" />
                <Call link="https://github.com/edgarluna8" title="Github" />

              </div>
            </div>
          </div>
          <div className='row'>
            <div className="col m-1">
              <div>
                <h3 className='text-center'>Academic History</h3>
                <b>Technology Institute of Jalisco</b>
                <p>Software Engineer | August 2017 - December 2022</p>
                <ul>
                  <li>Prom 88</li>
                  <li>Teacher, E-Commerce Course.</li>
                  <li>Member, Football Team Club.</li>
                  <li>Member, Fair Projects TECMM 2018,2019...</li>
                </ul>
                <b>Tecmilenio</b>
                <p>High School | August 2014 - July 2017</p>
                <ul>
                  <li>Prom 88</li>
                  <li>Member, Halley Socety.</li>
                  <li>Member, Fair Project Tecmilenio Member.</li>
                  <li>Football Team</li>
                </ul>
              </div>
            </div>
            {/**  Carrer History*/}
            <div className="col m-1">
              <div>
                <h3 className='text-center'>Career History</h3>
                <b>Toka Internacional</b>
                <p>Software Engineer | April 2024 - now</p>
                <ul>
                  <li>Technical analysis and planning</li>
                  <li>Business documentation and IT deployments</li>
                  <li>Software design and architecture</li>
                </ul>
              </div>
              <div>
                <b>Flextronics</b>
                <p>Full Stack Dev | October 2021 - December 2023</p>
                <ul>
                  <li>Full stack software development</li>
                  <li>Flow design and implementations</li>
                  <li>Design UX | UI</li>
                  <li>SharePoint, Bots and Analytics</li>
                  <li>Azure Architecture, AWS and Open AI</li>
                </ul>
                <p>Data Analytics Intern | January 2021 - October 2021</p>
                <ul>
                  <li>Porwer BI &Tableau Dashboards</li>
                  <li>Procedures, Jobs and Querys SQL</li>
                  <li>RPA ( Katalon and Power Automate )</li>
                  <li>Software Developments in Manufacturing Areas</li>
                </ul>
              </div>
              <div>
                <b>Inprodi Web Studio</b>
                <p>Web Developer | May 2020 - January 2021</p>
                <ul>
                  <li>Layout Interfaces-Product</li>
                  <li>CRM - ERP Development, Websites, etc.</li>
                  <li>Testing and planning as product owner.</li>
                  <li>Planning Agile Methods (Sprints and Blocks).</li>
                  <li>Laravel and MERN Full stack</li>
                </ul>
              </div>
              <div>

                <b>Desarrollos Inmobliarios de Occidente</b>
                <p>IT Support & Tester Jr | March 2019 - June 2020</p>
                <ul>
                  <li>BD Administrator of CRM-ERP.</li>
                  <li>IT Support, Testing & Helpdesk.</li>
                  <li>Web development.</li>
                  <li>SQL Reports</li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div className="col m-1">
              <h3>Software Skills</h3>
              <ul>
                {/* Development Stacks */}
                <li><strong>Development Stacks:</strong></li>
                <li>Full JavaScript Stack (MEVN, MERN, MEAN)</li>
                <li>Full PHP Stack (Laravel, Symfony, CodeIgniter)</li>
                <li>Full .NET Stack (SharePoint, C#, Blazor, Fluent, ASP, CORE)</li>
                <li>Full Python Stack (Django, Flask & Pandas)</li>
                <li>Mobile Development (Kotlin, DART, MAUI, Swift)</li>
                <br />

                {/* Tech Tools by Area */}
                <li><strong>Tech Tools by Area:</strong></li>
                <li>Cloud (Azure, AWS, Google Cloud)</li>
                <li>UX & UI (Figma)</li>
                <li>BI (Tableau, PowerBI)</li>
                <li>RPA (Power Automate, Selenium, Katalon, Postman)</li>
                <li>DBA (MariaDB, Oracle DB, PostgreSQL, SQL Server, Mongo)</li>
                <li>INFRA (Windows Server, Apache, NGINX, Heroku)</li>
                <li>SEC (CheckMarx, DependBot, DRP, API Mgmnt - Mulesoft)</li>
                <li>Data Engineering (Talend, Informatica, SNF, ETL)</li>
                <br />

                {/* Methodologies and Practices knowledge */}
                <li><strong>Methodologies and Practices knowledge:</strong></li>
                <li>Development Methodologies (DevOps, CI/CD, Monitoring)</li>
                <li>Agile Methodologies (Scrum, Kanban, LEAN, Kaizen)</li>
                <li>IT Support Methodologies (Citrix, Team Viewer, SLA, Hotfix)</li>
                <li>CMS Support (WordPress, Google Pages, SAP, Salesforce)</li>
                <br />

                {/* Software Documentation and Planning */}
                <li><strong>Software Documentation and Planning:</strong></li>
                <li>Documentation under IT frameworks</li>
                <li>Diagram development for projects (Bizagi, Draw.io)</li>
                <li>Planning and deliverables to IT production projects</li>
                <li>Business analysis oriented to IT requirements</li>
                <br />

                {/* Business Analysis and New Skills */}
                <li><strong>Business Analysis and New Skills:</strong></li>
                <li>B.S.A, COBIT19, ITIL, PMP, KYC & KYB</li>
                <li>E.S.A (MVC, SPA, Embedded, CRM, PWA, ERP, APIs)</li>
                <li>AI (LLMS, GenAI, Predictions, Cognitive Services)</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
