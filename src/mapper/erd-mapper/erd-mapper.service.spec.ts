import { Test, TestingModule } from '@nestjs/testing';
import { ErdMapperService } from './erd-mapper.service';

describe('ErdMapperService', () => {
  let service: ErdMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErdMapperService],
    }).compile();

    service = module.get<ErdMapperService>(ErdMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
