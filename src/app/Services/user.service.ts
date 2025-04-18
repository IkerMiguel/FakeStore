import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/store.interfaces';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseHttpService {
  getUsers():Observable<any>{
      return this.http.get<User[]>(`${this.apiUrl}/users`); 
  }
}
