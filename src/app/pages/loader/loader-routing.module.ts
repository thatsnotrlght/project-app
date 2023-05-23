import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaderPage } from './loader.page';

//Single empty route that loads the empty route that loads the loader page component
//Changing path route will result in empty page as it is now routed to loader/whatever
const routes: Routes = [
  {
    path: '',
    component: LoaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoaderPageRoutingModule {}
