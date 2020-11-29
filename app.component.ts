import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
// import { AnySrvRecord } from 'dns';
import {ToastrService} from 'ngx-toastr';
import { ServiceService } from './service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular';
  showFormError = true;
  // users: FormData[];
  users: FormData[] = [];
  constructor(private toastr: ToastrService, private ps: ServiceService){
  }
  countryList: string[] = ['Canada', 'US', 'India', 'China'];
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public zip = [/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
  form: FormGroup;
  ngOnInit(){

    // this.ps.getUsers().subscribe((res: any) => {
			// this.users = res;
		// });
  //   this.ps
  //   .getProducts()
  //   .subscribe(
  //     (data: any) => {
  //     this.products = data;
  // });
this.form= new FormGroup({
  firstName: new FormControl('',Validators.required),
  lastName: new FormControl('', Validators.required),
  publishName: new FormControl('', [Validators.required]),
  // city: new FormControl('', Validators.required),
  // company: new FormControl('', Validators.required),
  // status: new FormControl('',Validators.required),
  // email: new FormControl('',[Validators.required, Validators.email]),
  // country: new FormControl('',Validators.required),
  // position: new FormControl(''),
  // address: new FormControl(''),
  // guestAuthor: new FormControl(''),
  // phone: new FormControl('',[Validators.required]),
  // fax: new FormControl(''),
  // province: new FormControl(''),
  // zipCode: new FormControl(''),
  // authorCat: new FormControl(''),

})
  }
  save(){
    if (this.form.invalid) {
      this.showFormError = true;
      this.toastr.error('Please fill all required fields');
      this.form.markAllAsTouched();
      return;
    }
    else{
      const fn=this.form.get('firstName').value;
      const ln= this.form.get('lastName').value;
      const pn= this.form.get('publishName').value;
      this.toastr.success('form submitted');
      this.ps.addUser(fn,ln,pn);

      // let data= this.ps.addProduct(firstName, lastName, publishName);
      // console.log(data);
    }
  }
  reset(){
    this.showFormError = false;

    this.form.reset();
  }
  
  

}
