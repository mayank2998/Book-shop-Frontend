import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingBodyComponent } from './shopping-body.component';

describe('ShoppingBodyComponent', () => {
  let component: ShoppingBodyComponent;
  let fixture: ComponentFixture<ShoppingBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
