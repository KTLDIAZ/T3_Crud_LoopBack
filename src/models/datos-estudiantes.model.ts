import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'DatosEstudiantes'}}
})
export class DatosEstudiantes extends Entity {
  @property({
    type: 'number',
    required: false,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'IdEstudiante', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  idEstudiante?: number;

  @property({
    type: 'string',
    length: 50,
    mssql: {columnName: 'Nombre', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombre?: string;

  @property({
    type: 'string',
    length: 50,
    mssql: {columnName: 'Carrera', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  carrera?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<DatosEstudiantes>) {
    super(data);
  }
}

export interface DatosEstudiantesRelations {
  // describe navigational properties here
}

export type DatosEstudiantesWithRelations = DatosEstudiantes & DatosEstudiantesRelations;
