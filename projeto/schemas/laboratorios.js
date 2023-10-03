export default{
    name: 'laboratorios',
    type: 'document',
    title: 'Laboratórios',
    fields: [
      {
        name: 'titulo',
        type: 'string',
        title: 'Título'
      },
      {
        name: 'descricao',
        type: 'string',
        title: 'Descrição'
      },
      {
        name: 'imagens',
        type: 'array',
        title: 'Imagens',
        of: [
          {
            type: 'image'
          }
        ]
      }
    ]
  }
  