import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistinfComponent } from './userlistinf.component';

describe('UserlistinfComponent', () => {
  let component: UserlistinfComponent;
  let fixture: ComponentFixture<UserlistinfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistinfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlistinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
