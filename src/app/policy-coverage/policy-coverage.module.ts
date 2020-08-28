import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PolicyCoverageRoutingModule } from './policy-coverage-routing.module';

import { PolicyCoverageComponent } from './policy-coverage.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PolicyCoverageRoutingModule
  ],
  declarations: [PolicyCoverageComponent]
})
export class HomeModule {}
