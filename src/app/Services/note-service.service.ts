import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private httpClient: HttpClient) {}

  onSubmit(inputData: object) {
    return this.httpClient.post('http://127.0.0.1:5000/api/v1/note/', inputData);
  }

}
