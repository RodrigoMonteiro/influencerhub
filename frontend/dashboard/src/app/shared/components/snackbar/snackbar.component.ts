import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
  @Output() emitChangeSnackbarStatus = new EventEmitter()
  @Input() msg: string = '';

  handleChangeSnackbarStatus() {
    this.emitChangeSnackbarStatus.emit()
  }
}
