import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormService} from "../../../core/services/form.service";
import {AddSettlementForm, PasswordsForm} from "../../../core/models/forms.model";
import {ProjectService} from "../../../core/services/project.service";
import {Project, WorkUnderProject} from "../../../core/models/project.model";
@Component({
  selector: 'app-settlement-form',
  templateUrl: './settlement-form.component.html',
  styleUrls: ['./settlement-form.component.css']
})
export class SettlementFormComponent implements OnInit {
  addSettlementForm: FormGroup<AddSettlementForm> = this.formService.initAddSettlementForm();

  projects: Project[] = [];
  works: WorkUnderProject[] = [];


  constructor(private formService: FormService, private projectService: ProjectService) {
  }

  get controls(): AddSettlementForm {
    return this.addSettlementForm.controls;
  }

  onAddSettlement() {

  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  onProjectChange(projectUuid: string) {
    const selectedProject = this.projects.find(project => project.projectUuid === projectUuid);
    this.works = selectedProject ? selectedProject.worksUnderProject : [];
  }
}
