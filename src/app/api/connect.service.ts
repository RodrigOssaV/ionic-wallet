import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http: HttpClient) { }

  private url = environment.url;

  getAllServices(): Observable<any> {
    return this.http.get<any>(this.url + '/service/get-services').pipe(
      catchError((error: any) => {
        // Aquí puedes realizar el manejo del error
        console.error('Ocurrió un error en la API:', error);
        // Puedes relanzar el error si deseas que el componente consumidor lo maneje también
        return throwError(() => error);
      })
    );
  }

  getAllOwnChecks(): Observable<any> {
    return this.http.get<any>(this.url + '/owncheck/get-all-owncheck').pipe(
      catchError((error: any) => {
        // Aquí puedes realizar el manejo del error
        console.error('Ocurrió un error en la API:', error);
        // Puedes relanzar el error si deseas que el componente consumidor lo maneje también
        return throwError(() => error);
      })
    );
  }

  sendDataCheck(data: any): Observable<any> {
    return this.http.post<any>(this.url + '/check/add-checks', data).pipe(
      catchError((error: any) => {
        // Aquí puedes realizar el manejo del error
        console.error('Ocurrió un error en la API:', error);
        // Puedes relanzar el error si deseas que el componente consumidor lo maneje también
        return throwError(() => error);
      })
    );
  }
}
