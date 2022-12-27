import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users=[
    {
      "id":1,
      "name":"Nirmal",
      "username":"Nirmal@123",
      "email":"Nirmal@gmail.com",
      "img":"",
      "address": {
        "street":"akkayapalem",
        "suite":"laxmi nilayam",
        "city":"visakhapatnam",
        "zipcode":"500016"
        
      },
      "phone":"1234567890"
    },

    {
      "id":2,
      "name":"ram",
      "username":"ram@123",
      "email":"ram@gmail.com",
      "img":"",
      "address": {
        "street":"NAD",
        "suite":"srilaxmi nilayam",
        "city":"visakhapatnam",
        "zipcode":"500016"
        
      },
      "phone":"1233567890"
    }
  ]
}
