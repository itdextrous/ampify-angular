import { Directive, OnDestroy, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

@Directive()
export abstract class BaseComponent implements OnInit, OnDestroy{
  constructor () {}

  ngOnInit(): void{
    this.setupTranslations().subscribe();
  }

  ngOnDestroy(): void {}

  setupTranslations(): Observable<any>{
    return of({});
  }

}
