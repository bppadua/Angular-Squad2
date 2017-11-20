import { TestBed, inject } from '@angular/core/testing';

import { QuestionsService } from './question.service';

describe('QuestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsService]
    });
  });

  it('should be created', inject([QuestionsService], (service: QuestionsService) => {
    expect(service).toBeTruthy();
  }));
});
