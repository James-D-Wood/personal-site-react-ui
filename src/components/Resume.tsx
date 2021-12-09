import React from 'react';

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
    description: 'Builds development tools to improve developer experience across the greater developer community.',
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
    <div className="leading-snug">
      <a href={workExp.business.href} className="font-sansBold text-white text-2xl">{workExp.business.name}</a>
      <div className="font-mono text-purple text-lg flex flex-col sm:flex-row sm:justify-between sm:items-center ">
        <p className="font-bold text-base">{workExp.position}</p>
        <p className="text-base">
          {`${workExp.startDate} - ${workExp.endDate}`}
        </p>
      </div>
      <p className="font-sans text-purple-lighter text-lg py-1.5">{workExp.description}</p>
      <ul className="font-sans text-purple-lighter text-lg list-disc pl-6 space-y-1.5">
        {workExp.bullets.map((bullet: string) => (
          <li>{bullet}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className="container mx-auto pt-16 pb-4 flex flex-col items-center px-8">
      <div className="pt-8 w-full md:w-3/4 max-w-screen-md mx-auto my-6 space-y-8">
        {workExperience}
      </div>
    </div>
  );
}
