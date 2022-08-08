import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './drivercreate.component.html',
  styleUrls: ['./drivercreate.component.scss']
})

export class DriverCreateComponent implements OnInit {

  createdriver(form: { value: any; }) {
    console.log (form.value);
  }




 ngOnInit(): void
 {

  

 }

}
