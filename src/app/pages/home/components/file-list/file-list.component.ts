// src/app/pages/home/components/file-list/file-list.component.ts
import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

interface File {
  id: string;
  nomeArquivo: string;
  nomeUsuario: string;
}

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  files: File[] = [];

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.fetchFiles();
  }

  fetchFiles(): void {
    this.fileService.getAllFiles().subscribe(
      (data) => {
        this.files = data;
      },
      (error) => {
        console.error('Erro ao buscar arquivos:', error);
      }
    );
  }

  download(id: string, filename: string): void {
    this.fileService.downloadFile(id).subscribe(
      (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Erro ao baixar o arquivo:', error);
      }
    );
  }
}