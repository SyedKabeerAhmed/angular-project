import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components-library/ui/button/button.component';
import { InputComponent } from './components-library/ui/input/input.component';
import { LoginPageComponent } from './components-library/pages/login-page/login-page.component';
import { SignupPageComponent } from './components-library/pages/signup-page/signup-page.component';
import { GroupButtonComponent } from './components-library/ui/group-button/group-button.component';
import { FormsModule } from '@angular/forms';
import { SwitcherComponent } from './components-library/ui/switcher/switcher.component';
import { DashboardComponent } from './components-library/pages/dashboard/dashboard.component';
import { TextAreaComponent } from './components-library/ui/text-area/text-area.component';
import { HeaderComponent } from './components-library/shared/header/header.component';
import { HeaderDashboardComponent } from './components-library/shared/header-dashboard/header-dashboard.component';
import { AddTaskComponent } from './components-library/shared/add-task/add-task.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    LoginPageComponent,
    SignupPageComponent,
    GroupButtonComponent,
    SwitcherComponent,
    DashboardComponent,
    TextAreaComponent,
    HeaderComponent,
    HeaderDashboardComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
