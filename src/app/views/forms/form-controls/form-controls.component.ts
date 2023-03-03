import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})

export class FormControlsComponent {

  public favoriteColor = '#26ab3c';

  constructor() { }

}
