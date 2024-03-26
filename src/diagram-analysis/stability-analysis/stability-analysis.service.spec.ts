import { Test, TestingModule } from '@nestjs/testing';
import { StabilityAnalysisService } from './stability-analysis.service';

describe('StabilityAnalysisService', () => {
  let service: StabilityAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StabilityAnalysisService],
    }).compile();

    service = module.get<StabilityAnalysisService>(StabilityAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
