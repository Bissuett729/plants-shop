import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from '../shared/angular-material.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule, AngularMaterialModule
  ],
  exports: [HeaderComponent]
})
export class ComponentsModule { }
