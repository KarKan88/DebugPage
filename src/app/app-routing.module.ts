import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './modules/debugPage/profile/profile.component';
import { BrandingComponent } from './modules/debugPage/branding/branding.component';
import { PlanUpdateComponent } from './modules/debugPage/plan-update/plan-update.component';
import { RegisterOutletComponent } from './modules/debugPage/register-outlet/register-outlet.component';
import { SchedularComponent } from './modules/debugPage/schedular/schedular.component';
import { SmsReportComponent } from './modules/debugPage/sms-report/sms-report.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'branding',
    component: BrandingComponent
  },
  {
    path: 'plan',
    component: PlanUpdateComponent
  },
  {
    path: 'regOutlet',
    component: RegisterOutletComponent
  },
  {
    path: 'schedular',
    component: SchedularComponent
  },
  {
    path: 'sms',
    component: SmsReportComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
