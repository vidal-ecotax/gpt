
import type { ComponentType } from 'react';

export interface Person {
  name: string;
  role: string;
  responsibilities: string[];
  imageUrl: string;
  area: string;
}

export interface ProcedureStep {
  title: string;
  description: string;
  points?: string[];
  image?: string;
}

export interface SectionData {
  id: string;
  title: string;
  shortTitle: string;
  component: ComponentType;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}
