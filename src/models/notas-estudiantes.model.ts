import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mssql: {schema: 'dbo', table: 'NotasEstudiantes'},
  },
})
export class NotasEstudiantes extends Entity {
  @property({
    type: 'number',
    required: false,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {
      columnName: 'IdNotasEstudiantes',
      dataType: 'int',
      dataLength: null,
      dataPrecision: 10,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  idNotasEstudiantes?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {
      columnName: 'IdEstudiante',
      dataType: 'int',
      dataLength: null,
      dataPrecision: 10,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  idEstudiante?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {
      columnName: 'IdMateria',
      dataType: 'int',
      dataLength: null,
      dataPrecision: 10,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  idMateria?: number;

  @property({
    type: 'number',
    precision: 53,
    mssql: {
      columnName: 'Nota',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
    },
  })
  nota?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<NotasEstudiantes>) {
    super(data);
  }
}

export interface NotasEstudiantesRelations {
  // describe navigational properties here
}

export type NotasEstudiantesWithRelations = NotasEstudiantes &
  NotasEstudiantesRelations;
