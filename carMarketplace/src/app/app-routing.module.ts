import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import {GenerateAdComponent} from "./generate-ad/generate-ad.component";

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'generate-ad', component: GenerateAdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
