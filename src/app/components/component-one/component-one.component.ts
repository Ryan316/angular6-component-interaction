import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../shared/service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

	public _messageTwo:any;
	public _messageThree:any;
	private subscription: Subscription;
	public _messages:any;

  constructor(private _componentsService: ComponentsService) { 
  	this.subscription = _componentsService.componentOne$
  		.subscribe((mission) => {
      	this._messages = mission;
    });
  }

  ngOnInit() {
  	this._messages = this._componentsService.receiveMessages('componentOne');
  }

  public sendMessage(from, to) {
  	const self = this;
  	if (to === 'componentTwo') {
  		if (!self._messageTwo) {
  			alert('Please add a message!')
  			return;
  		}
  		this._componentsService.sendMessages(from, to, self._messageTwo);
  		this._messageTwo = '';
  	} else {
  		if (!self._messageThree) {
  			alert('Please add a message!')
  			return;
  		}
  		this._componentsService.sendMessages(from, to, self._messageThree);
  		this._messageThree = '';
  	}
  }

}
