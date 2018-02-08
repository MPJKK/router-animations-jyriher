import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'thumbnail',
})
export class ThumbnailPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    /*
    - let koko: string
    - jaa split-funktiolla tiedoston nimi (value) osiin
    - tallenna tulos nimellä temp
    - switch-case lause:
    - jos args on small, koko = 160
    - jos args on medium, koko = 360
    - jos args on large, koko = 640
    - return temp[0] + 'tn' + koko + '.png'
    */
 //   const temp = media.filename.split('.');
 //   media.thumbnail = temp[0] + '-tn320.png';
    let koko: string;

    const temp =  value.split('.');
    console.log(args);

    switch (args) {
      case 'small':
        koko = '160';
        break;
      case 'medium':
        koko = '360';
        break;
      case 'large':
        koko = '640';
        break;
    }

    return temp[0] + '-tn' + koko + '.png';
  }

}
