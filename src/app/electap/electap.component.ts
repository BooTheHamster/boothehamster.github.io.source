import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-electap',
    templateUrl: './electap.component.html',
    styleUrls: ['./electap.component.less'],
})
export class ElectapComponent implements OnInit {
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
