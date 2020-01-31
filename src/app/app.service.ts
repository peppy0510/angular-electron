// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AppService {

    messages: string[] = [];
    data: any;

    constructor(
        // private http: HttpClient,
        // private httpHeaders: HttpHeaders
    ) { }

    // fetchData = () => {
    //     let url = 'https://muteklab.com';
    //     this.http.get<Hero[]>(url).pipe(
    //         catchError(this.handleError<Hero[]>('getHeroes', []))
    //     );
    //     // this.http.get<Hero[]>(url).pipe(
    //     //     catchError(this.handleError<Hero[]>('getHeroes', []))
    //     // );
    // }
}