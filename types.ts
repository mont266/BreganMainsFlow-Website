

import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  date: string;
  content: string;
  rating: number;
}

// FIX: Added ChatMessage interface
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  PROJECTS = 'projects',
  TESTIMONIALS = 'testimonials',
  ACCREDITATION = 'accreditation',
  CONTACT = 'contact',
}

export interface Client {
  name: string;
  logoUrl: string;
}

export interface Accreditation {
  name: string;
  logoUrl: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  location: string;
  category: string;
  description: string;
  imageUrl: string;
}