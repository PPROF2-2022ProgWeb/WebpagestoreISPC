import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PagehomeComponent } from './pages/pagehome/pagehome.component';
import { PageregisterComponent } from './pages/pageregister/pageregister.component';
import { PageloginComponent } from './pages/pagelogin/pagelogin.component';
import { PagecontactComponent } from './pages/pagecontact/pagecontact.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component:  PageloginComponent},
  { path: 'registro', component:  PageregisterComponent},
  { path: 'tienda', component:  PagehomeComponent},
  { path: 'contacto', component:  PagecontactComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    PagehomeComponent,
    PageregisterComponent,
    PageloginComponent,
    PagecontactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
