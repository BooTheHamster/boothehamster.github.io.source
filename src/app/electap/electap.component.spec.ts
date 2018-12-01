import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectapComponent } from './electap.component';

describe('ElectapComponent', () => {
  let component: ElectapComponent;
  let fixture: ComponentFixture<ElectapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
