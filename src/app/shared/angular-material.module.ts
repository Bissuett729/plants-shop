import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Angular
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule],
})
export class AngularMaterialModule {}
