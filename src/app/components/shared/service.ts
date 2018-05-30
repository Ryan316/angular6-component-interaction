import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ComponentsService {

  private componentOne = new Subject<object>();
  private componentTwo = new Subject<object>();
  private componentThree = new Subject<object>();
  public componentOne$ = this.componentOne.asObservable();
  public componentTwo$ = this.componentTwo.asObservable();
  public componentThree$ = this.componentThree.asObservable();
  public _messages = {
    componentOne: [],
    componentTwo: [],
    componentThree: []
  }

  constructor() {

  }

  public sendMessages(from, to, message) {
    this._messages[to].push({
      from,
      message
    });
    this[to].next(this._messages[to]);
  }

  public receiveMessages(from) {
    return this._messages[from];
  }
}