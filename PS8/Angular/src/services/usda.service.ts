import { Injectable } from '@angular/core';
import { FARMER } from '../models/usdaModel';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { headersConfig } from "../configs/config"

@Injectable({
  providedIn: 'root'
})

//These are where all the functions are created!
export class UsdaService {
  usdaEndpoint = 'http://localhost:3000/usdata';

  public getAge(state: string) {

    return this.httpClient.get(this.usdaEndpoint + '/usdata', myHeaders)
  }


  constructor(private httpClient: HttpClient) { }
}
