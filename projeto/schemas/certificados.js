export default {
    name: 'certificados',
    type: 'document',
    title: 'Certificados',
    fields: [
      {
        name: 'descricao',
        type: 'string',
        title: 'Descrição',
        validation: Rule => Rule.max(100).warning('A resposta deve ter no máximo 100 caracteres')
      }
    ]
  } 
  