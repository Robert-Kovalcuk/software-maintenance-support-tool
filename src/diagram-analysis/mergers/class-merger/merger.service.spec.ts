import { Test, TestingModule } from '@nestjs/testing';
import { ClassMergerService } from './class-merger.service';

describe('MergerService', () => {
  let service: ClassMergerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassMergerService],
    }).compile();

    service = module.get<ClassMergerService>(ClassMergerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
