import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent implements OnInit {

	public _messageOne:any;
	public _messageTwo:any;
	private subscription: Subscription;
	public _messages:any;

  constructor(private _componentsService: ComponentsService) { 
  	this.subscription = _componentsService.componentThree$
  		.subscribe((mission) => {
        this._messages = mission;
    });
  }

  ngOnInit() {
  	this._messages = this._componentsService.receiveMessages('componentThree');
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
  		if (!self._messageTwo) {
  			alert('Please add a message!')
  			return;
  		}
  		this._componentsService.sendMessages(from, to, self._messageTwo);
  		this._messageTwo = '';
  	}
  }

}
