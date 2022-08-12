import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './requestcreate.component.html',
  styleUrls: ['./requestcreate.component.scss']
})
export class RequestCreateComponent implements OnInit {

  createrequest(form: { value: any; }) {
    console.log (form.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
