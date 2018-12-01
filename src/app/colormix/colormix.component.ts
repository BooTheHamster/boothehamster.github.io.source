import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colormix',
  templateUrl: './colormix.component.html',
  styleUrls: ['./colormix.component.less']
})
export class ColormixComponent implements OnInit {
  private readonly router: Router;

  public projectIdentificator: string;

  constructor(router: Router) {
      this.router = router;
  }

  ngOnInit() {
      const urlParts = this.router.url.split('/');
      this.projectIdentificator = urlParts[1];
  }
}
