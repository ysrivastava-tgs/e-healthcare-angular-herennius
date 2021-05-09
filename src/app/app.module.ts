import { AdminModule } from './admin/admin.module';
import { AuthService } from './services/auth.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MedicineDetailsComponent } from './common/medicine-details/medicine-details.component';
import { UserModule } from './user/user.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MedicineDetailsComponent,
    FooterComponent,

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    AdminModule,
    UserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 
 
}
