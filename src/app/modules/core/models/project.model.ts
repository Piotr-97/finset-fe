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
  id: string;
  clientName: string;
  clientUuid: string;
  worksUnderProject: WorkUnderProject;
  projectName: string;
}

export interface employee{
  firstname: string;
  lastname: string;
  email: string;
  uuid: string;
}

export interface ProjectResponse{

}
