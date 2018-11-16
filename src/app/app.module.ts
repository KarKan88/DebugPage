import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { SideBarItemComponent } from './shared/components/side-bar-item/side-bar-item.component';
import { ProfileComponent } from './modules/debugPage/profile/profile.component';
import { SmsReportComponent } from './modules/debugPage/sms-report/sms-report.component';
import { PlanUpdateComponent } from './modules/debugPage/plan-update/plan-update.component';
import { SchedularComponent } from './modules/debugPage/schedular/schedular.component';
import { BrandingComponent } from './modules/debugPage/branding/branding.component';
import { RegisterOutletComponent } from './modules/debugPage/register-outlet/register-outlet.component';
import { DebugPageComponent } from './modules/debug-page/debug-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SideBarItemComponent,
    ProfileComponent,
    SmsReportComponent,
    PlanUpdateComponent,
    SchedularComponent,
    BrandingComponent,
    RegisterOutletComponent,
    DebugPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
