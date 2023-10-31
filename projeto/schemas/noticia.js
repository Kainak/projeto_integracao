export default {
    name: 'noticia',
    type: 'document',
    title: 'Noticia',
    fields: [
      {
        name: 'titulo',
        type: 'string',
        title: 'Titulo'
      },
      {
        name: 'subtitulo',
        type: 'string',
        title: 'Sub título'
      },
      {
        name: 'conteudo',
        type: 'string',
        title: 'Conteúdo'
      },
      {
        name: 'imagem',
        type: 'image',
        title: 'Imagem'
      },
      {
        name: 'imagemresponsiva',
        type: 'image',
        title: 'Imagemresponsiva'
      },
      {
        name: 'data',
        type: 'date',
        title: 'Data'
      }
    ]
}