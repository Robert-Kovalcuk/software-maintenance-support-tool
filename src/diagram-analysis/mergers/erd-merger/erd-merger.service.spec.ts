import { Test, TestingModule } from '@nestjs/testing';
import { ErdMergerService } from './erd-merger.service';

describe('ErdMergerService', () => {
  let service: ErdMergerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErdMergerService],
    }).compile();

    service = module.get<ErdMergerService>(ErdMergerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
