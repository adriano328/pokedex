import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Pages
import { HomeComponent } from './home/home.component';

//Module Routing
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
