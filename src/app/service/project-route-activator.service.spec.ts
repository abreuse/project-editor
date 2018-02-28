import { TestBed, inject } from '@angular/core/testing';

import { ProjectRouteActivatorService } from './project-route-activator.service';

describe('ProjectRouteActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectRouteActivatorService]
    });
  });

  it('should be created', inject([ProjectRouteActivatorService], (service: ProjectRouteActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
