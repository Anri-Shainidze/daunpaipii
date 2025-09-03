import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidatePricePipe implements PipeTransform {
  transform(value: any) {
    if (value !== undefined && isNaN(Number(value))) {
      throw new BadRequestException('Price must be a string representing a number');
    }
    return Number(value);
  }
}
