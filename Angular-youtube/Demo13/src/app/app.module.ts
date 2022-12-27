import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TestService } from './test.service';
import { UsercardComponent } from './usercard/usercard.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';

const routes:Routes =[
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'user/:id',component:UsersComponent
  },
  {
    path:'**',component:NotfoundComponent
    //should be placed in last of this array
  },


]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    NotfoundComponent,
    UsercardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [TestService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
