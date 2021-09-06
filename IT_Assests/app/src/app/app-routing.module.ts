import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailsComponent } from './emails/emails.component';
import { ItAssetsComponent } from './it-assets/it-assets.component';


const routes: Routes = [
  {path:'', redirectTo:'itassets',pathMatch:'full'},
  {path:'itassets', component:ItAssetsComponent },
  {path:'emails', component:EmailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
