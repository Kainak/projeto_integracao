export default {
    
    name: 'equipe',
    type: 'document',
    title: 'Equipe',
    fields: [
      {
        name: 'nome',
        type: 'string',
        title: 'Nome',
        validation: Rule => Rule.max(50).warning('A resposta deve ter no máximo 45 caracteres')

      },
      {
        name: 'cargo',
        type: 'string',
        title: 'Cargo',
        validation: Rule => Rule.max(45).warning('A resposta deve ter no máximo 40 caracteres')

      },
      {
        name: 'imagem',
        type: 'image',
        title: 'Imagem'

      }
    ]
  }
  