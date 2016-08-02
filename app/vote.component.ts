import { Component, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: 'vote',
    template: `<div class="voteContainer">
                 <i class="glyphicon glyphicon-menu-up" (click)="voteUp()" [class.selected]="myVote === 1"></i>
                 <span>{{voteCount}}</span>
                 <i class="glyphicon glyphicon-menu-down" (click)="voteDown()" [class.selected]="myVote === -1"></i>
               </div>
    `,
    styles: [`
      .voteContainer {
        width: 20px;
      }

      .glyphicon {
        cursor: pointer;
      }

      .selected {
        color: orange;
      }
    
    `]
})

export class VoteComponent {
  // We should always initialize our properties here in case the user for 
  @Input() voteCount = 0;
  @Input() myVote = 0;
  @Output() vote = new EventEmitter();

  voteUp() {
    if(this.myVote != 1){
      this.voteCount++;
    }
    this.myVote = this.myVote < 1 ? this.myVote + 1 : this.myVote;
    this.vote.emit({
      value: this.myVote
    })
  }

  voteDown() {
    if(this.myVote != -1){
      this.voteCount--;
    }
    this.myVote = this.myVote > -1 ? this.myVote - 1 : this.myVote;
    this.vote.emit({
      value: this.myVote
    })
  }


}