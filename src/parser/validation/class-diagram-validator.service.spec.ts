import { Test, TestingModule } from '@nestjs/testing';
import { DiagramValidatorService } from './diagram-validator-service';

describe('ClassDiagramValidatorService', () => {
  let service: DiagramValidatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiagramValidatorService],
    }).compile();

    service = module.get<DiagramValidatorService>(DiagramValidatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
