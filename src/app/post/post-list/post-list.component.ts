import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']

})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  waitForPosts = false;
  postsSubscription: Subscription;

  constructor(private postService: PostService,
              private router: Router) {}

  ngOnInit() {
    this.postsSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();

    /* TimeOut de 2s pour résoudre des problèmes
     d'affichage le temps que les données soit récupérées
     lors de la 1ère connexion à l'application
     */

    setTimeout(
      () => {
        this.waitForPosts = true;
      }, 2000
    );
    this.getEmpty();
  }

  getEmpty() {
    if (this.postService.checkIfEmpty()) {
      return true;
    }
  }

  onNewPost() {
    this.router.navigate(['/newPost']);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
