import { Test, TestingModule } from '@nestjs/testing';
import { FanAnalysisService } from './fan-analysis.service';

describe('FanAnalysisService', () => {
  let service: FanAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FanAnalysisService],
    }).compile();

    service = module.get<FanAnalysisService>(FanAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
