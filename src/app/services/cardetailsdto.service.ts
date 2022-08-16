import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDTO } from '../models/carDetailDTO';

@Injectable({
  providedIn: 'root'
})
export class CardetailsdtoService {


  apiUrl="https://localhost:5001/api/Cars/";

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetailDTO>>{
     let newPath = this.apiUrl+"getCarsDetails"
    return this.httpClient.get<ListResponseModel<CarDetailDTO>>(newPath);
  }
  getCarsByCar(carId:number):Observable<ListResponseModel<CarDetailDTO>>{
    let newPath=this.apiUrl+'getcarsdetailsbyid?id='+carId;
    return this.httpClient.get<ListResponseModel<CarDetailDTO>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetailDTO>>{
    let newPath=this.apiUrl+'getcardetailsbybrandid?brandId='+brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDTO>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetailDTO>>{
    let newPath=this.apiUrl+'getcarsdetailsbycolorid?colorId='+colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDTO>>(newPath);
  }
  getCarsByColorAndBrand(colorId:number,brandId:number):Observable<ListResponseModel<CarDetailDTO>>{
    let newPath=this.apiUrl+'getcardetailsbycolorandbrandid?colorId='+colorId+"&brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDTO>>(newPath);
  }
}
