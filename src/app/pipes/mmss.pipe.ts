import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mmss'
})
export class MmssPipe implements PipeTransform {
  minutes: number;
  seconds: number;
  countdown: string;

  //waitTime is the value of the variable that I'll call the pipe on, args are possible extra parameters (like in date : 'shortDate')
  transform(waitTime: number, args?: any): string {
    this.minutes = Math.floor(waitTime / 60000);
    this.seconds = Math.floor((waitTime - this.minutes * 60000) / 1000);
    this.countdown = this.twodigits(this.minutes, '0', 2) + ':'
      + this.twodigits(this.seconds, '0', 2);
    return this.countdown;
  }

  twodigits(num: number, zero: string, length: number): string {
    return (new Array(length + 1).join(zero) + num).slice(-length);
  }

}
