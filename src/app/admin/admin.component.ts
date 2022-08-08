import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  requestdata = [
    { "Requestno": '001', "RequestName": "Pick-up of Trash from Girdharnagar Area", "Status": "Completed" },
    { "Requestno": '002', "RequestName": "Removal of Trash Bin of Wet Garbage", "Status": "Partial" },
    { "Requestno": '003', "RequestName": "Addition of Trash Bin for Dry Wastage", "Status": "Pending" }
  ];

  constructor() {  }

  ngOnInit(): void { }

}
