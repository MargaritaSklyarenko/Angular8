import { TestBed, inject } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';

describe('AuthorizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizationService]
    });
  });

  it('should be created', inject([AuthorizationService], (service: AuthorizationService) => {
    expect(service).toBeTruthy();
  }));

  it('user should be logged in', inject([AuthorizationService], (service: AuthorizationService) => {
    service.login(false);
    expect(service.isLoggedIn).toBeTruthy();
  }));

  it('user should be logged in', inject([AuthorizationService], (service: AuthorizationService) => {
    service.login(true);
    expect(service.isLoggedIn).toBeTruthy();
  }));

  it('user should be logged in not as admin', inject([AuthorizationService], (service: AuthorizationService) => {
    service.login(false);
    expect(service.isAdmin).toBeFalsy();
  }));

  it('user should be logged in as admin', inject([AuthorizationService], (service: AuthorizationService) => {
    service.login(true);
    expect(service.isAdmin).toBeTruthy();
  }));

  it('user should be logged in', inject([AuthorizationService], (service: AuthorizationService) => {
    service.logout();
    expect(service.isLoggedIn).toBeFalsy();
  }));
});
