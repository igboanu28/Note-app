import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NoteAppComponent } from './note-app/note-app.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:NoteAppComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
