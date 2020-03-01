import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string, c: string = '!', count = 1): unknown {
    console.log('test pipe', value);
    return value + c.repeat(count);
  }

}
