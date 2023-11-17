export default {
    name: 'clube',
    type: 'document',
    title: 'Clube',
    fields: [
      {
        name: 'descricao',
        type: 'string',
        title: 'Descrição',
        validation: Rule => Rule.max(300).warning('A resposta deve ter no máximo 300 caracteres')
      },
      {
        name: 'imagem',
        type: 'image',
        title: 'Imagem'
      },
      {
        name: 'faixaDeIdade',
        type: 'object',
        title: 'Faixa de Idade',
        fields: [
          {
            name: 'inicio',
            type: 'number',
            title: 'Início',
            validation: Rule => Rule.max(10).warning('A resposta deve ter no máximo 10 caracteres')
          },
          {
            name: 'fim',
            type: 'number',
            title: 'Fim',
            validation: Rule => Rule.max(10).warning('A resposta deve ter no máximo 10 caracteres')
          }
        ]
      }
    ]
  }
  