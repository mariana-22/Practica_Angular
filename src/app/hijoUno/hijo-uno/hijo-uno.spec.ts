import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoUno } from './hijo-uno';

describe('HijoUno', () => {
  let component: HijoUno;
  let fixture: ComponentFixture<HijoUno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoUno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoUno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
