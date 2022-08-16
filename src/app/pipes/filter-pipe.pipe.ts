import { CarDetailDTO } from './../models/carDetailDTO';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetailDTO[] , filterText:string ): CarDetailDTO[] {
    filterText =filterText?filterText.toLocaleLowerCase():"";
    //turnary operator
    return filterText ? value.filter((c:CarDetailDTO)=>c.modelName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
