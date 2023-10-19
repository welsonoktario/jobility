import { Job } from "./job";
import { User } from "./user";

enum ApplicationStatus {
  Pending = 'Pending',
  OnReview = 'OnReview',
  Accepted = 'Accepted',
  Rejected = 'Rejected',
  Withdrawn = 'Withdrawn',
  Hired = 'Hired',
  Expired = 'Expired',
}

export type Application = {
  id: number;
  userId: number;
  jobId: number;
  status: ApplicationStatus
  coverLetter?: string;
  dateApplied: string;
  user: User;
  job: Job;
}