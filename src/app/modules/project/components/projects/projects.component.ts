import {Component, OnInit} from '@angular/core';
import {Project} from "../../../core/models/project.model";
import {ProjectService} from "../../../core/services/project.service";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  implements OnInit{

  displayedColumns: string[] = ['clientName', 'projectUuid', 'projectName', 'actions'];
  projects: Project[] = [
    {
      clientName: 'Client A',
      projectUuid: 'uuid-123',
      worksUnderProject: [],
      name: 'Project A'
    },
    {
      clientName: 'Client B',
      projectUuid: 'uuid-456',
      worksUnderProject: [],
      name: 'Project B'
    }
  ];
  constructor(private projectService:ProjectService , private notifierService: NotifierService) {}
  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

}
