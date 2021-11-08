import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { loginData } from '../LoginModel';
import { UserNameService } from '../user-name.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetail = {} as loginData;
  jsonUser : any;
  loginDetails : Array<loginData> = [];
  error : boolean = false;
  userForm: FormGroup;
  isAdmin : boolean = false;
  constructor(private router:Router,private loginService : LoginService,private userService : UserNameService) { 
    this.userForm = new FormGroup({
      'emailId': new FormControl('', [Validators.required,Validators.email]),
      'password': new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  submitdata() {
    if(this.userForm.valid){
      this.loginDetail.email=this.userForm.value.emailId;
      this.loginDetail.password=this.userForm.value.password;
      this.loginService.login(this.loginDetail).subscribe((data : any) => {
        
        var str = JSON.stringify(data.admin).toString();
        str.replace(/^"(.*)"$/, '$1');
        console.log(str);
        if(str=="true"){
          this.userService.updateisAdmin(true);
          localStorage.setItem('admin','true');
        }
        else{
          this.userService.updateisAdmin(false);
          localStorage.setItem('admin','false');
        }

        this.jsonUser = JSON.stringify(data.userName).toString();
        this.jsonUser = this.jsonUser.replace(/^"(.*)"$/, '$1');
      this.jsonUser=this.jsonUser.toUpperCase();
      localStorage.setItem("userName",this.jsonUser);
        this.userService.updateMessage(this.jsonUser);
        console.log(typeof(data));
      
        if(data){
          this.router.navigate(["/main"]);
        }
        
        // alert("something is wrong");
       
        

      },
      (() => this.error=true)
      )
     
    }
  }
}
