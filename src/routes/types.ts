import { PathItem } from 'swagger-jsdoc';

export interface Property {
  type: string;
  format?: string;
  example?: string | number;
  description?: string;
}
export type Path = [string, PathItem];
