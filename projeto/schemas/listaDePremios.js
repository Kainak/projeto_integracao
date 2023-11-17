export default {
    name: 'listaDePremios',
    type: 'document',
    title: 'Lista de Premios',
    fields: [
      {
        name:'ordem',
        type:'number',
        title: 'Ordem'
      },
      {
        name: 'imagem',
        type: 'image',
        title: 'Imagem'
      },
      {
        name: 'descricao',
        type: 'string',
        title: 'Descrição'
      }
    ]
  }
  