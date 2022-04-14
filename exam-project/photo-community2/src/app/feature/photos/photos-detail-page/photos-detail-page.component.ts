import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IPost } from 'src/app/core/interfaces';
import { IPhoto } from 'src/app/core/interfaces/photo';
import { PhotoService } from 'src/app/core/photo.service';

@Component({
  selector: 'app-photos-detail-page',
  templateUrl: './photos-detail-page.component.html',
  styleUrls: ['./photos-detail-page.component.css']
})
export class PhotosDetailPageComponent implements OnInit {

  photo: IPhoto<IPost>

  canSubscribe: boolean = false
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  constructor(private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const photoId = params['photoId'];
      this.photoService.loadPhotoById(photoId).subscribe(photo => {
        this.photo = photo;
        this.canSubscribe = !this.photo.subscribers.includes('5fa64b162183ce1728ff371d')
      })
    })
  }

  canLike(comment: IPost){
    return !comment.likes.includes('5fa64b162183ce1728ff371d')
  }

}
