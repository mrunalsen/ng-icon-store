import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconstoreComponent } from './iconstore.component';

describe('IconstoreComponent', () => {
  let component: IconstoreComponent;
  let fixture: ComponentFixture<IconstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconstoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
