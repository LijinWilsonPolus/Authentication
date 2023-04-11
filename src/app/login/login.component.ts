import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private _builder: FormBuilder,
    private _toastr: ToastrService,
    private _AuthService: AuthService,
    private _router: Router
  ) {
    sessionStorage.clear()
  }
  userdata: any;

  // Login form
  loginform = this._builder.group({
    username: this._builder.control('', Validators.required),
    password: this._builder.control('', Validators.required)
  })

  // Login logic
  proceedlogin() {
    if (this.loginform.valid) {
      this._AuthService.Getbycode(this.loginform.value.username).subscribe(res => {
        this.userdata = res;
        if (this.userdata.password === this.loginform.value.password) {
          if (this.userdata.isactive) {
            sessionStorage.setItem('username', this.userdata.id);
            sessionStorage.setItem('userrole', this.userdata.role);
            this._router.navigate([''])//home url
          } else {
            this._toastr.error('Please contact admin', 'Inactive user')
          }
        } else {
          this._toastr.error('Invalid credential')
        }
      })
    }
  }

}
