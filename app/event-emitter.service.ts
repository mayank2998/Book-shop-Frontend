import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  itemCounter= new EventEmitter();
  constructor() { }

  getTotalItems(totalItems : number){
    this.itemCounter.emit(totalItems);
  }
}
