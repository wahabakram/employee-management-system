import {
  ChangeDetectorRef,
  Component,
  Inject,
  inject,
  OnDestroy,
} from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats,
} from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Subject, takeUntil } from 'rxjs';
import { DatepickerHeaderService } from '../datepicker-header.service';

const CONTROL = 'endDate';

@Component({
  selector: 'app-end-date-header',
  templateUrl: './end-date-header.component.html',
  styleUrls: ['./end-date-header.component.scss'],
})
export class EndDateHeaderComponent<D> implements OnDestroy {
  private _destroyed = new Subject<void>();
  private _dateAdapter = inject(DateAdapter<D>);
  private _calendar = inject(MatCalendar<D>);
  private _cdr = inject(ChangeDetectorRef);
  private _datepickerHeaderService = inject(DatepickerHeaderService<D>);

  constructor(@Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats) {
    this._calendar.stateChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => {
        this._datepickerHeaderService.setDate({
          control: CONTROL,
          value: this._calendar.activeDate,
        });
        this._cdr.markForCheck();
      });
  }

  get periodLabel() {
    return this._dateAdapter
      .format(
        this._calendar.activeDate,
        this._dateFormats.display.monthYearA11yLabel
      )
      .toLocaleUpperCase();
  }

  previousClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  nextClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
  }

  setToday() {
    this._calendar.activeDate = this._dateAdapter.today();
    this.setSelectedAndFoucsCell();
  }

  setNoDate() {
    this._calendar.activeDate = null as D;
  }

  setSelectedAndFoucsCell() {
    this._calendar.selected = this._calendar.activeDate;
    this._calendar.focusActiveCell();
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
