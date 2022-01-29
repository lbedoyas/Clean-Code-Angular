import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UidHelp {
 
  public generateNumber(): string {
    const timeZone = -4;
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    const nd = new Date(utc + 3600000 * timeZone);
    const formatNumber =
      nd
        .getTime()
        .toString()
        .match(/.{1,4}/g)
        .join('-');

    return formatNumber;
  }
}
