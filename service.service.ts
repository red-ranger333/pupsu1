import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElectronService } from 'ngx-electron';
// import { Observable } from 'rxjs/observable';
// import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // uri = 'http://localhost:4000';

  // constructor(private http: HttpClient) { }
  // constructor(private _electronService: ElectronService) {}
  BASE_URL : string = 'http://localhost:4000';

  constructor(private router: Router, private http: HttpClient) { }

  addUser(firstName: any, lastName: any, publishName: any) {
  const obj = {
    firstName: firstName,
    lastName: lastName,
    publishName: publishName
  };
  this.http.post(this.BASE_URL + '/user/add', obj).subscribe(res => {
    console.log(res, 'Done')
    this.router.navigate(['/']);
  });
  }

  getUsers() {return this.http.get(this.BASE_URL + '/user/');}

  editUser(id: string) {return this.http.get(this.BASE_URL + '/user/edit/' + id);}
  // getItems(): Observable<Item[]> {
  //   return of(this._electronService.ipcRenderer.sendSync('get-items')).pipe(
  //     catchError((error: any) => Observable.throw(error.json))
  //   );
  // }

  // addItem(item: Item): Observable<Item[]> {
  //   return of(
  //     this._electronService.ipcRenderer.sendSync('add-item', item)
  //   ).pipe(catchError((error: any) => Observable.throw(error.json)));
  // }
  // addProduct(firstName: any, lastName: any, publishName: any) {
  //   console.log(firstName, lastName, publishName);
  //   const obj = {
  //     firstName, lastName, publishName
  //   };
  //    this.http.post(`${this.uri}/add`, obj)
  //       .subscribe(res => console.log('Done'));
  // }

  // getProducts() {
  //   return this
  //          .http
  //          .get(`${this.uri}`);
  // }

  // editProduct(id: any) {
  //   return this
  //           .http
  //           .get(`${this.uri}/edit/${id}`);
  // }

  // updateProduct(ProductName, ProductDescription, ProductPrice, id) {
  //   const obj = {
  //     ProductName,
  //     ProductDescription,
  //     ProductPrice
  //   };
  //   this
  //     .http
  //     .post(`${this.uri}/update/${id}`, obj)
  //     .subscribe(res => console.log('Update Complete'));
  // }

  // deleteProduct(id) {
  //   return this
  //             .http
  //             .get(`${this.uri}/delete/${id}`);
  // }
}