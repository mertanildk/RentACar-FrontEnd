import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CardetailsdtoComponent } from './components/cardetailsdto/cardetailsdto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  { path:'', pathMatch:'full',  component:CardetailsdtoComponent },
  { path:'cardetails',  component:CardetailsdtoComponent },
  { path:'cardetails/brand/:brandId',  component:CardetailsdtoComponent  },
  { path:'cardetails/color/:colorId',  component:CardetailsdtoComponent  },
  { path:'cars/:carId',  component:CarDetailComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
