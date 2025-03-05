import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Competances',
    pathname: '/articles',
  },
  {
    label: 'Langages et outils',
    pathname: '/articles/modern-styling-in-react',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
  
];

export const socialLinks = [
  {
    label: 'CV',
    url: `/cv.pdf`,
    icon: 'copy',
  },
  {
    label: 'linkedin',
    url: `https://www.linkedin.com/in/bradley-djedje-84aba8236/`,
    icon: 'figma',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
