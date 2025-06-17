interface WorkExperienceBusiness {
  name: string;
  href: string;
}

interface Role {
  startDate: string;
  endDate: string;
  position: string;
  description: string;
  bullets: string[];
}

interface WorkExperience {
  business: WorkExperienceBusiness;
  roles: Role[];
}

const workExperiences: WorkExperience[] = [
  {
    business: {
      name: 'American Express',
      href: 'https://www.linkedin.com/company/american-express/',
    },
    roles: [ 
      {
        startDate: 'Apr 2025',
        endDate: 'Present',
        position: 'Senior Software Engineer II',
        description: 'Continuation of prior role with a heavier emphasis on driving high level design and cross team collaboration.',
        bullets: []
      },
      {
        startDate: 'Aug 2022',
        endDate: 'Apr 2025',
        position: 'Software Engineer I',
        description: 'Led a 7-person team building features for an event-driven microservices platform supporting cardmember rewards, benefits, and customer service tools. Took ownership of high-level design, drove Agile practices, and delivered business-critical systems across proprietary and co-brand card products.',
        bullets: [
          'Drove architecture and high-level design for key team initiatives. Broke down features into actionable stories, led refinement and sprint planning, and ensured on-time delivery of roadmap items.',
          'Led migration and uplift of legacy rewards qualification capabilities to a modern, event-driven platform. Developed and shipped new benefits features for multiple card portfolios.',
          'Partnered with centralized QA to build test case inventory and validate changes in a company-wide QA environment. Ensured high coverage and quality across the release pipeline.',
          'Collaborated on capabilities with Data and API teams to integrate rewards journeys with customer experiences in other products including mobile and web applications. Partnered with platform teams to expose new functionalities on the platform to teams building customer experiences.',
          'Drove improvements in code review culture, CI regression testing, documentation standards, and release validation. Helped improve team delivery velocity and reduce integration issues.'
        ]
      },
      {
        startDate: 'Sep 2021',
        endDate: 'Aug 2022',
        position: 'Software Engineer II',
        description: 'Developed features for an event-driven microservices platform supporting cardmember rewards, benefits, and customer service tooling. Took high-level design to implementation, improved engineering practices, and delivered production-grade features across the platform.',
        bullets: [
          'Implemented rule logic to evaluate and award Centurion Lounge guest access benefits based on updated policy rules. Delivered and deployed the logic in a distributed rules engine.',
          'Designed and built a CLI to standardize test JSON payload generation and generate mock fixed-width files from upstream mainframe systems. Standardized test inputs, automated repetitive FTP steps, and improved developer efficiency during manual testing.',
          'Refactored Gherkin step definitions into a modular, reusable library, streamlining test code across multiple projects. This foundation became the standard for future initiatives, reducing test bugs and accelerating test case development.'
        ]
      },
      {
        startDate: 'Jan 2021',
        endDate: 'Sep 2021',
        position: 'Software Engineer III',
        description: 'Worked on automation, tooling, and service development for the centralized DBA team within Global Infrastructure Data Services.',
        bullets: [
          'Built a full-stack web application to track and manage database assets across the company, improving visibility into the DB technology footprint.',
          'Developed a custom linting module using ANTLR to enforce internal SQL standards at development time, reducing code review friction and increasing change consistency.',
          'Created tooling to automate schema change deployments and rollbacks using a customized VS Code server IDE, enforcing consistency in database changes and increasing deployment safety.',
          'Mentored a Year Up program participant in programming fundamentals and SDLC best practices; they were offered and accepted a full-time position at the end of the program.',
          'Coordinated a 6-week “sprinternship” program for three interns, forming an Agile team and dividing responsibilities across backend, frontend, and database roles to deliver a full-stack data visualization dashboard prototype.'
        ]
      }
    ]
  },
  {
    business: {
      name: 'American Express',
      href: 'https://www.linkedin.com/company/american-express/',
    },
    roles: [ 
      {
        startDate: 'Jul 2020',
        endDate: 'Aug 2020',
        position: 'Software Engineer Intern',
        description: 'Embedded with a backend engineering team working on microservices supporting Loyalty features. Implemented resiliency patterns such as circuit breaker logic to improve service reliability and fault tolerance.',
        bullets: [
          'Implemented the circuit breaker pattern to quickly catch and mitigate errors stemming from requests to external services.',
          'Wrote unit and integration tests to check failure cases.',
          'Created email alerts for circuit breaker activity using Splunk logs.',
          'Submitted changes for code review and helped push to production environment.',
        ] 
      }
    ]
  },
  {
    business: {
      name: 'SpearmintLOVE',
      href: 'https://www.linkedin.com/company/spearmintlove/',
    },
    roles: [
      {
        startDate: 'Feb 2018',
        endDate: 'Dec 2020',
        position: 'Web Developer',
        description: 'While completing my undergraduate degree, I worked as one of two developers at SpearmintLOVE, an online retailer for baby clothing and accessories. I designed and implemented internal tools and customer-facing features that directly supported key business operations.',
        bullets: [
          'Developed an analytics dashboard backed by an automated ETL pipeline to extract daily sales and inventory data from the e-commerce platform. Enabled data-driven decision-making in product purchasing and promotion.',
          'Built a Django-based internal portal to manage warehouse operations, including check-in at receiving, location mapping, and automated pick list generation. Improved order fulfillment efficiency and accuracy.',
          'Created a Ruby on Rails application to allow customers to build baby registries. Integrated seamlessly with the main e-commerce site through a custom “Add to Registry” feature, improving customer retention and average order value.',
          'Customized and maintained a theme for the main storefront.',
          'Started an iOS application to serve as a mobile storefront.',
        ]
      }
    ]
  },
  {
    business: {
      name: 'Ash Ave Software, LLC',
      href: '',
    },
    roles: [
      {
        startDate: 'Jun 2017',
        endDate: 'Dec 2020',
        position: 'Freelancer',
        description: 'Worked on development projects for local small businesses.',
        bullets: [
          'Created static web sites for a sushi restaurant and permanent cosmetic artist.',
          'Developed a method for processing machine shop data for a lean manufacturing consultant.',
        ]
      }
    ]
  },
];

export default function Resume(): JSX.Element {
  const workExperience = workExperiences.map((workExp: WorkExperience) => (
    <div className="leading-snug">
      <a href={workExp.business.href} className="font-sansBold text-white text-2xl">{workExp.business.name}</a>
      {workExp.roles.map((role) => (
        <div>
          <div className="font-mono text-purple text-lg flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5">
            <p className="font-bold text-base">{role.position}</p>
            <p className="text-base">
              {`${role.startDate} - ${role.endDate}`}
            </p>
          </div>
          <p className="font-sans text-purple-lighter text-lg py-1.5">{role.description}</p>
          <ul className="font-sans text-purple-lighter text-lg list-disc pl-6 space-y-1.5">
            {role.bullets.map((bullet: string) => (
              <li>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
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
