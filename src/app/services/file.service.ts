// src/app/services/file.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface File {
  id: string;
  nomeArquivo: string;
  nomeUsuario: string;
}

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private apiUrl = 'http://localhost:3000'; // Altere para a URL da sua API

  constructor(private http: HttpClient) {}

  getAllFiles(): Observable<File[]> {
    return this.http.get<File[]>(`${this.apiUrl}/ShowFiles`);
  }

  downloadFile(id: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${id}`, { responseType: 'blob' });
  }
}