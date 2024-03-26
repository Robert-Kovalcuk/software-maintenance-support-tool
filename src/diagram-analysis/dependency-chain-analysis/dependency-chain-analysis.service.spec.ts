import { Test, TestingModule } from '@nestjs/testing';
import { DependencyChainAnalysisService } from './dependency-chain-analysis.service';

describe('DependencyChainAnalysisService', () => {
  let service: DependencyChainAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DependencyChainAnalysisService],
    }).compile();

    service = module.get<DependencyChainAnalysisService>(DependencyChainAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
