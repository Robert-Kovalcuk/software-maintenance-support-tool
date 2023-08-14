import { Test, TestingModule } from '@nestjs/testing';
import XMLDetectorService from './XMLDetectorService';

describe('DetectorService', () => {
  let service: XMLDetectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XMLDetectorService],
    }).compile();

    service = module.get<XMLDetectorService>(XMLDetectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
