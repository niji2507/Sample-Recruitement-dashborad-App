import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errormessage = "error occurred !!. The page you are trying to access doesn't exists"
  constructor() { }

  ngOnInit() {
  }

}
