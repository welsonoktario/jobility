export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export enum Disability {
  ColorBlindness = 'ColorBlindness',
  PartialBlindness = 'PartialBlindness',
  FullBlindness = 'FullBlindness',
  Dyslexia = 'Dyslexia',
  HearingLoss = 'HearingLoss',
  Deafness = 'Deafness',
  PhysicalImpairment = 'PhysicalImpairment',
}

export type User = {
  id: number;
  email: string;
  fullname: string;
  profilePicture?: string;
  gender?: Gender;
  disability?: Disability;
  skills?: string;
  education?: string;
  experience?: string;
  certification?: string;
  preferredJob?: string;
  linkedAccounts?: string;
  contact?: string;
  cv?: string;
};
