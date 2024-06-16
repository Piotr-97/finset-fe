import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../models/auth.model";
import {selectAuthUser} from "../../../auth/store/auth.selectors";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store/app.reducer";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  user$: Observable<User | null> = this.store.select(selectAuthUser);

  constructor(private store: Store<AppState>) {


  }

}
