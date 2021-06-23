import React from 'react';
import NotImplemented from './NotImplemented';

interface WorkExperienceBusiness {
  name: string;
  href: string;
}

interface WorkExperience {
  business: WorkExperienceBusiness;
  startDate: string;
  endDate: string;
  position: string;
  description: string;
  bullets: string[];
}

const workExperiences: WorkExperience[] = [
  {
    business: {
      name: 'American Express',
      href: 'https://www.linkedin.com/company/american-express/',
    },
    startDate: 'Jan 2021',
    endDate: 'Present',
    position: 'Software Engineer',
    description: 'Needs Description',
    bullets: [],
  },
  {
    business: {
      name: 'American Express',
      href: 'https://www.linkedin.com/company/american-express/',
    },
    startDate: 'Jul 2020',
    endDate: 'Aug 2020',
    position: 'Software Engineer Intern',
    description: 'Worked with a team of interns to improve the resiliency of existing applications for the Loyalty team.',
    bullets: [
      'Implemented the circuit breaker pattern to quickly catch and mitigate errors stemming from requests to external services.',
      'Wrote unit and integration tests to check failure cases.',
      'Created email alerts for circuit breaker activity using Splunk logs.',
      'Submitted changes for code review and helped push to production environment.',
    ],
  },
  {
    business: {
      name: 'SpearmintLOVE',
      href: 'https://www.linkedin.com/company/spearmintlove/',
    },
    startDate: 'Feb 2018',
    endDate: 'Dec 2020',
    position: 'Web Developer',
    description: 'Developed software to meet operational and consumer needs for an eCommerce retailer.',
    bullets: [
      'Created a baby registry web application that integrates with BigCommerce storefront.',
      'Created an ETL service that extracts data from the eCommerce platform and integrated services and stores it for use by other applications and analysts.',
      'Created a WMS system to track inventory allocation and operations performance.',
      'Customized and maintained a theme for the main storefront.',
      'Started an iOS application to serve as a mobile storefront.',
    ],
  },
  {
    business: {
      name: 'Ash Ave Software, LLC',
      href: '',
    },
    startDate: 'Jun 2017',
    endDate: 'Present',
    position: 'Freelancer',
    description: 'Worked on development projects for local small businesses.',
    bullets: [
      'Created static web sites for a sushi restaurant and permanent cosmetic artist.',
      'Developed a method for processing machine shop data for a lean manufacturing consultant.',
    ],
  },
];

export default function Resume(): JSX.Element {
  const workExperience = workExperiences.map((workExp: WorkExperience) => (
    <div className="space-y">
      <a href={workExp.business.href} className="font-sansBold text-white text-lg">{workExp.business.name}</a>
      <div className="font-mono text-purple text-md flex justify-between items-center">
        <p className="font-bold">{workExp.position}</p>
        <p className="text-sm">
          {`${workExp.startDate} - ${workExp.endDate}`}
        </p>
      </div>
      <p className="font-sans text-purple-lighter text-base pb-1.5">{workExp.description}</p>
      <ul className="font-sans text-purple-lighter text-base list-disc pl-6 space-y-1.5">
        {workExp.bullets.map((bullet: string) => (
          <li>{bullet}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className="pt-16 pb-4">
      <div className="my-6 mx-8 space-y-8">
        {workExperience}
      </div>
    </div>
  );
}
