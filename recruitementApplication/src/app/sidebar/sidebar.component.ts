import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../service/authentication.service';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  state: any;
  constructor(private authenticateService: AuthenticationService) {
    this.state = "expanded";
  }

  ngOnInit() {
  }

  toggleSideBar() {
    if (this.state == "expanded") {
      $('.sidebar').css('margin-left', '-180px');
      $('#page-content').removeClass('moveRight');
      $('#page-content').addClass('moveLeft');
      $('#arrowicon').removeClass('fa fa-angle-left menu-icon fa-2x');
      $('#arrowicon').addClass('fa fa-angle-right menu-icon fa-2x');
      this.state = "minimized";
    } else {
      if (this.state == "minimized") {
        $('.sidebar').css('margin-left', '0px');
        $('#page-content').removeClass('moveLeft');
        $('#page-content').addClass('moveRight');
        $('#arrowicon').removeClass('fa fa-angle-right menu-icon fa-2x');
        $('#arrowicon').addClass('fa fa-angle-left menu-icon fa-2x');
        this.state = "expanded";
      }
    }
  }


}
