import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../services';
import { DocumentResponse } from '../../../types';

@Component({
  selector: 'app-my-files-page',
  templateUrl: './my-files-page.component.html',
  styleUrls: ['./my-files-page.component.css'],
})
export class MyFilesPageComponent implements OnInit {

  public isLoading: boolean = false;

  public documents: DocumentResponse[] | null = null;

  constructor(private readonly documentService: DocumentService) {}

  async ngOnInit(): Promise<void> {

    this.isLoading = true;

    (await this.documentService.getOwnerDocuments()).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.documents = res
      }
    })

    console.log('HELLO');
  }
}
