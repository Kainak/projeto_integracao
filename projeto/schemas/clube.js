export default {
    name: 'clube',
    type: 'document',
    title: 'Clube',
    fields: [
      {
        name: 'descricao',
        type: 'string',
        title: 'Descrição'
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
            title: 'Início'
          },
          {
            name: 'fim',
            type: 'number',
            title: 'Fim'
          }
        ]
      }
    ]
  }
  