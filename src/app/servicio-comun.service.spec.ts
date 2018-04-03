import { TestBed, inject } from '@angular/core/testing';

import { ServicioComunService } from './servicio-comun.service';

describe('ServicioComunService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioComunService]
    });
  });

  it('should be created', inject([ServicioComunService], (service: ServicioComunService) => {
    expect(service).toBeTruthy();
  }));
});
