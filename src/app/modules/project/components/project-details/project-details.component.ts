import { Component } from '@angular/core';
import { Project } from 'src/app/modules/core/models/project.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {

  project: Project = {
    clientName: 'Sample Client',
    projectUuid: '12345',
    name: 'Sample Project',
    worksUnderProject: [
      {
        uuid: '1',
        name: 'Work 1',
        projectUuid: '12345',
        description: 'Description 1',
        settlements: []
      },
      {
        uuid: '2',
        name: 'Work 2',
        projectUuid: '12345',
        description: 'Description 2',
        settlements: []
      }
      ]
  }




      displayedColumns: string[] = ['uuid', 'name', 'description', 'settlements'];

}
