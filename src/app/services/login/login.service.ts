import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient :HttpClient) {}

    url= "http://localhost:3000/login"

    login(usuario: User): Observable<any>{
      returnthis.httpClient.post(this.url, JSON.stringify(usuario),{
       headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: "response"
      })
    }    
}
