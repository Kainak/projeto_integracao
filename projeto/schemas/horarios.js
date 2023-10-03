export default {
    name: 'horarios',
    type: 'object',
    title: 'Horários',
    fields: [
      {
        name: 'turnoManha',
        type: 'object',
        title: 'Turno Manhã',
        fields: [
          {
            name: 'inicio',
            type: 'number',
            title: 'Início'
          },
          {
            name: 'fim',
            type: 'number',
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
            type: 'number',
            title: 'Início'
          },
          {
            name: 'fim',
            type: 'number',
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
        type: 'string',
        title: 'Turma'
      }
    ]
  }
  