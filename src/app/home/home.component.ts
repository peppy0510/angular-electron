import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectronService } from '../core/services/electron/electron.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { HomeRoutingModule } from './home-routing.module'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private router: Router,
        private location: Location,
        private route: ActivatedRoute,
        private httpClient: HttpClient,
        private electronService: ElectronService,
        // private httpHeaders: HttpHeaders
        // private router: HomeRoutingModule,
    ) { }

    ngOnInit(): void { }

    gotoAbout(): void {
        console.log('gotoAbout()');
        this.router.navigate(['/about', 0]);
    }

    fetchData(): void {
        // let url = 'https://muteklab.com';
        let url = 'https://dev.pockestra.com:8000/app/';
        let data = {};
        // let response = this.httpClient.request('GET', url).pipe(
        //     tap((x) => { console.log(x); }),
        //     // catchError(this.handleError<Hero>(`getHero id=${id}`))
        //     // catchError(this.handleError<Hero>(`getHero id=${id}`))
        // );

        console.log(this.electronService);

        let response = this.httpClient.post(url, data).subscribe(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.error(error);
            }
        );
        // let response = this.httpClient.request('GET', url).pipe(response => response
        // ).subscribe(
        //     (response) => {
        //         console.log(response);
        //     },
        //     (error) => {
        //         console.error(error);
        //     }
        // );
        // console.log(response);
        // this.http.get(url).pipe(
        //     catchError(this.handleError<Hero[]>('getHeroes', []))
        // );
        // this.http.get<Hero[]>(url).pipe(
        //     catchError(this.handleError<Hero[]>('getHeroes', []))
        // );
        // this.http.get<Hero[]>(url).pipe(
        //     catchError(this.handleError<Hero[]>('getHeroes', []))
        // );
    }
}
