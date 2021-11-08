import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { loginData } from '../LoginModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  loginDetail = {} as loginData;
  loginDetails : Array<loginData> = [];
  error : boolean = false;

  constructor(private router:Router,private loginService: LoginService) { 
    this.userForm = new FormGroup({
      'name': new FormControl('',Validators.required),
      'emailId': new FormControl('', [Validators.required,Validators.email]),
      'password': new FormControl('', [Validators.required]),
      'dob' : new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submitdata(){

    // if(this.userForm.valid){
    //   this.loginService.login().subscribe((data) => {
    //     console.log(data);
    //     this.loginDetails = data;
    //     for(let i=0;i<this.loginDetails.length;i++){
    //      if(this.loginDetails[i].email == this.userForm.value.emailId){
    //        this.error = true;
    //        break;
    //      }
    //     }
    //     // alert("something is wrong");
    //     if(!this.error){
          
    //       this.loginDetail.name = this.userForm.value.name;
    //       this.loginDetail.email=this.userForm.value.emailId;
    //       this.loginDetail.password=this.userForm.value.password;
    //         this.loginService.register(this.loginDetail).subscribe(()=>{
    //           this.router.navigate([""]);
    //         })
             
    //     }

    //   })
     
    // }
    if(this.userForm.valid){
      this.loginDetail.name = this.userForm.value.name;
      this.loginDetail.email=this.userForm.value.emailId;
      this.loginDetail.password=this.userForm.value.password;
      this.loginService.register(this.loginDetail).subscribe((data : any)=>{
        var str = JSON.stringify(data.result).toString();
        str.replace(/^"(.*)"$/, '$1');
        str.replace(/['"]+/g, '')
        console.log(str);
        if(str.match('success')){
          console.log("hi");
          this.router.navigate([""]);
        }
        else{
          this.error = true;
        }
      })
    }
   
  }
}
