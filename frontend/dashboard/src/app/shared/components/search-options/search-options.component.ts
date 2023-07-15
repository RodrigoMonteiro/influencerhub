import { Category, Platform } from '../../model/user';
import { SearchService } from './../../services/search/search.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss'],
})
export class SearchOptionsComponent {
  firstAttribute: string = '';
  secondAttribute: string = '';

  @Output() emitModalStatus = new EventEmitter();

  constructor(private searchService: SearchService) {}

  handleOpenModal(){
    this.emitModalStatus.emit()
  }

  handleChangeFirstAttribute(event: any) {
    const newValue = event.target.value;
    this.firstAttribute = newValue;
  }
  handleChangeSecondAttribute(event: any) {
    const newValue = event.target.value;
    this.secondAttribute = newValue;
  }

  searchUserByAttributesSelected() {
    this.searchService.setFirstAtributteSelected(this.firstAttribute);
    this.searchService.setSecondAtributteSelected(this.secondAttribute);
  }
}
