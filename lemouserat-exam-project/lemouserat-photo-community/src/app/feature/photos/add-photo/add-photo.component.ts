import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotoService } from 'src/app/core/photo.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  constructor(private router: Router, private photoService: PhotoService) { }

  ngOnInit(): void {
  }

  submitNewPhoto(newPhotoForm: NgForm): void {
    this.photoService.addPhoto$(newPhotoForm.value).subscribe({
      next: (photo) => {

        this.router.navigate(['/gallery']);
      },
      error: (error) => {
        console.error(error);
      }
    })

  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }



}
