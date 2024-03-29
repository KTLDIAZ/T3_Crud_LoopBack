import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Colegio',
  connector: 'mssql',
  url: 'mssql://ktldiaz:zpike6729@ASUS/Colegio',
  host: 'ASUS',
  port: 1433,
  user: 'ktldiaz',
  password: 'zpike6729',
  database: 'Colegio',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ColegioDataSource
  extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Colegio';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Colegio', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
