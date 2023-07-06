import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'mediumclone',
  password: '12345!!!',
  database: 'mediumclone',
  url: 'postgres://mediumclone:12345!!!@postgres:5432/db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts, .js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
