import { CartService } from './../../services/cart.service';
import { CarService } from './../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CardetailsdtoService } from './../../services/cardetailsdto.service';
import { CarDetailDTO } from 'src/app/models/carDetailDTO';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cardetailsdto',
  templateUrl: './cardetailsdto.component.html',
  styleUrls: ['./cardetailsdto.component.css'],
})
export class CardetailsdtoComponent implements OnInit {
  carDetailsDto: CarDetailDTO[] = [];
  oneCarDetailDto: CarDetailDTO;
  filterText = '';

  constructor(
    private cardetailsdtoService: CardetailsdtoService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId'] && params['brandId']) {
        this.getCarsByColorAndBrand(params['colorId'], params['brandId']);
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCarDetailsDto();
      }
    });
  }
  getCarDetailsDto() {
    this.cardetailsdtoService.getCarDetails().subscribe((response) => {
      this.carDetailsDto = response.data;
    });
  }
  getCarsByBrand(brandId: number) {
    this.cardetailsdtoService.getCarsByBrand(brandId).subscribe((response) => {
      this.carDetailsDto = response.data;
    });
  }
  getCarsByColor(colorId: number) {
    this.cardetailsdtoService.getCarsByColor(colorId).subscribe((response) => {
      this.carDetailsDto = response.data;
    });
  }

  getCarsByColorAndBrand(colorId: number, brandId: number) {
    this.cardetailsdtoService
      .getCarsByColorAndBrand(colorId, brandId)
      .subscribe((response) => {
        this.carDetailsDto = response.data;
      });
  }
  addToCart(car:CarDetailDTO){
      this.toastrService.success('Başarılı',car.modelName+" Kiralama İşlemi Gerçekleşti.")
      this.cartService.addToCart(car);
    }

  }

