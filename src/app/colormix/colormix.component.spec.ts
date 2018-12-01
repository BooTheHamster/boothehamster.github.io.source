import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColormixComponent } from './colormix.component';

describe('ColormixComponent', () => {
  let component: ColormixComponent;
  let fixture: ComponentFixture<ColormixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColormixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColormixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
