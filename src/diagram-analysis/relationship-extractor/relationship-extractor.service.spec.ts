import { Test, TestingModule } from '@nestjs/testing';
import { RelationshipExtractorService } from './relationship-extractor.service';

describe('RelationshipExtractorService', () => {
  let service: RelationshipExtractorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelationshipExtractorService],
    }).compile();

    service = module.get<RelationshipExtractorService>(RelationshipExtractorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
