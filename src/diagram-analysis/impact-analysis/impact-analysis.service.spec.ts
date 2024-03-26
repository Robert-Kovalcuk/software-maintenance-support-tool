import { Test, TestingModule } from '@nestjs/testing';
import { ImpactAnalysisService } from './impact-analysis.service';

describe('ImpactAnalysisService', () => {
  let service: ImpactAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImpactAnalysisService],
    }).compile();

    service = module.get<ImpactAnalysisService>(ImpactAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
