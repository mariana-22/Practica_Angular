import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoDos } from './hijo-dos';

describe('HijoDos', () => {
  let component: HijoDos;
  let fixture: ComponentFixture<HijoDos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoDos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoDos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
