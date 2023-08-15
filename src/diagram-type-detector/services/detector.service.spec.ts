import { Test, TestingModule } from '@nestjs/testing';
import XmlDetectorService from './Xml-detector-service';

describe('DetectorService', () => {
  let service: XmlDetectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XmlDetectorService],
    }).compile();

    service = module.get<XmlDetectorService>(XmlDetectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
