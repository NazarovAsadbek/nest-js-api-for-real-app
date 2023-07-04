import ormconfig from '@app/ormconfig';

const ormseedconfig = {
  ...ormconfig,
  migrations: [__dirname + '/seeds/**/*{.ts,.js}'],
  cli: {
    migrations: 'src/seeds',
  },
};

export default ormseedconfig;
