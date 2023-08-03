import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './shared/views/landing-page/landing-page.component';
import { HomeComponent } from './shared/views/home/home.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {


}

