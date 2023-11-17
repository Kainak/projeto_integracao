export default {
    name: 'duvidas',
    type: 'document',
    title: 'Duvidas',
    fields: [
      {
        name: 'pergunta',
        type: 'string',
        title: 'Pergunta',
        validation: Rule => Rule.max(100).warning('A resposta deve ter no máximo 100 caracteres')
      },
      {
        name: 'resposta',
        type: 'string',
        title: 'Resposta',
        validation: Rule => Rule.max(200).warning('A resposta deve ter no máximo 200 caracteres')
      }
    ]
  }
  