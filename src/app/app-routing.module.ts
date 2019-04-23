import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'pages',      component: PageComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
