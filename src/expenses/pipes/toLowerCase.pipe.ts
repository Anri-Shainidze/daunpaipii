import { Injectable } from '@nestjs/common';
import { ExpensesServicePipe } from './toUpperCase.pipe';

@Injectable()
export class ExpenseServiceToLowerCase implements ExpensesServicePipe {
  transform(value: any) {
    if (typeof value !== 'string') {
      throw new Error('Invalid string type');
    }
    return value.toLowerCase();
  }
}
