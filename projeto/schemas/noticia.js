export default {
    name: 'noticia',
    type: 'document',
    title: 'Noticia',
    fields: [
      {
        name: 'titulo',
        type: 'string',
        title: 'Titulo',
        validation: Rule => Rule.max(100).warning('A resposta deve ter no máximo 100 caracteres')
      },
      {
        name: 'subtitulo',
        type: 'string',
        title: 'Sub título',
        validation: Rule => Rule.max(150).warning('A resposta deve ter no máximo 300 caracteres')
      },
      {
        name: 'conteudo',
        type: 'string',
        title: 'Conteúdo',
        validation: Rule => Rule.max(2000).warning('A resposta deve ter no máximo 2000 caracteres')
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