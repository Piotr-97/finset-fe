import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";




@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    SharedModule,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet
  ],
  exports: [HeaderComponent, SideNavComponent,]
})
export class CoreModule {
}
