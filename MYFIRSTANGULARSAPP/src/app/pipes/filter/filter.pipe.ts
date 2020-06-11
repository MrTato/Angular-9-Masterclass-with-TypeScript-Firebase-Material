import { IUser } from './../../interfaces/user';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Unless the pipe is specified to be impure, new added users will not be recompiled to be filtered into the pipe
 * Thefore, new users will not be shown until the page is refreshed, if using this as a pure pipe
 */
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(input: IUser[], filterIdType: string): IUser[] {
    if (filterIdType === '') {
      return input;
    } else {
      return filterIdType === 'odd' ? input.filter(user => user.id % 2 !== 0) : input.filter(user => user.id % 2 === 0);
    }
  }

}
