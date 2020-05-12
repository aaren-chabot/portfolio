export default [
  {
    image: 'react-ecom-site.png',
    name: 'E-commerce Site',
    description:
      'A full-stack web application built for e-commerce. This application can easily be leveraged for any new e-commerce site. Integrated to Stripe to handle payments.',
    frontend: ['React', 'Redux', 'Redux-Saga'],
    backend: ['Node.js', 'Express', 'Firebase', 'Stripe'],
    cms: [],
    links: [
      {
        github: true,
        href: 'https://github.com/aaren-chabot/ecom-site',
        text: 'Frontend Repository'
      }
    ]
  },
  {
    image: 'rogers.png',
    name: 'Rogers.com & Fido.ca',
    description:
      'On the team that launched the 2019 redesign of Rogers.com and Fido.ca pages. Decreased page load time from approx. 10 seconds to 2.4 seconds. Accessibility increased from non-compliant to level AA conformance.',
    frontend: ['Angular'],
    backend: [],
    cms: ['Contentful'],
    links: [
      {
        github: false,
        href: '/',
        text: 'View Rogers'
      },
      {
        github: false,
        href: '/',
        text: 'View Fido'
      }
    ]
  },
  {
    image: 'react-cc-form.png',
    name: 'react-cc-form',
    description:
      'A react component designed to handle the credit card portion of any checkout flow. Sleek design and mobile friendly make it a great fit for any website.',
    frontend: ['React', 'Netlify'],
    backend: [],
    cms: [],
    links: [
      {
        github: true,
        href: 'https://github.com/aaren-chabot/react-cc-form',
        text: 'GitHub Repository'
      }
    ]
  }
];
