import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  // constructor(private http:HttpClient) { }
  http = inject(HttpClient);


  submitForm(fromdata:any):Observable<any>{
    return this.http.post<any>(`http://172.16.1.60:8080/save/employee`,fromdata)
  }
}