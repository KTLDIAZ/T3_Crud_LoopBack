import {DefaultCrudRepository} from '@loopback/repository';
import {NotasEstudiantes, NotasEstudiantesRelations} from '../models';
import {ColegioDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NotasEstudiantesRepository extends DefaultCrudRepository<
  NotasEstudiantes,
  typeof NotasEstudiantes.prototype.idNotasEstudiantes,
  NotasEstudiantesRelations
> {
  constructor(
    @inject('datasources.Colegio') dataSource: ColegioDataSource,
  ) {
    super(NotasEstudiantes, dataSource);
  }
}
