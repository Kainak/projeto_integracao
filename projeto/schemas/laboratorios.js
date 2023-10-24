export default{
    name: 'laboratorios',
    type: 'document',
    title: 'Laboratórios',
    fields: [
      {
        name:'ordem',
        type:'number',
        title: 'Ordem'
      },
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
  