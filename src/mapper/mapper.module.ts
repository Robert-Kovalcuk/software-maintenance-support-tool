import { Module } from '@nestjs/common';
import { InterfaceMapperService } from './interface-mapper/interface-mapper.service';
import { ErdMapperService } from './erd-mapper/erd-mapper.service';
import { ComponentMapperService } from './component-mapper/component-mapper.service';
import {ClassMapperService} from "./class-mapper/class-mapper.service"

@Module({
  providers: [InterfaceMapperService, ErdMapperService, ComponentMapperService, ClassMapperService],
  imports: [],
})
export class MapperModule {}
