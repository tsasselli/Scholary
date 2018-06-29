import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upvote-button',
  templateUrl: './upvote-button.component.html',
  styleUrls: ['./upvote-button.component.scss']
})
export class UpvoteButtonComponent implements OnInit {

  voteCount: number = 0;
  userVote: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
