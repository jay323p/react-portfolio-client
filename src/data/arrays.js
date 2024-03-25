import html from '../assets/html.png';
import css from '../assets/css.png';
import bootstrap from '../assets/bootstrap.png';
import javascript from '../assets/javascript.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import nodejs from '../assets/nodejs.png';
import mongodb from '../assets/mongo-db.png';
import git from '../assets/git.png';

export const experiences = [
  {
    badgeTitle: 'Neuroscience Intern',
    company_name:
      'Department of Neuroscience University of Florida Gainesville',
    date: 'May 2018 - Sep 2018',
    description:
      'Assisted in a graduate-level dissertation focusing on the protein and neuro-muscular pathology of amyotrophic lateral sclerosis (ALS). Executed advanced biological research methods, including the application of antibodies targeting specific molecular structures for comprehensive histological analysis. Utilized cutting-edge lab instruments, computer systems, and research software to facilitate the extraction of valuable & significant data.',
    similarExperiences: [
      'Bioinformatic Systems',
      'Computerized Ab Histology',
      'Database Analysis',
      'Western Blotting',
    ],
    technologies: [],
  },
  {
    badgeTitle: 'PDF-Scan Inventory',
    company_name: 'Family Business | Enjoy Liquor and Food Mart',
    date: 'Aug 2023 - Sep 2023',
    description:
      'Developed an inventory management system capable of scanning invoice PDFs for more efficient inventory updates. In tandem, I implemented a user-friendly dashboard for streamlined inventory data visualization and management. Acquired expertise in data serialization, handling different file types, and the formulation of complex regular expressions for precise string parsing. Created functions that utilized proper algorithm efficiency and optimization principles.',
    technologies: [html, css, react, nodejs, mongodb],
    similarExperiences: [],
  },
  {
    badgeTitle: 'Freelance Detail Site',
    company_name: 'Detail Diego Auto Spa',
    date: 'Jan 2024 - Present',
    description:
      "Currently building a new website for my friend's auto-detailing business, with a focus on delivering a refreshed, user-friendly interface. Meticulously incorporated informative and interactive features using UI/UE principles. I have also developed an efficient appointment-booking/calendar API service and an ordering system, empowering the administrator with secure, comprehensive oversight of orders and users. Implemented JWT for session authentication.",
    technologies: [html, css, react, nodejs, mongodb],
    similarExperiences: [],
  },
];

export const skills = [
  html,
  css,
  bootstrap,
  javascript,
  python,
  react,
  tailwind,
  nodejs,
  mongodb,
  git,
];

export const frontendSkills = [
  { label: 'HTML5' },
  { label: 'CSS3' },
  { label: 'Javascript' },
  { label: 'TypeScript' },
  { label: 'ReactJS' },
  { label: 'NextJS' },
  { label: 'Redux' },
  { label: 'MaterialUI' },
  { label: 'Tailwind CSS' },
  { label: 'Bootstrap' },
  { label: 'Figma' },
];

export const backendSkills = [
  { label: 'Node.js' },
  { label: 'ExpressJS' },
  { label: 'Python' },
  { label: 'Django' },
  { label: 'MongoDB' },
  { label: 'MySQL' },
  { label: 'Firebase' },
  { label: 'REST APIs' },
];
