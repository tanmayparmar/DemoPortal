import { TestBed, inject } from '@angular/core/testing';

import { ApiAccountRegisterService } from './api-account-register.service';

describe('ApiAccountRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiAccountRegisterService]
    });
  });

  it('should be created', inject([ApiAccountRegisterService], (service: ApiAccountRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
