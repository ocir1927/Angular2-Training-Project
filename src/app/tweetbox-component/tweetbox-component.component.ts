import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tweetbox-component',
  templateUrl: './tweetbox-component.component.html',
  styleUrls: ['./tweetbox-component.component.css']
})
export class TweetboxComponent implements OnInit {

  @Input() maxChars = 100;
  @Output() tweetTextOutput = new EventEmitter<String>();

  remainChars: number;

  constructor() {
  }

  recalc(tweetText: String) {
    this.remainChars = this.maxChars - tweetText.length;
  }

  sendMessage(tweetText: string) {
    this.tweetTextOutput.emit(tweetText);
  }

  ngOnInit() {
    this.remainChars = this.maxChars;
    console.log(this.maxChars);
  }

}