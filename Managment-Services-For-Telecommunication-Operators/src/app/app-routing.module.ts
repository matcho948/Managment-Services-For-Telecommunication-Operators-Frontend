import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { FindcustomerComponent } from './findcustomer/findcustomer.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [{ path: 'addcustomer', component: AddcustomerComponent },
{ path: 'find', component: FindcustomerComponent},
{ path: 'offers', component: OffersComponent },
{path:'', component: MainmenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
