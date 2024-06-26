import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../models/auth.model";
import {AppState} from "../../../../store/app.reducer";
import {Store} from "@ngrx/store";
import {selectAuthUser} from "../../../auth/store/auth.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user$: Observable<User | null> = this.store.select(selectAuthUser);

  constructor(private store: Store<AppState>) {
  }

}
