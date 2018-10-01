import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
  animations: []
})
export class PostListItemComponent implements OnInit {

  @Input() post;
  @Input() i;

  constructor(private postService: PostService) { }

  ngOnInit() {}

  onAddLoveIt() {
    this.post.loveIts++;
    this.postService.savePosts();
  }

  onRemoveLoveIt() {
    this.post.loveIts--;
    this.postService.savePosts();
  }

  getLoveIts() {
    if (this.post.loveIts > 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    } else {
      return 'inherit';
    }
  }

  onDeletePost(i: number) {
        this.postService.removePost(i);
      }
}
