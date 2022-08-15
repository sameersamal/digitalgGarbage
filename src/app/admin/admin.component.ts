import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})



export class AdminComponent implements OnInit {
  requestdata = [
    { "Requestno": 'r001', "RequestTitle": "Necessity of adding Trash Bin in Ranip Area", "RequestType": "Request", "RequestSubject": "Add/Remove Bin", "RequestDetail": "Needs to Add 5 Additioal Bins is Ranip Area", "RequestStatus": "Completed" },
    { "Requestno": 'r002', "RequestTitle": "Replace existing Driver is not on time to pick the Garbage", "RequestType": "Request", "RequestSubject": "Add/Remove Driver", "RequestDetail": "Existing Driver named Jackson Emanuel is not on time please change the Driver to pick Trash at 8.00 am", "RequestStatus": "Partial" },
    { "Requestno": 'c003', "RequestTitle": "Replacement of New Trash Bin / Empty the existing one", "RequestType": "Complaint", "RequestSubject": "Other", "RequestDetail": "Existing Bin at the corner of Sudarshan Apartment Near R. H. Patel College is sticking and overflow", "RequestStatus": "Pending" }
  ];
  driversdata = [
    { "DriverId": 'd001', "DriverName": "Jackson Emanuel", "DriverDOB":"02-02-1980", "DriverPhone":"7438234910", "DriverEmail":"jackson@gmail.com", "DriverShift": "Morning", "DriverStatus":"Assigned", "DriverRoute": "Assigned" },
    { "DriverId": 'd002', "DriverName": "Joel Martin", "DriverDOB":"22-03-1975", "DriverPhone":"8465834560", "DriverEmail":"joel@gmail.com", "DriverShift": "Evening", "DriverStatus":"Assigned", "DriverRoute": "Not-Assigned" },
    { "DriverId": 'd003', "DriverName": "John Davis", "DriverDOB":"12-31-1978", "DriverPhone":"7389834560", "DriverEmail":"john@gmail.com", "DriverShift": "Noon", "DriverStatus":"Available", "DriverRoute": "Not-Assigned" },
    { "DriverId": 'd004', "DriverName": "Joel Martin", "DriverDOB":"22-03-1975", "DriverPhone":"8465834560", "DriverEmail":"joel@gmail.com", "DriverShift": "Evening", "DriverStatus":"On-Leave", "DriverRoute": "Assigned"  }
  ];
  bindata = [
    { "BinId": 'b001', "BinType": "Dry Bin", "BinSize": "Small (Low Load)", "BinArea": "Ranip", "BinCity": "Ahmedabad", "BinZone": "West Zone",  "BinDriver": "Jackson Emanuel", "BinSchedule": "8:00 am"},
    { "BinId": 'b002', "BinType": "Wet Bin", "BinSize": "Medium (Medium Load)", "BinArea": "Nava Vadaj", "BinCity": "Ahmedabad", "BinZone": "West Zone",  "BinDriver": "John Davis", "BinSchedule": "7:30 am" },
    { "BinId": 'b003', "BinType": "Dry Bin", "BinSize": "Heavy (Heavy Load)", "BinArea": "Maninagar", "BinCity": "Ahmedabad", "BinZone": "East Zone",  "BinDriver": "Joel Martin", "BinSchedule": "7:15:00 am" }
  ];

  constructor() {  }

  ngOnInit(): void { }

}
