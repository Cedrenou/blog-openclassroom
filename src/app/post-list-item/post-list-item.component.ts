import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  postDate: Date;
  loveIts: number;

  constructor() {
    this.postDate = new Date();
    this.loveIts = 0;
  }

  ngOnInit() {
  }

  onLove() {
    this.loveIts ++;
  }

  onDontLove() {
    this.loveIts --;
  }

}
