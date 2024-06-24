export interface Settlement {
  uuid: string;
  status: string;
  settlementType: string;
  projectId: string;
  workId: string;
  amountOfMoney: string;
  description: string;
  employeeId: string
  nameAndLastname: string
  date: string;
}

export interface WorkUnderProject {
  uuid: string;
  name: string;
  projectUuid: string;
  description: string;
  settlements: Settlement[];
}

export interface Project {
  clientName: string;
  projectUuid: string;
  worksUnderProject: WorkUnderProject[];
  name: string;
}

export interface employee{
  firstname: string;
  lastname: string;
  email: string;
  uuid: string;
}

export interface ProjectRequest {
  name: string;
  clientUuid: string;
}

export interface Client{
  uuid: string;
  name: string;
  nip: string;
  address: string;
}

export  interface ProjectCodeResponse {
  code: string;
  message: string;
}
