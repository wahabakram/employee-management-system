import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface DatepickerHeaderData<D> {
  control: 'joinDate' | 'endDate';
  value: D;
}

@Injectable({
  providedIn: 'root',
})
export class DatepickerHeaderService<D> {
  date = new Subject<DatepickerHeaderData<D>>();

  constructor() {}

  setDate(data: DatepickerHeaderData<D>) {
    this.date.next(data);
  }

  getDate(): Observable<DatepickerHeaderData<D>> {
    return this.date.asObservable();
  }
}
