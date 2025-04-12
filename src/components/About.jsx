import React from 'react';
import 'bootstrap';
import Call from './ButtonCall';

const About = () => {
  return (
    <div className="container d-flex justify-content-center mt-4 mb-4">
      <div className="card shadow p-3 mb-5 bg-body rounded">
        <img className="rounded-circle mx-auto d-block mt-1" src="tft.png" alt="" height="150px" />
        
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Edgar Adrian Luna Lopez</h1>
            <h2 className="h5">| Software Engineer | Business Systems Analyst | Full Stack Developer |</h2>
            
            <div className="row mt-4">
              <div className="col-md-6 mb-4">
                <h3>About me</h3>
                <p className="text-center">
                  Hi there! I'm a 26-year-old software developer, business systems analyst and data engineer with 5 years of experience in the tech industry.
                  <br />
                  I thrive on taking up new challenges and constantly learning.
                  <br />
                  I have a passion for coding and enjoy exploring new technologies, traveling to new places, and staying up to date with the latest tech trends.
                </p>
              </div>
              
              <div className="col-md-6 mb-4">
                <h3>Contact me!</h3>
                <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                  <Call link="mailto:ealuna1998@gmail.com" title="Email" />
                  <Call link="https://wa.me/523330099430" title="WhatsApp" />
                  <Call link="https://www.linkedin.com/in/edgarluna8/" title="LinkedIn" />
                  <Call link="https://drive.google.com/file/d/1AYzTQP3-K55DjvefHLrLXbjxJtKyA7n9/view?usp=sharing" title="CV" />
                  <Call link="https://github.com/edgarluna8" title="Github" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="row g-3">
            <div className="col-lg-4 col-md-6">
              <div className="p-3">
                <h3 className="text-center">Academic History</h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <b>Technology Institute of Jalisco</b>
                    <p className="mb-1">Software Engineer | August 2017 - December 2022</p>
                    <ul>
                      <li>Prom 88</li>
                      <li>Teacher, E-Commerce Course.</li>
                      <li>Member, Football Team Club.</li>
                      <li>Member, Fair Projects TECMM 2018, 2019...</li>
                    </ul>
                  </li>
                  <li>
                    <b>Tecmilenio</b>
                    <p className="mb-1">High School | August 2014 - July 2017</p>
                    <ul>
                      <li>Prom 88</li>
                      <li>Member, Halley Society.</li>
                      <li>Member, Fair Project Tecmilenio Member.</li>
                      <li>Football Team</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="p-3">
                <h3 className="text-center">Career History</h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <b>Toka Internacional</b>
                    <p className="mb-1">Software Engineer | April 2024 - now</p>
                    <ul>
                      <li>Enterprise Architecture of Applications</li>
                      <li>Business and Technology Documentations</li>
                      <li>Software Design and Architecture</li>
                      <li>TOGAF 10 & COBIT 19 Frameworks</li>
                    </ul>
                  </li>
                  <li className="mb-3">
                    <b>Flextronics</b>
                    <p className="mb-1">Full Stack Dev | October 2021 - December 2023</p>
                    <ul>
                      <li>Full stack software development</li>
                      <li>Flow design and implementations</li>
                      <li>Design UX | UI</li>
                      <li>SharePoint, Bots and Analytics</li>
                      <li>Azure Architecture, AWS and Open AI</li>
                    </ul>
                    <p className="mb-1">Data Analytics Intern | January 2021 - October 2021</p>
                    <ul>
                      <li>Power BI & Tableau Dashboards</li>
                      <li>Procedures, Jobs and Queries SQL</li>
                      <li>RPA (Katalon and Power Automate)</li>
                      <li>Software Developments in Manufacturing Areas</li>
                    </ul>
                  </li>
                  <li className="mb-3">
                    <b>Inprodi Web Studio</b>
                    <p className="mb-1">Web Developer | May 2020 - January 2021</p>
                    <ul>
                      <li>Layout Interfaces-Product</li>
                      <li>CRM - ERP Development, Websites, etc.</li>
                      <li>Testing and planning as product owner.</li>
                      <li>Planning Agile Methods (Sprints and Blocks).</li>
                      <li>Laravel and MERN Full stack</li>
                    </ul>
                  </li>
                  <li>
                    <b>Desarrollos Inmobiliarios de Occidente</b>
                    <p className="mb-1">IT Support & Tester Jr | March 2019 - June 2020</p>
                    <ul>
                      <li>BD Administrator of CRM-ERP.</li>
                      <li>IT Support, Testing & Helpdesk.</li>
                      <li>Web development.</li>
                      <li>SQL Reports</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="p-3">
                <h3>Software Skills</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Development Stacks:</strong>
                    <ul>
                      <li>Full JavaScript Stack (MEVN, MERN, MEAN)</li>
                      <li>Full PHP Stack (Laravel, Symfony, CodeIgniter)</li>
                      <li>Full .NET Stack (SharePoint, C#, Blazor, Fluent, ASP, CORE)</li>
                      <li>Full Python Stack (Django, Flask & Pandas)</li>
                      <li>Mobile Development (Kotlin, DART, MAUI, Swift)</li>
                    </ul>
                  </li>
                  
                  <li className="mb-2">
                    <strong>Tech Tools by Area:</strong>
                    <ul>
                      <li>Cloud (Azure, AWS, Google Cloud)</li>
                      <li>UX & UI (Figma)</li>
                      <li>BI (Tableau, PowerBI)</li>
                      <li>RPA (Power Automate, Selenium, Katalon, Postman)</li>
                      <li>DBA (MariaDB, Oracle DB, PostgreSQL, SQL Server, Mongo)</li>
                      <li>INFRA (Windows Server, Apache, NGINX, Heroku)</li>
                      <li>SEC (CheckMarx, DependBot, DRP, API Management - Mulesoft)</li>
                      <li>Data Engineering (Talend, Informatica, SNF, ETL)</li>
                    </ul>
                  </li>
                  
                  <li className="mb-2">
                    <strong>Methodologies and Practices knowledge:</strong>
                    <ul>
                      <li>Development Methodologies (DevOps, CI/CD, Monitoring)</li>
                      <li>Agile Methodologies (Scrum, Kanban, LEAN, Kaizen)</li>
                      <li>IT Support Methodologies (Citrix, Team Viewer, SLA, Hotfix)</li>
                      <li>CMS Support (WordPress, Google Pages, SAP, Salesforce)</li>
                    </ul>
                  </li>
                  
                  <li className="mb-2">
                    <strong>Software Documentation and Planning:</strong>
                    <ul>
                      <li>Documentation under IT frameworks</li>
                      <li>Diagram development for projects (Bizagi, Draw.io)</li>
                      <li>Planning and deliverables to IT production projects</li>
                      <li>Business analysis oriented to IT requirements</li>
                    </ul>
                  </li>
                  
                  <li>
                    <strong>Business Analysis and New Skills:</strong>
                    <ul>
                      <li>B.S.A, COBIT19, ITIL, PMP, KYC & KYB</li>
                      <li>E.S.A (MVC, SPA, Embedded, CRM, PWA, ERP, APIs)</li>
                      <li>AI (LLMS, GenAI, Predictions, Cognitive Services)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;