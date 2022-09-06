import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/Bookmark.module';
import { UserModule } from './user/User.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule],
})
export class AppModule {}
