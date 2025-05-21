import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplesearchbarComponent } from './simplesearchbar.component';

describe('SimplesearchbarComponent', () => {
  let component: SimplesearchbarComponent;
  let fixture: ComponentFixture<SimplesearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplesearchbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplesearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
