import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

  // register() {
  //   this.mediaService.register(this.username, this.password, this.email).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //     }
  //   );
  // }

}