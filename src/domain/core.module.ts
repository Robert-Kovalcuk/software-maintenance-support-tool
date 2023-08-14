import Parser from './Parser'
import { Module } from '@nestjs/common'

@Module({
    exports: [Parser]
})
export class CoreModule{}