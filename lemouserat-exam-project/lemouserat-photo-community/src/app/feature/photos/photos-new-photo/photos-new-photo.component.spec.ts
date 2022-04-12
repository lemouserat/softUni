import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosNewPhotoComponent } from './photos-new-photo.component';

describe('PhotosNewPhotoComponent', () => {
  let component: PhotosNewPhotoComponent;
  let fixture: ComponentFixture<PhotosNewPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosNewPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosNewPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
