import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { TopbarComponent } from './topbar/topbar.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { FindcustomerComponent } from './findcustomer/findcustomer.component';
import { OffersComponent } from './offers/offers.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainmenuComponent,
    AddcustomerComponent,
    FindcustomerComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
