import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher('65d201579b9d1d4a6f32', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: any) => {
      this.messages.push(data)
    });

    throw new Error('Method not implemented.');
  }

  username: string = 'username';
  message: string = '';
  messages: any = [];


  submit(): void {
    
  }
}
