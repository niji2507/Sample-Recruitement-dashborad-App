import { Component, OnInit } from '@angular/core';
import { DataService } from './../service/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  applicantsData: any[];
  totalApplicants: number;
  pageSize: number;
  nextIndex: number;
  pageNumber: number;
  currentPage: number;
  currentIndex: number;
  lastIndex: number;
  paginatedData: any[];
  constructor(private dataService: DataService) {
    this.applicantsData = [];
    this.paginatedData = [];
    this.pageSize = 5;
    this.nextIndex = -1;
    this.pageNumber = 1;
    this.currentPage = 1;
    this.currentIndex = 1;
  }

  updatePageSize() {
    this.initializePagination();
  }

  getPaginatedData() {
    let tempArray: any[];
    tempArray = this.applicantsData.slice(this.currentIndex - 1, this.lastIndex);
    return tempArray;
  }

  initializePagination() {
    this.nextIndex = -1;
    this.pageNumber = 1;
    this.currentPage = 1;
    this.currentIndex = 1;
    if (this.totalApplicants < this.pageSize) {
      this.nextIndex = -1;
      this.lastIndex = this.totalApplicants;
      this.paginatedData = this.applicantsData;
    } else {
      this.nextIndex = (this.pageNumber * this.pageSize) + 1;
      this.lastIndex = this.pageSize;
      this.paginatedData = this.getPaginatedData();
    }
  }

  showNextButton() {
    if (this.nextIndex != -1) {
      return true;
    }
    return false;
  }

  showPrevButton() {
    if (this.currentPage != 1) {
      return true;
    }
    return false;
  }

  calculateNextIndex() {
    let temp = (this.currentPage * this.pageSize) + 1;
    if (temp > this.totalApplicants) {
      temp = -1;
      return temp;
    } else {
      return temp;
    }
  }

  getLastIndex() {
    if (this.currentIndex === this.totalApplicants) {
      return this.currentIndex;
    } else {
      let lastIndex = (this.pageNumber * this.pageSize);
      if (lastIndex > this.totalApplicants) {
        let diff = lastIndex - this.totalApplicants;
        lastIndex = lastIndex - diff;
      }
      return lastIndex;
    }
  }

  getCurrentIndex() {
    return ((this.currentPage * this.pageSize) + 1) - this.pageSize;
  }
  gotoNextPage() {
    this.currentPage = this.currentPage + 1;
    this.nextIndex = this.calculateNextIndex();
    this.currentIndex = this.getCurrentIndex();
    this.pageNumber = this.pageNumber + 1;
    this.lastIndex = this.getLastIndex();
    this.paginatedData = this.getPaginatedData();
  }

  gotoPrevPage() {
    this.currentPage = this.currentPage - 1;
    this.nextIndex = this.calculateNextIndex();
    this.currentIndex = this.getCurrentIndex();
    this.pageNumber = this.pageNumber - 1;
    this.lastIndex = this.getLastIndex();
    this.paginatedData = this.getPaginatedData();
  }

  ngOnInit() {
    this.dataService.getJSON().subscribe(
      data => {
        console.log(data);
        this.applicantsData = data['data'];
        this.totalApplicants = this.applicantsData.length;
        this.initializePagination();
      },
      error => {
        console.log(error);
      }
    )
  }

}
