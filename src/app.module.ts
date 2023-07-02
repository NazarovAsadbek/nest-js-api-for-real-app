import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { UserModule } from '@app/user/user.module';
import ormconfig from '@app/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
