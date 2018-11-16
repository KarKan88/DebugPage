import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  icon_class = 'icon-plan';
  text = 'Plan Updation';
  my_list: { icon_class: string, text: string, route_url: string}[] = [
    { 'icon_class': 'icon-SMS', 'text': 'SMS Sending', 'route_url': 'sms' },
    { 'icon_class': 'icon-plan', 'text': 'Plan Updation', 'route_url': 'plan' },
    { 'icon_class': 'icon-scheduler', 'text': 'Schedular', 'route_url': 'schedular' },
    { 'icon_class': 'icon-branding', 'text': 'Branding', 'route_url': 'brand' },
    { 'icon_class': 'icon-outlet', 'text': 'Register Outlet', 'route_url': 'regOutlet' },
    { 'icon_class': 'icon-customer', 'text': 'Customer Details', 'route_url': 'customer' }
  ];
  constructor() { }

  ngOnInit() {

  }

}
