import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(filename: string, size?: any): any {
    let sizeChosen: string;
    const _filename: string = filename.substring(0, filename.indexOf('.'));

    if (size === 'small') {
      sizeChosen = '-tn160.png';
    } else if (size === 'large') {
      sizeChosen = '-tn640.png';
    } else {
      sizeChosen = '-tn320.png';
    }
    return _filename + sizeChosen;
  }

}
