import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalService {
  public static login:Subject <any> = new Subject <any>();
  public static companyModal:Subject <any> = new Subject <any>();
  public static companySelected:Subject <any> = new Subject <any>();
  public static logout:Subject <any> = new Subject <any>();
  public static permissionModal:Subject <any> = new Subject <any>();
  constructor() { }
}