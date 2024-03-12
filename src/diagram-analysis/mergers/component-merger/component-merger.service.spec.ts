import { Test, TestingModule } from '@nestjs/testing';
import { ComponentMergerService } from './component-merger.service';

describe('ComponentMergerService', () => {
  let service: ComponentMergerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentMergerService],
    }).compile();

    service = module.get<ComponentMergerService>(ComponentMergerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
