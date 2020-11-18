import {DefaultCrudRepository} from '@loopback/repository';
import {DatosEstudiantes, DatosEstudiantesRelations} from '../models';
import {ColegioDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DatosEstudiantesRepository extends DefaultCrudRepository<
  DatosEstudiantes,
  typeof DatosEstudiantes.prototype.idEstudiante,
  DatosEstudiantesRelations
> {
  constructor(
    @inject('datasources.Colegio') dataSource: ColegioDataSource,
  ) {
    super(DatosEstudiantes, dataSource);
  }
}
