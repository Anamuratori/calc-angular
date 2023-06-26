import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeclaComponent } from './tecla.component';

describe('TeclaComponent', () => {
  let component: TeclaComponent;
  let fixture: ComponentFixture<TeclaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeclaComponent]
    });
    fixture = TestBed.createComponent(TeclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
