import {Component, OnInit} from '@angular/core';
import { Project } from 'src/app/modules/core/models/project.model';
import {ActivatedRoute} from "@angular/router";
import {SettlementService} from "../../../core/services/settlement.service";
import {ProjectService} from "../../../core/services/project.service";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements  OnInit{

  constructor(private route: ActivatedRoute,private projectService:ProjectService) {
  }

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

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next: (param) => {
         let uuid = param.get('uuid');
          this.projectService.getProjectByUuid(uuid).subscribe(data => {
            this.project = data;
          });
        }
      }
    )
  }

}
