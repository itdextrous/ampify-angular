import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BaseComponent } from 'src/app/core/base/base-component';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent extends BaseComponent {
  trasnlations: any;

  constructor(protected translateService: TranslateService) {
    super();
  }

  setupTranslations(): Observable<any>{
    return this.translateService.get('common').pipe(
      tap(translations => {
        this.trasnlations = translations;
      })
    );
  }
}
