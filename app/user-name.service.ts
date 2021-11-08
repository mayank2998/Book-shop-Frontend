import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { cartData } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {
  private userName = new BehaviorSubject<string>("");
  private totalItems = new BehaviorSubject<number>(0);
  private productIds = new BehaviorSubject<Array<number>>([]);
  private productList = new BehaviorSubject<Array<cartData>>([]);
  private isNavActive = new BehaviorSubject<boolean>(true); 
  private descId = new BehaviorSubject<number>(0);
  private isAdmin = new BehaviorSubject<boolean>(false);
  private totalProductids = new BehaviorSubject<Array<number>>([]);
  constructor() { }

  public getMessage(): Observable<string> {
    return this.userName.asObservable();
  }

  public updateMessage(message: string): void {
    console.log(message);
    this.userName.next(message);
  }

  public getTotalItems(): Observable<number> {
    return this.totalItems.asObservable();
  }

  public updateTotalItems(message: number): void {
    console.log(message);
    this.totalItems.next(message);
  }

  public getProductIds(): Observable<Array<number>> {
    return this.productIds.asObservable();
  }

  public updateProductIds(message: Array<number>): void {
    console.log(message);
    this.productIds.next(message);
  }

  public getProductList(): Observable<Array<cartData>> {
    return this.productList.asObservable();
  }

  public updateProductList(message: Array<cartData>): void {
    console.log(message);
    this.productList.next(message);
  }

  public getNavState(): Observable<boolean> {
    return this.isNavActive.asObservable();
  }

  public updateNavState(message: boolean): void {
    console.log(message);
    this.isNavActive.next(message);
  }

  public getDescId(): Observable<number> {
    return this.descId.asObservable();
  }

  public updateDescId(message: number): void {
    console.log(message);
    this.descId.next(message);
  }
  public getIsAdmin(): Observable<boolean> {
    return this.isAdmin.asObservable();
  }

  public updateisAdmin(message: boolean): void {
    console.log(message);
    this.isAdmin.next(message);
  }

  public getTotalProductIds(): Observable<Array<number>> {
    return this.productIds.asObservable();
  }

  public updateTotalProductIds(message: Array<number>): void {
    console.log(message);
    this.productIds.next(message);
  }
}
