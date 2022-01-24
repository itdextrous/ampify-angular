import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { apiConfig } from "../../../api-config/api-config";

@Injectable()
export class HttpsService {
  baseUrl: any;

  constructor(private http: HttpClient) {
    this.baseUrl = apiConfig.baseURL;
  }


  get(methodUrl: any): Observable<any> {
    return this.http.get(this.baseUrl + methodUrl).pipe(map(s => s));

  }

  put(methodUrl: any, obj: any): Observable<any> {
    const result = this.http.put(this.baseUrl + methodUrl, obj).pipe(map(s => s));
    return result;
  }

  post(methodUrl: any, obj: any): Observable<any> {
    return this.http.post(this.baseUrl + methodUrl, obj).pipe(map(s => s));

  }

  delete(methodUrl: any): Observable<any> {
    return this.http.delete(this.baseUrl + methodUrl).pipe(map(s => s));
  }

}
