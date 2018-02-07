import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { PageNotFoundComponent }  from './page-not-found.component';
import { ViewDetailComponent }  from './home/view-detail.component';
import { AddUserComponent }  from './add-user/add-user.component';
import { UpdateUserComponent }  from './manage-user/update-user.component';
import { ManageUserComponent }  from './manage-user/manage-user.component';
import { UserService } from './services/user.service';
import { AppRoutingModule }  from './app-routing.module';


@NgModule({
  imports: [
        BrowserModule,
		FormsModule,
		AppRoutingModule
  ],
  declarations: [
        AppComponent,
		PageNotFoundComponent,

		ViewDetailComponent,
		AddUserComponent,
		ManageUserComponent,
		UpdateUserComponent
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
