import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetailDto } from '../models/rentalDetailDTO';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiURL = "https://localhost:5001/api/Rentals/GetRentalDetails"
  ;
  constructor(private httpClient : HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalDetailDto>>{
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.apiURL);
  }
}
