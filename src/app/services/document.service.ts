import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentResponse, UploadDocumentResponse } from '../types';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseUrl = 'http://localhost:5135/document'

  constructor(private http: HttpClient) { }
  
  public upload = async (data: FormData): Promise<Observable<UploadDocumentResponse>> => {
    return this.http.post<UploadDocumentResponse>(`${this.baseUrl}/upload`, data, { withCredentials: true });
  }

  public getOwnerDocuments = async (): Promise<Observable<DocumentResponse[]>> => {
    return this.http.get<DocumentResponse[]>(this.baseUrl, { withCredentials: true });
  }
}
