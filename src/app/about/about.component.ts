import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectronService } from '../core/services/electron/electron.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    params: any = [];

    constructor(
        private router: Router,
        private location: Location,
        private route: ActivatedRoute,
        private electronService: ElectronService,
    ) { }

    ngOnInit(): void {
        const param: any = this.route.snapshot.paramMap.get('id');
        console.log(param);
        this.getParams();
    }

    getParams(): void {
        // this.electronService
        // this.heroService.getHeroes()
        //     .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoHome(): void {
        console.log('gotoHome()');
        this.router.navigate(['/home']);
    }

    goBack(): void {
        this.location.back();
    }
}
