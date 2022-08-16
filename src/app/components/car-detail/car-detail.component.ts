import { CardetailsdtoService } from './../../services/cardetailsdto.service';
import { CarDetailDTO } from './../../models/carDetailDTO';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetailDto:CarDetailDTO[] = [];
  dataLoaded =  false;
  constructor(
    private carDetailsDtoService:CardetailsdtoService,
    private activatedRoute:ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailByCarId(params["carId"])
      }
    })
  }

  getCarDetailByCarId(carId:number){
    this.carDetailsDtoService.getCarsByCar(carId).subscribe(response => {
      this.carDetailDto = response.data;
      console.log(this.carDetailDto[0])
      this.dataLoaded = true;
    })
  }
}
