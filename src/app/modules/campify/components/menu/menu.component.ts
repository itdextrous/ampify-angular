import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BaseComponent } from '../../../../core/base/base-component';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends BaseComponent {
  translations: any;

  constructor(protected translateService: TranslateService) {
    super();
  }

  setupTranslations(): Observable<any>{
    return this.translateService.get('common').pipe(
      tap(translations => {
        this.translations = translations;
      })
    );
  }
}
