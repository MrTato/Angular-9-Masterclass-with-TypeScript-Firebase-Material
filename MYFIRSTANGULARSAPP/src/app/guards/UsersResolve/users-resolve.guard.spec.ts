import { TestBed } from '@angular/core/testing';

import { UsersResolveGuard } from './users-resolve.guard';

describe('UsersResolveGuard', () => {
  let guard: UsersResolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersResolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
