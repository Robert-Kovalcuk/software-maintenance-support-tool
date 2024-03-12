import { Test, TestingModule } from '@nestjs/testing';
import { ComponentMapperService } from './component-mapper.service';

describe('ComponentMapperService', () => {
  let service: ComponentMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentMapperService],
    }).compile();

    service = module.get<ComponentMapperService>(ComponentMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
