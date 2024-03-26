import { Test, TestingModule } from '@nestjs/testing';
import { DependencyAnalysisService } from './dependency-analysis.service';

describe('DependencyAnalysisService', () => {
  let service: DependencyAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DependencyAnalysisService],
    }).compile();

    service = module.get<DependencyAnalysisService>(DependencyAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
