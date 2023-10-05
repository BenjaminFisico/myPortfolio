import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentConteinerComponent } from './content-conteiner.component';

describe('ContentConteinerComponent', () => {
  let component: ContentConteinerComponent;
  let fixture: ComponentFixture<ContentConteinerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentConteinerComponent]
    });
    fixture = TestBed.createComponent(ContentConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
