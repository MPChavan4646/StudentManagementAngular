import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  /**
   * 
   * @param url 
   * @returns Get url
   */
  get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  /**
   * 
   * @param url 
   * @param reqBody 
   * @returns post request
   */
  post(url: string, reqBody: any): Observable<any> {
    return this.httpClient.post(url, reqBody);
  }

  /**
   * 
   * @param url 
   * @returns delete 
   */
  delete(url: string): Observable<any> {
    return this.httpClient.delete(url)
  }

  /**
   * 
   * @param url 
   * @param reqBody 
   * @returns put
   */
  put(url: string, reqBody: any): Observable<any> {
    return this.httpClient.put(url, reqBody);
  }

  /**
   * 
   * @param url 
   * @param reqBody 
   * @returns patch
   */
  patch(url: string, reqBody: any): Observable<any> {
    return this.httpClient.patch(url, reqBody)
  }

}
