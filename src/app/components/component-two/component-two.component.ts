import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../shared/service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

	public _messageOne:any;
	public _messageThree:any;
	private subscription: Subscription;
	public _messages:any;

  constructor(private _componentsService: ComponentsService) { 
  	this.subscription = _componentsService.componentTwo$
  		.subscribe((mission) => {
      	this._messages = mission;
    });
  }

  ngOnInit() {
  	this._messages = this._componentsService.receiveMessages('componentTwo');
  }

  public sendMessage(from, to) {
  	const self = this;
  	if (to === 'componentOne') {
  		if (!self._messageOne) {
  			alert('Please add a message!')
  			return;
  		}
  		this._componentsService.sendMessages(from, to, self._messageOne);
  		this._messageOne = '';
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
