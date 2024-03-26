import { Test, TestingModule } from '@nestjs/testing';
import { CyclicAnalysisService } from './cyclic-analysis.service';

describe('CyclicAnalysisService', () => {
  let service: CyclicAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CyclicAnalysisService],
    }).compile();

    service = module.get<CyclicAnalysisService>(CyclicAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
