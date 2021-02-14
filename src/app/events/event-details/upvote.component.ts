import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
  <div class='votingWidgetContainer pointable' (click)="onClick()">
    <div class="well votingWidget">
      <div class="votingButton">
        <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
        <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
      </div>
      <div class="badge badge-inverse votingCount">
        <div>{{count}}</div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input() voted: boolean;
  @Input() count: number;
  @Output() vote = new EventEmitter();

  onClick() {
    this.vote.emit({});
  }
}
