import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../../model/account';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly baseAPIAccounts = 'http://localhost:3006/accounts';
  constructor(private httpClient: HttpClient) {}

  handleAuthenticateUser(email: string): Observable<Account[]> {
    return this.httpClient.get<any[]>(`${this.baseAPIAccounts}/${email}`)
  }

  handleCreateNewAccount(email: string, password: string): void {
    const accountData = { email, password };
    this.httpClient.post(this.baseAPIAccounts, accountData).subscribe({
      next: () => {
        console.log('User created!');
      },
      error: (error) => {
        console.error('Ops! Failed to create an account', error);
      },
    });
  }
}
