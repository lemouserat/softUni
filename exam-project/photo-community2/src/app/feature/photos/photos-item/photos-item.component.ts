import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IPhoto } from 'src/app/core/interfaces/photo';

@Component({
  selector: 'app-photos-item',
  templateUrl: './photos-item.component.html',
  styleUrls: ['./photos-item.component.css']
})
export class PhotosItemComponent implements OnChanges {

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  canSubscribe: boolean = false;

  @Input() photo: IPhoto

  constructor(private authService: AuthService) { }

  ngOnChanges(): void {
    this.canSubscribe = !this.photo.subscribers.includes('5fa64b162183ce1728ff371d');
  }

}
