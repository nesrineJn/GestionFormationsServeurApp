export enum ROLES {
  Admin = 'admin',
  Trainer = 'trainer',
  Candidate = 'candidate'
}

export enum ROLES_DEFAULT {
  Default = ROLES.Candidate
}


export const ROLES_VALUES = Object.values(ROLES);
export const ROLES_DEFAULT_VALUES = Object.values(ROLES_DEFAULT);
