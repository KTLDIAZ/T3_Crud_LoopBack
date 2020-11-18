import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {DatosEstudiantes} from '../models';
import {DatosEstudiantesRepository} from '../repositories';

export class EstudiantesController {
  constructor(
    @repository(DatosEstudiantesRepository)
    public datosEstudiantesRepository : DatosEstudiantesRepository,
  ) {}

  @post('/estudiantes', {
    responses: {
      '200': {
        description: 'DatosEstudiantes model instance',
        content: {'application/json': {schema: getModelSchemaRef(DatosEstudiantes)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DatosEstudiantes, {
            title: 'NewDatosEstudiantes',
            
          }),
        },
      },
    })
    datosEstudiantes: DatosEstudiantes,
  ): Promise<DatosEstudiantes> {
    return this.datosEstudiantesRepository.create(datosEstudiantes);
  }

  @get('/estudiantes/count', {
    responses: {
      '200': {
        description: 'DatosEstudiantes model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(DatosEstudiantes) where?: Where<DatosEstudiantes>,
  ): Promise<Count> {
    return this.datosEstudiantesRepository.count(where);
  }

  @get('/estudiantes', {
    responses: {
      '200': {
        description: 'Array of DatosEstudiantes model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(DatosEstudiantes, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(DatosEstudiantes) filter?: Filter<DatosEstudiantes>,
  ): Promise<DatosEstudiantes[]> {
    return this.datosEstudiantesRepository.find(filter);
  }

  @patch('/estudiantes', {
    responses: {
      '200': {
        description: 'DatosEstudiantes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DatosEstudiantes, {partial: true}),
        },
      },
    })
    datosEstudiantes: DatosEstudiantes,
    @param.where(DatosEstudiantes) where?: Where<DatosEstudiantes>,
  ): Promise<Count> {
    return this.datosEstudiantesRepository.updateAll(datosEstudiantes, where);
  }

  @get('/estudiantes/{id}', {
    responses: {
      '200': {
        description: 'DatosEstudiantes model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DatosEstudiantes, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DatosEstudiantes, {exclude: 'where'}) filter?: FilterExcludingWhere<DatosEstudiantes>
  ): Promise<DatosEstudiantes> {
    return this.datosEstudiantesRepository.findById(id, filter);
  }

  @patch('/estudiantes/{id}', {
    responses: {
      '204': {
        description: 'DatosEstudiantes PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DatosEstudiantes, {partial: true}),
        },
      },
    })
    datosEstudiantes: DatosEstudiantes,
  ): Promise<void> {
    await this.datosEstudiantesRepository.updateById(id, datosEstudiantes);
  }

  @put('/estudiantes/{id}', {
    responses: {
      '204': {
        description: 'DatosEstudiantes PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() datosEstudiantes: DatosEstudiantes,
  ): Promise<void> {
    await this.datosEstudiantesRepository.replaceById(id, datosEstudiantes);
  }

  @del('/estudiantes/{id}', {
    responses: {
      '204': {
        description: 'DatosEstudiantes DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.datosEstudiantesRepository.deleteById(id);
  }
}
