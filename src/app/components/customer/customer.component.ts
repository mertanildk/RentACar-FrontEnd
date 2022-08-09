import { CustomerService } from './../../services/customer.service';
import { CustomerResponseModel } from './../../models/customerResponseModel';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 customers:Customer[]=[]
 dataLoaded=false;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomers()
  }
  getCustomers(){
    this.customerService.getCustomers().subscribe((response)=>{
      this.customers=response.data;
      this.dataLoaded=true;
    })
  }

}
