import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from'src/app/views/Contact/ValidateForm';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegistreComponent implements OnInit {
  type: string ="password";
  isText: boolean= false;
  eyeIcon: string="fa-eye-slash";
  signUpForm!: FormGroup;
  constructor(private fb : FormBuilder){}

  ngOnInit():void{
this.signUpForm = this.fb.group({
  UserName: ['',Validators.required],
  Email    : ['',Validators.required],
  Password: ['',Validators.required],
  RepeatPassword: ['',Validators.required],
  
})
  }
hideShowPass(){
  this.isText = !this.isText;
  this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  this.isText ? this.type = "text" : this.type = "password";
  this.isText ? this.type = "text" : this.type = "repeatpassword";
}
onSignup(){
  if(this.signUpForm.valid){
    //perform logic for signup

    console.log(this.signUpForm.value)
  }else{
    ValidateForm.validateAllFormFileds(this.signUpForm)
    
    //logic for throwing error
  }
}
private validateAllFormFileds(FormGroup: FormGroup){

}
 
}