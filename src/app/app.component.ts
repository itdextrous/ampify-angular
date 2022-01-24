import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { delay } from 'rxjs/operators';
import { SpinnerService } from './core/services/spinner/spinner.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'campify';
  showSpinner = false;
  constructor(
    private translateService: TranslateService,
    private spinnerService: SpinnerService ) {
 }

  ngOnInit(): void {
    this.translateService.use('en');
    this.spinnerService.visibility.pipe(delay(0)).subscribe(x => { this.showSpinner = x });
  }
}
