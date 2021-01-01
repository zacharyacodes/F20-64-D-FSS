import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DataTablesModule } from 'angular-datatables';
// import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { FooterComponent } from './footer/footer.component';



import { SignupComponent } from './admin/signup/signup.component';
import { UserdetailsComponent } from './admin/userdetails/userdetails.component';

import { RegisterComponent } from './register/register.component';
import { RegistrationsRequestComponent } from './admin/registrations-request/registrations-request.component';
import { NewsFeedsComponent } from './admin/news-feeds/news-feeds.component';
import { EquipmentsComponent } from './admin/equipments/equipments.component';
import { GroundsComponent } from './admin/grounds/grounds.component';
import { BookedGroundsComponent } from './admin/booked-grounds/booked-grounds.component';
import { BookedEquipComponent } from './admin/booked-equip/booked-equip.component';
import { SportsComponent } from './admin/sports/sports.component';
import { SelectSportsComponent } from './admin/select-sports/select-sports.component';








const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'employee', component: AdminComponent, children: [
      { path: 'signup', component: SignupComponent},
      { path: 'users', component: UserdetailsComponent},
      { path: 'ground', component: GroundsComponent},
      { path: 'equipment', component: EquipmentsComponent},
      { path: 'newsfeed', component: NewsFeedsComponent},
      { path: 'requests', component: RegistrationsRequestComponent},
      { path: 'bookground', component: BookedGroundsComponent},
      { path: 'bookequip', component: BookedEquipComponent},
      { path: 'sports', component: SportsComponent},
      { path: 'selectsports', component: SelectSportsComponent},


    ]
  }


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    FooterComponent,
    SignupComponent,
    UserdetailsComponent,
    RegisterComponent,
    RegistrationsRequestComponent,
    NewsFeedsComponent,
    EquipmentsComponent,
    GroundsComponent,
    BookedGroundsComponent,
    BookedEquipComponent,
    SportsComponent,
    SelectSportsComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DataTablesModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule { }
