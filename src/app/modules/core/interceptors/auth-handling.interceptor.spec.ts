import { TestBed } from '@angular/core/testing';

import { AuthHandlingInterceptor } from './auth-handling.interceptor';

describe('AuthHandlingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthHandlingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthHandlingInterceptor = TestBed.inject(AuthHandlingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
