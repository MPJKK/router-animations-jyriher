import {Component, OnInit} from '@angular/core';
import {Media} from '../models/media';
import {HttpErrorResponse} from '@angular/common/http';
import {MediaService} from '../services/media.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  file = new Media('');
  formData = new FormData();

  constructor(private mediaService: MediaService, private router: Router) {
  }

  setFile(evt) {
    console.log(evt.target.files[0]);
    const file = evt.target.files[0];
    // lisää tiedosto formData objektiin
    this.formData.append('file', file);
    console.log(this.formData);

  }

  uploadFile() {

    // lisää tekstikenttien sisältö formdata-objektiin
    this.formData.append('title', this.file.title);
    this.formData.append('description', this.file.description);
    // lähetä tiedot
    this.mediaService.uploadMedia(localStorage.getItem('token'), this.formData).
        subscribe(response => {
          console.log(response);
          // siirry front sivulle
          setTimeout(() => {
            this.router.navigate(['front']);
          }, 1000);
          // this.router.navigate(['front']);
        }, (error: HttpErrorResponse) => {
          console.log(error);
        });
  }

  ngOnInit() {
  }

}
