import React from 'react';
import { NavItem, ServiceItem, Testimonial, SectionId, Client, Accreditation } from './types';
import { Building2, Cog, Home, MoveHorizontal, Network, Replace, Workflow } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: `#${SectionId.HOME}` },
  { label: 'Services', href: `#${SectionId.SERVICES}` },
  { label: 'About', href: `#${SectionId.ABOUT}` },
  { label: 'Testimonials', href: `#${SectionId.TESTIMONIALS}` },
  { label: 'Projects', href: `#${SectionId.PROJECTS}` },
  { label: 'Contact', href: `#${SectionId.CONTACT}` },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Self-lay',
    description: 'Before a self-lay organization can carry out work, they must be approved by the relevant water company.',
    icon: <Network className="w-6 h-6" />,
  },
  {
    title: 'Commercial Water Mains',
    description: 'Installation, repair, replacement or redesign.',
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    title: 'Domestic Water Mains',
    description: 'Repair, renewal and redesign of domestic water mains.',
    icon: <Home className="w-6 h-6" />,
  },
  {
    title: 'Trenchless Technology',
    description: 'Directional drilling. Grundomat moling.',
    icon: <MoveHorizontal className="w-6 h-6" />,
  },
  {
    title: 'Underground Ducting',
    description: 'Design, planning and installation.',
    icon: <Cog className="w-6 h-6" />,
  },
  {
    title: 'Lead Pipe Replacement',
    description: 'Upgrade lead pipe to new MDPE.',
    icon: <Replace className="w-6 h-6" />,
  },
  {
    title: 'Pipework Commissioning',
    description: 'Trackside repair, maintenance and re-routing.',
    icon: <Workflow className="w-6 h-6" />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Robert",
    date: "26th July 2025",
    content: "We had a leak on a shared water main. Ross was very informative and kept me posted on all aspects of the repair. I've used other companies before to repair the same leaks but these guys were the business ! Repaired quickly and efficiently with minimal fuss, would highly recommended.",
    rating: 5,
  },
  {
    id: 2,
    name: "Janny",
    date: "4th July 2025",
    content: "Jamie, Ross, Mattie and Bailey made a great team. They were helpful, friendly and industrious. Nothing too much trouble. Ross was really good at keeping in touch by text to let me know what was happening. They did a fantastic job sorting out the leak. Couldn't recommend them highly enough.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lorraine",
    date: "24th June 2025",
    content: "Professional, tidy and polite job from Matty, Bailey, Ross and Jamie to fix a leak under our kitchen. They were able to source an alternative re route which saved us considerable cost and mess! Thanks for your quick assistance which was done within 24 hours from the initial quote, 100% recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Rosie",
    date: "17th January 2025",
    content: "Bregan are willing to go the extra mile and you can always expect clear and honest feedback on what work is required. Quality of work is also excellent. An excellent contractor whom I would not hesitate to recommend to others.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sanjay Bhudia",
    date: "17th December 2024",
    content: "Bregan Mains Flow attended my centre due to a sprinkler mains leak, the process from investigating to identify source and arranging work just before Christmas was brilliant. I was kept informed all the way through and glad I was recommended to use them for this task. I hope I do t have another leaks but good to know good companies are out there that we can rely on to get the job done. Thanks again Sanjay",
    rating: 5,
  }
];

export const CLIENTS: Client[] = [
  {
    name: 'Anglian Water',
    logoUrl: '/images/anglian-water-logo.png',
  },
  {
    name: 'Thames Water',
    logoUrl: '/images/thames-water-logo.png',
  },
  {
    name: 'Affinity Water',
    logoUrl: '/images/affinity-water-logo.png',
  },
];

export const ACCREDITATIONS: Accreditation[] = [
  // NOTE: Replace these placeholder URLs with your actual logo files
  { name: 'NRSWA New Roads & Street Works Act Accredited', logoUrl: 'https://i.imgur.com/qB4L5gD.png' },
  { name: 'WIAPS Water Industry Approved Plumbers Scheme', logoUrl: 'https://i.imgur.com/3hD6r47.png' },
  { name: 'WIRS Water Industry Registration Scheme', logoUrl: 'https://i.imgur.com/J3eB6f6.png' },
  { name: 'WRAS Water Regulations Advisory Scheme', logoUrl: 'https://i.imgur.com/0s7fW92.png' },
  { name: 'Achilles UVDB Audited', logoUrl: 'https://i.imgur.com/A6jX9gH.png' },
  { name: 'Achilles UVDB Qualified', logoUrl: 'https://i.imgur.com/cOFf8oV.png' },
];