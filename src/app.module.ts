import { Module } from '@nestjs/common';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [DevicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
