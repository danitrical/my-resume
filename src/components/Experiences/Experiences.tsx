import React from "react"
import { IExperience } from "./types/experience.type";
import { Experience } from "./Experience";

export const Experiences = () => {
  // TODO: move data to some datasource
  const data: IExperience[] = [
    {
      companyName: "Makro Pro",
      designation: "Software Consultant (MERN Stack)",
      startDate: "June, 2023",
      location: "Bangkok, Thailand",
      details: [
        "Created REST APIs to bulk import items and track the changes made by the file, generating error files for each import without causing pressure on the service.",
        "Developed Internal Product Management Portal using Retool in a month to replace Mirakl.",
        "Reduced response time by 50% by optimizing PostgreSQL raw queries.",
        "Wrote CRON jobs using NestJS to sync data from ORACLE RMS to our service.",
        "Led the migration of categories from Mirakl to Product Service (NestJS).",
        "Triggered Slack alerts for sync or data upsert failures, reducing inventory and price issues by 60%.",
        "Replaced New Relic with Datadog for comprehensive service monitoring.",
        "Led research to optimize Makro Pro React Native mobile application, improving JS Threadlock, enhancing JS/UI FPS for carousels & infinite scrolling lists, achieving a 20% sales increase."
      ],
      tags: [
        "REST APIs", "PostgreSQL", "NestJS", "Oracle RMS", 
        "Retool", "CRON jobs", "Slack", "Datadog", 
        "React Native", "JavaScript", "UI/UX optimization"
      ]
    },
    {
      companyName: "Retailo Technologies",
      designation: "Full Stack Software Engineer (MERN Stack)",
      startDate: "April, 2022",
      endDate: "May, 2023",
      location: "Pakistan",
      details: [
        "Created React & Nest modules for Warehouse Management System, replicating ODOO functionality in-house, saving $40,000/month.",
        "Consolidated delivery agent functionality into Go React Native App, retiring old version, streamlining operations into one app, enabling the team to focus on new features, driving growth.",
        "Led & launched Spot Sales Feature for on-spot order completion, aiming to reduce Last Mile Cost to nearly 0.",
        "Developed UI to facilitate warehouse staff in managing tasks for sales, delivery, and other agents.",
        "Developed middleware for company-biased user & data control across microservices to support SAAS model, resulting in initial revenue generation of $5000/month.",
        "Researched and architected the Offline First Agent React Native app to expand operations into rural areas with limited internet, boosting revenue and supporting the SAAS model."
      ],
      tags: [
        "React", "NestJS", "Warehouse Management System", 
        "React Native", "Go", "UI/UX design", 
        "Middleware", "Microservices", "SAAS", 
        "Offline First", "JavaScript"
      ]
    },
    {
      companyName: "Hungry EPOS",
      designation: "Full Stack Software Engineer",
      startDate: "October, 2021",
      endDate: "March, 2022",
      location: "Pakistan",
      details: [
        "Developed a menu app enabling product uploads for diverse restaurants.",
        "Implemented and launched the Multi Branch feature in the web application.",
        "Leveraged Angular expertise throughout the development process."
      ],
      tags: [
        "Angular", "Menu app", "Web application", 
        "Multi Branch feature", "JavaScript", "UI/UX"
      ]
    }
  ];
  
  return (
    <div>
      <h1 className="text-5xl font-bold mt-20 mb-16">Experiences</h1>
      {
        data.map((exp: IExperience) => <Experience {...exp} />)
      }
    </div>
  )
}