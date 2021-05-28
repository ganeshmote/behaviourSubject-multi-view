import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GalleryItems } from './appModel/gallery';
import { GalleryitemComponent } from './galleryitem/galleryitem.component';
import { MobilelapComponent } from './mobilelap/mobilelap.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { TestappDirective } from './appDirectives/testapp.directive';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ContactsComponent,
    LoginComponent,
    ProductsComponent,
    AboutComponent,
    HomeComponent,
    GalleryitemComponent,
    MobilelapComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    TestappDirective,
    ReactiveFormComponent,
    TemplateDrivenComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
    // MaterialModule
  ],
  providers: [GalleryItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
