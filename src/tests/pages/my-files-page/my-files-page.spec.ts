import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MyFilesPageComponent } from 'src/app/pages/my-files-page/my-files-page.component';
import { DocumentService } from '../../../app/services';
import { DocumentResponse } from '../../../app/types';
import { documentResponseMock } from '../../mocks';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
    selector: 'app-file-item',
    template: '<div>test-document-element</div>'
  })
  class FileItemComponentMock {
    @Input() document: any;
  }

describe('MyFilesPageComponent', () => {
    let component: MyFilesPageComponent;
    let fixture: ComponentFixture<MyFilesPageComponent>;
    let documentServiceSpy: jasmine.SpyObj<DocumentService>;
  
    beforeEach(async () => {
      documentServiceSpy = jasmine.createSpyObj('DocumentService', ['getOwnerDocuments']);
  
      await TestBed.configureTestingModule({
        declarations: [MyFilesPageComponent, FileItemComponentMock],
        providers: [DocumentService, { provide: DocumentService, useValue: documentServiceSpy }],
      }).compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(MyFilesPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should fetch owner documents on initialization', async () => {
      const mockDocuments: DocumentResponse[] = [
        documentResponseMock
      ] as DocumentResponse[];

      documentServiceSpy.getOwnerDocuments.and.resolveTo(of(mockDocuments));
  
      await component.ngOnInit();

      fixture.detectChanges();
      const htmDocumentsElement = fixture.debugElement.queryAll(By.css('.docElement'));
  
      expect(component.isLoading).toBe(false);
      expect(component.documents).toEqual(mockDocuments);
      expect(htmDocumentsElement.length).toBe(mockDocuments.length);
    });
  });