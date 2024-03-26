import { Test, TestingModule } from '@nestjs/testing';
import { OrphanAnalysisService } from './orphan-analysis.service';

describe('OrphanAnalysisService', () => {
  let service: OrphanAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrphanAnalysisService],
    }).compile();

    service = module.get<OrphanAnalysisService>(OrphanAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
