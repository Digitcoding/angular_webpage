import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  headers: { [url: string]: { [key: string]: string } } = {}

  public setHeader(url: string, key: string, value: string) {
    if (this.headers && this.headers.hasOwnProperty(url)) {
      this.headers[url][key] = value;
    } else {
      this.headers[url] = { [key]: value };
    }
  }
  public getHeaders(url: string) {
    if (this.headers && this.headers.hasOwnProperty(url)) {
      return this.headers[url];
    } else {
      console.log("header section : ", this.headers['default']);
      return this.headers['default'];
    }
  }
}