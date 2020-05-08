import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CorePipePipe } from './core-pipe.pipe';
import { CoreDirectiveDirective } from './core-directive.directive';



@NgModule({
  declarations: [HeaderComponent, CorePipePipe, CoreDirectiveDirective],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, CorePipePipe, CoreDirectiveDirective]
})
export class CoreModule { }
