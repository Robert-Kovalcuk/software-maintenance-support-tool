import { Test, TestingModule } from '@nestjs/testing';
import { InterfaceMapperService } from './interface-mapper.service';

describe('InterfaceMapperService', () => {
  let service: InterfaceMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterfaceMapperService],
    }).compile();

    service = module.get<InterfaceMapperService>(InterfaceMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
