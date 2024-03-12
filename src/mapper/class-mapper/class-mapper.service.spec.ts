import { Test, TestingModule } from '@nestjs/testing';
import { ClassMapperService } from './class-mapper.service';

describe('ClassMapperService', () => {
  let service: ClassMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassMapperService],
    }).compile();

    service = module.get<ClassMapperService>(ClassMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
