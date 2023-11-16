export default {
  name: 'horarios_pre_clube',
  type: 'document',
  title: 'Horarios Pre Clube',
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
      ],
      validation: Rule => Rule.max(2).error('Não pode ter mais de 2 dias.')
    },
    {
      name: 'turma',
      type: 'array',
      title: 'Turma',
      of: [
        {
          type: 'string'
        }
      ],
      validation: Rule => Rule.max(2).error('Não pode ter mais de 2 turmas.')
    },
  ]
}

  