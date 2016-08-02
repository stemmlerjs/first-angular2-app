import {Component} from 'angular2/core'

@Component({
    selector: 'heart',
    template: `<i class="glyphicon" (click)="toggle()" [class.glyphicon-heart]="isHearted" [class.glyphicon-heart-empty]="!isHearted"></i>
               <span>{{totalLikes}}</span>
    `,
    styles:[`
        .glyphicon {
            font-size: 20px;
        }

        .glyphicon-heart {
            cursor:pointer;
            color: pink;
        }

        .glyphicon-heart-empty {
            cursor:pointer;
            color: #CCC;
        }
    `]
})

export class HeartComponent{
    isHearted = true;
    totalLikes = 10;
    toggle() {
        if(this.isHearted) {
            this.totalLikes--;
        } else {
            this.totalLikes++;
        }
        this.isHearted = !this.isHearted;
    }
}