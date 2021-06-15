import { Injectable } from '@angular/core';
import { ExpenseEntry } from './expense-entry';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class ExpenseEntryService {
      private expenseRestUrl = 'api/expense';
      private httpOptions = {
         headers: new HttpHeaders( { 'Content-Type': 'application/json' })
      };

   constructor(
      private httpClient : HttpClient) { }
}