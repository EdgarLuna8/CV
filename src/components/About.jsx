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
            <h1>Edgar Luna</h1>
            <h2>Business Systems Analyst || Full stack Developer || Data Analyst</h2>
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

            <div className="col m-1">
              <div>
                <h3 className='text-center'>Career History</h3>
                <b>Odisa Equipa</b>
                <p>Data Engineer & Developer | December 2023 - now</p>
                <ul>
                  <li>Porwer BI Dashboards</li>
                  <li>Talend Jobs</li>
                  <li>Bitrix Inject Support</li>
                  <li>SAP B1</li>
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


            <div className="col m-1">
              <h3>Software Skills</h3>
              <ul>
                <li>MEVN, MERN and MEAN ( Full JavaScript Stack ) </li>
                <li>Laravel, Symfony, CodeIgniter s( Full PHP Stack ) </li>
                <li>Office 365 Full ( .docx, .pptx, .xslx, .ppkg ) </li>
                <li>ServiceNow incidents attentions</li>
                <li>Docker, Yaml, Scripts ( DevEnv )</li>
                <li>Git, Atlassian ( Management Versions )</li>
                <li>Full .NET Stack (SharePoint, Blazor, ASP, CORE ) </li>
                <li>Azure Services, Graph, AD, Bot(Cloud) </li>
                <li>Django, Flask & Pandas ( Full Python Stack )</li>
                <li>Linux & Command Lines</li>
                <li>DevOps, SCRUM, LEAN, CI / CD ( Methodologies )</li>
                <li>Mobile Develop ( Kotlin, DART, MAUI and Swift )</li>
                <li>Ngrok and Creation of Buses ( Az, AWS )</li>
                <li>Jquery & Ajax ( Bases of JavaScript )</li>
                <li>SQL - Jobs, Procedures, and Super Querys</li>
                <li>Figma (UX & UI Design )</li>
                <li>Tableau (Prep Builder, Server & Cloud)</li>
                <li>PowerBI ( Dax and Visuals improvements)</li>
                <li>PowerAutomate , Katalon, Postman <br /> ( RPA & Testing )</li>
                <li>Agile Methodologies (Scrum cases, Kanban )</li>
                <li>Citrix, Team Viewer (Support IT)</li>
                <li>MariaDB, Oracle, Posgres, SQL Server (DBA)</li>
                <li>Windows Server, Apache Server, NGINX ( Heroku ) CheckMarx ( Security Tools )</li>
                <li>API Develop & Consume (Code and Non-code)</li>
                <li>Mulesoft, SaaS, PaaS, API, JSON, SalesForce</li>
                <li>MVC, SPA, Embedded, CMS, PWA, ORMs ( IT Architectures ) LLMS, GenAI, Predictions, Cognitive Services ( AI )</li>
                <li>Business Systems Analysis, KPI and Kaizens</li>
                <li>CMS Support ( WordPress, Google Pages, Css)</li>
                <li>Full Packages Management ( npm, pip, nuget, composer, chocolate, yarn, etc...)</li>
                <li>Data mining, Big Data & ETL ( Talend, informatica, SNFK)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
