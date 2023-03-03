import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  selectObj: SelectObj ;
  selectArr : SelectObj[] = [];
  constructor() {
    this.selectObj = new SelectObj();
    
  }

  ngOnInit():void {

  }
  
}
export class SelectObj {
  NomKpi: string ;
  formule: string;
  constructor() {
    this.NomKpi="";
    this.formule="";
   }

}
