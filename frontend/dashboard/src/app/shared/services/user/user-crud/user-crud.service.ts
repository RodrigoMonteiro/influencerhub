import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root',
})
export class UserCrudService {
  private readonly baseAPIUsers = 'http://localhost:3006/users';
  constructor(private httpClient: HttpClient) {}

  handleDeleteUser(id: number): Observable<any> {
    const url = `${this.baseAPIUsers}/${id}`;
    return this.httpClient.delete(url);
  }

  handleCreateUser(newUser: User): Observable<any> {
    return this.httpClient.post<User>(this.baseAPIUsers, newUser);
  }

  handleUpdateUser(user: User): Observable<any> {
    const url = `${this.baseAPIUsers}/${user.id}`;
    return this.httpClient.put<User>(url, user);
  }
  handleGetAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseAPIUsers);
  }

  handlegetUserById(id: number): Observable<User> {
    const url = `${this.baseAPIUsers}/${id}`;
    return this.httpClient.get<User>(url);
  }
}


