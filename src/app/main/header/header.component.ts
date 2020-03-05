import { Component } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public faBars = faBars;
  public faUser = faUser;
  public faShoppingCart = faShoppingCart;

  public user: any = {
    first_name: "Kauê"
  }

  public cart: any = {
    qty: "10"
  }

  toggleNavMobile() {
    $("nav").parent().toggleClass("open");
    $("html, body").toggleClass("noscroll");
  }

}
