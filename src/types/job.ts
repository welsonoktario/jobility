import { Company } from './company';
import { Disability } from './disability';

export type JobCategory = {
  id: number;
  name: string;
};

enum JobType {
  Fulltime = 'Fulltime',
  Contract = 'Contract',
  Internship = 'Internship',
  Parttime = 'Parttime',
  Temporary = 'Temporary',
  FreshGraduate = 'FreshGraduate',
  Subcontract = 'Subcontract',
}

enum JobSystem {
  Onsite = 'Onsite',
  Remote = 'Remote',
  Hybrid = 'Hybrid',
}

export type Job = {
  id: number;
  title: string;
  description: string;
  type: JobType;
  system: JobSystem;
  location: string;
  salary?: number;
  requirement?: string;
  datePosted: string;
  dateClosed?: string;
  disabilityId?: number;
  jobcategoryId: number;
  companyId: number;
  disability?: Disability;
  jobCategory: JobCategory;
  company: Company;
};
