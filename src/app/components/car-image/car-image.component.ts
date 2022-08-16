import { CarImage } from './../../models/carImage';
import { ActivatedRoute } from '@angular/router';
import { CarImageService } from './../../services/car-image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  carImages:CarImage[] = [];
  constructor(
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"])
      }
    })
  }
  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
      console.log(this.carImages)
    })
  }

}
