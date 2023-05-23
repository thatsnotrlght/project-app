import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Startup1Page } from './startup1.page';

const routes: Routes = [
  {
    path: '',
    component: Startup1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Startup1PageRoutingModule {}
