import { ResponseModel } from './responseModel';
import { Car } from 'src/app/models/car';

export interface CarResponseModel extends ResponseModel{
  data:Car[]
}
