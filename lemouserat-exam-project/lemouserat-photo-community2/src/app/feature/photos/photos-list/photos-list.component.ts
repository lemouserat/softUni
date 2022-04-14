import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, startWith, switchMap, tap } from 'rxjs/operators';
import { IPhoto } from 'src/app/core/interfaces/photo';
import { PhotoService } from 'src/app/core/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photoList: IPhoto[]

  searchControl = new FormControl('')

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      filter(searchTerm => searchTerm.length > 3),
      startWith(''),
      tap(searchTerm => (console.log('searchTerm', searchTerm))),
      switchMap(searchTerm => this.photoService.loadPhotoList(searchTerm))
    ) .subscribe(photoList => {
      this.photoList = photoList
    })
  }

}
