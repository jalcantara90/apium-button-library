import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AaButtonDirective } from './aa-button.directive';


@NgModule({
  declarations: [AaButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [AaButtonDirective]
})
export class AaButtonModule { }
