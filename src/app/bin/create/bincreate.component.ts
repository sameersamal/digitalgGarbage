import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './bincreate.component.html',
  styleUrls: ['./bincreate.component.scss']
})
export class BinCreateComponent implements OnInit {

  createbin(form: { value: any; }) {
    console.log (form.value);
  }

  ngOnInit(): void {
  }

}
