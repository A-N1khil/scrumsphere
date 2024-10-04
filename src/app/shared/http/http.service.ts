import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataHolder, RequestStatus } from "../models/dataholder.model";
import { catchError, iif, map, mergeMap, Observable, of, tap } from "rxjs";
import { environment } from "../../../../../my-github-api/ui/src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private readonly headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    constructor(private http: HttpClient) {
    }

    private extractDataFromSpringServer(data: any): DataHolder {
        return new DataHolder(data.data, data.status, data.message);
    }

    sendGetRequest(url: string, params: any = null, headers: HttpHeaders = this.headers, toServer: boolean = false)
        : Observable<DataHolder> {
        return this.http.get<DataHolder>(`${toServer ? environment.apiUrl : ''}${url}`, {params, headers})
            .pipe(
                mergeMap((data: any) => iif(
                    () => toServer,
                    of(this.extractDataFromSpringServer(data)),
                    of(data).pipe(
                        tap((data: any) => console.log('whoops', data.data)),
                        map((data: any) => new DataHolder(data, RequestStatus.SUCCESS, null)
                        )
                    ))),
                catchError((error: any) => of(new DataHolder(null, RequestStatus.ERROR, error)))
            );
    }

}
