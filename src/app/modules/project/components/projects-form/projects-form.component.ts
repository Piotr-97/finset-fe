import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { ProjectForm} from "../../../core/models/forms.model";
import {FormService} from "../../../core/services/form.service";

import {NotifierService} from "angular-notifier";
import {ProjectService} from "../../../core/services/project.service";
import {Client} from "../../../core/models/project.model";

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css']
})
export class ProjectsFormComponent implements  OnInit{

  errorMessage: null | string = null;
  projectForm: FormGroup<ProjectForm> = this.formService.initProjectForm();
  clients: Client[] = [];
  client: null | Client  = null;

  constructor(private formService: FormService, private projectService: ProjectService, private notifierService: NotifierService) {
  }

  getErrorMessage(email: FormControl<string>) {
    return this.formService.getErrorMessage(email);
  }

  get controls() : ProjectForm {
    return this.projectForm.controls;
  }

  onProjectAdd() {
    const {name, clientUuid} = this.projectForm.getRawValue();
    this.projectService.addNewProject({name,clientUuid}).subscribe({
      next: value => {
        this.notifierService.notify('success', 'New project added');
      },
      error: (err) => {
        this.errorMessage = err
      }

    });
  }

  ngOnInit(): void {
    this.projectService.getClients().subscribe(data => {
      this.clients = data;
    });
  }


}
