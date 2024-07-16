import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteAppComponent } from './note-app/note-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NoteAppComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
    ReactiveFormsModule
    
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
