import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifDetailComponent } from './components/gif-detail/gif-detail.component';
import { GifListComponent } from './components/gif-list/gif-list.component';

const routes: Routes = [
  { path:'', component: GifListComponent },
  { path:'team/:id', component: GifDetailComponent},
  { path:'**', component: GifListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
