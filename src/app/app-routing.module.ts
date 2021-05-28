import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryitemComponent } from './galleryitem/galleryitem.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilelapComponent } from './mobilelap/mobilelap.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';


const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'about',component:AboutComponent},
{path:'gallery',component:GalleryComponent},
{path:'gallery/:id',component:GalleryitemComponent},
{path:'products',children:[
  {path:'', component:ProductsComponent},
  {path:':id', component:MobilelapComponent}
]
},
{path:'home',component:HomeComponent},
{path:'contact',component:ContactsComponent},
{path:'template',component:TemplateDrivenComponent},
{path:'reactive',component:ReactiveFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
