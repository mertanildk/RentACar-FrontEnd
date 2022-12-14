import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
;

/** @title Select with 2-way value binding */


export class SelectValueBindingExample {
  selected = 'option2';
}


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {
  brands:Brand[] = [];
  currentBrand:Brand;
  dataLoaded = false;
  emptyBrand:Brand;
  selected = 'option2';



  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }
  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return 'list-group-item bg-dark text-white ';
    }else{
      return 'list-group-item ';
    }
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return 'list-group-item bg-dark text-white ';
    }else{
      return 'list-group-item ';
    }
  }
  clearCurrentBrand(){
    this.currentBrand = this.emptyBrand;
  }

  onChange(deviceValue:EventTarget) {
    console.log(deviceValue);
  }
}
