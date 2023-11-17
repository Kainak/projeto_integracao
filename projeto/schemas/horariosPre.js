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
          title: 'Início',
          validation: Rule => Rule.max(5).warning('A resposta deve ter no máximo 5 caracteres'),
        },
        {
          name: 'fim',
          type: 'string',
          title: 'Fim',
          validation: Rule => Rule.max(5).warning('A resposta deve ter no máximo 5 caracteres'),
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
          title: 'Início',
          validation: Rule => Rule.max(5).warning('A resposta deve ter no máximo 5 caracteres'),
        },
        {
          name: 'fim',
          type: 'string',
          title: 'Fim',
          validation: Rule => Rule.max(5).warning('A resposta deve ter no máximo 5 caracteres'),
        }
      ]
    },
    {
      name: 'diasDaSemana',
      type: 'array',
      title: 'Dias da Semana',
      
      of: [
        {
          type: 'string',
          validation: Rule => Rule.max(15).error('Não pode ter mais de 15 caracteres.')
        }
      ],
      validation: Rule => Rule.max(2).error('Não pode ter mais de 2 dias.'),
     
    },
    {
      name: 'turma',
      type: 'array',
      title: 'Turma',
      
      of: [
        {
          type: 'string',
          validation: Rule => Rule.max(40).error('Não pode ter mais de 35 caracteres.')
        }
      ],
      validation: Rule => Rule.max(2).error('Não pode ter mais de 2 turmas.'),
      
    },
  ]
}

  