import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Data } from '../Ngrx/state/state';
import { addPost } from '../Ngrx/state/action';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;
  let store: MockStore<Data>;
  const initialState = {
    data: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

  });
});
