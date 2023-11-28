export default{
    name: 'laboratorios',
    type: 'document',
    title: 'Laboratorios',
    fields: [
      {
        name:'ordem',
        type:'number',
        title: 'Ordem'
      },
      {
        name: 'titulo',
        type: 'string',
        title: 'Título',
        validation: Rule => Rule.max(100).warning('O título só deve ter 100 caracteres')
      },
      {
        name: 'descricao',
        type: 'string',
        title: 'Descrição',
        validation: Rule => Rule.max(300).warning('A descrição pode ter até 300 caracteres')
      },
      {
        name: 'imgGrande',
        type: 'image',
        title: 'Imagem grande'
      },
      {
        name: 'imgGrandeResponsiva1',
        type: 'image',
        title: 'Imagem grande responsiva 1'
      },
      {
        name: 'imgGrandeResponsiva2',
        type: 'image',
        title: 'Imagem grande responsiva 2'
      },
      {
        name: 'imgPequena1',
        type: 'image',
        title: 'Imagem Pequena 1'
      },
      {
        name: 'imgPequena2',
        type: 'image',
        title: 'Imagem Pequena 2'
      }
    ]
  }
  