import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() sqldata:any;
  datasource:any = [{
    Number:1,
    City:'Edinburgh',
    Country: 'SCT',
    Temp:'20 C'
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
