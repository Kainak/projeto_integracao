export default {
    name: 'listaDePremios',
    type: 'document',
    title: 'Lista de Premios',
    fields: [
      {
        name:'ordem',
        type:'number',
        title: 'Ordem',
      },
      {
        name: 'imagem',
        type: 'image',
        title: 'Imagem'
      },
      {
        name: 'descricao',
        type: 'string',
        title: 'Descrição',
        validation: Rule => Rule.max(300).warning('A descrição deve ter no máximo 300 caracteres')
      }
    ]
  }
  