import { Module } from '@nestjs/common';
import { CoreModule } from '../domain/core.module';

@Module({
    imports: [CoreModule]
})
export class XmlModule {}
