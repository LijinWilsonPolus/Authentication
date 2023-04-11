import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
     private _builder:FormBuilder,
     private _toastr:ToastrService,
     private _AuthService:AuthService,
     private _router:Router
     ){  }

  registerform = this._builder.group({
    id:this._builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    name:this._builder.control('',Validators.compose([Validators.required])),
    password:this._builder.control('',Validators.compose([Validators.required])),
    email:this._builder.control('',Validators.compose([Validators.required,Validators.email])),
    gender:this._builder.control('male'),
    role:this._builder.control(''),
    isactive:this._builder.control(false)
  })

  // registration
  proceedregistration(){
    if (this.registerform.valid) {
      this._AuthService.Proceedregister(this.registerform.value).subscribe(res => {
          this._toastr.success('please contact the admin for access','user registered successfully');
          this._router.navigate(['login'])
      })
    } else {
      this._toastr.warning('please enter the valid details')
    }
  }
}
