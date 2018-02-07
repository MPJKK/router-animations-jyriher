import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {

  constructor(private mediaService: MediaService) {
  }

  logged: boolean;

  ngOnInit() {

    if (localStorage.getItem('token') !== null) {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

}
