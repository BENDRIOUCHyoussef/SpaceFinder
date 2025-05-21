import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCardMediumComponent } from './space-card-medium.component';

describe('SpaceCardMediumComponent', () => {
  let component: SpaceCardMediumComponent;
  let fixture: ComponentFixture<SpaceCardMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceCardMediumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceCardMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
