import { Test, TestingModule } from '@nestjs/testing';
import { InterfaceMergerService } from './interface-merger.service';

describe('InterfaceMergerService', () => {
  let service: InterfaceMergerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterfaceMergerService],
    }).compile();

    service = module.get<InterfaceMergerService>(InterfaceMergerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
