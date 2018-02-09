import { MediaService } from './../services/media.service';
import { Media } from '../classes/media';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  file: File;
  title: '';
  description: '';
  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }
  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }
  startUpload() {
    // create form-data object
    // add title and description
    // send form-data obj to API
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('title', this.title );
    formData.append('description', this.description);
    this.mediaService.uploadMedia(formData).subscribe(response => {
      console.log(response);
    });
  }
}
