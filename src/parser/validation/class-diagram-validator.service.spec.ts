import { Test, TestingModule } from '@nestjs/testing';
import { ClassDiagramValidatorService } from './class-diagram-validator.service';

describe('ClassDiagramValidatorService', () => {
  let service: ClassDiagramValidatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassDiagramValidatorService],
    }).compile();

    service = module.get<ClassDiagramValidatorService>(ClassDiagramValidatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
