import { Test, TestingModule } from '@nestjs/testing';
import { XmlControllerService } from './xml-controller.service';

describe('XmlControllerService', () => {
  let service: XmlControllerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XmlControllerService],
    }).compile();

    service = module.get<XmlControllerService>(XmlControllerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
