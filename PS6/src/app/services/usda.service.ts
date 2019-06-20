import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { USDA} from "../models/usdaModel";

@Injectable({
  providedIn: 'root'
})
export class UsdaService {

  contactsEndpoint = 'http://localhost:3000/ps6';
  headers = new HttpHeaders();
  //options = { headers: this.headers };
  params = new HttpParams();

  getAge(state): Observable<any> {
    this.params.set('state_alpha', state)
    return this.httpClient.get<USDA[]>(this.contactsEndpoint);
  }

  constructor(private httpClient: HttpClient) { }
}
