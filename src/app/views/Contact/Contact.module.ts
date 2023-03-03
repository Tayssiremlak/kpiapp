import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './Contact-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';

import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    LoginComponent,
    RegistreComponent,
    
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule
  ]
})
export class ContactModule {
}
