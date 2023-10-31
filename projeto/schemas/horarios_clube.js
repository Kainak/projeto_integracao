export default {
    name: 'horarios_clube',
    type: 'document',
    title: 'Horários Clube',
    fields: [
      {
        name: 'turnoManha',
        type: 'object',
        title: 'Turno Manhã',
        fields: [
          {
            name: 'inicio',
            type: 'string',
            title: 'Início'
          },
          {
            name: 'fim',
            type: 'string',
            title: 'Fim'
          }
        ]
      },
      {
        name: 'turnoTarde',
        type: 'object',
        title: 'Turno Tarde',
        fields: [
          {
            name: 'inicio',
            type: 'string',
            title: 'Início'
          },
          {
            name: 'fim',
            type: 'string',
            title: 'Fim'
          }
        ]
      },
      {
        name: 'diasDaSemana',
        type: 'array',
        title: 'Dias da Semana',
        of: [
          {
            type: 'string'
          }
        ]
      },
      {
        name: 'turma',
        type: 'array',
        title: 'Turma',
        of: [
          {
            type: 'string'
          }
        ]
      },
    ]
  }
  