import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  firstAttributeSelected: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Name'
  );

  constructor() {}

  secondAttributeSelected: BehaviorSubject<string> =
    new BehaviorSubject<string>('Email');

  getFirstAttributeSelected(): string {
    return this.firstAttributeSelected.value;
  }
  getSecondAttributeSelected(): string {
    return this.secondAttributeSelected.value;
  }
  setFirstAtributteSelected(newValue: string) {
    this.firstAttributeSelected.next(newValue);
  }
  setSecondAtributteSelected(newValue: string) {
    this.secondAttributeSelected.next(newValue);
  }
}
