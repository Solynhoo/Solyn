export default defineAppConfig({
  alpine: {
    title: '🌱 Solyn',
    description: '🌱 O meu site pessoal',
    image: {
      src: '/assets/og.png',
      width: 400,
      height: 300
    },
    header: {
      position: 'right',
      logo: {
        path: '/assets/logo.webp',
        pathDark: '/assets/logo-dark.webp',
        alt: 'Solyn'
      }
    },
    footer: {
      credits: {
        enabled: true,
        text: 'Solyn',
        repository: 'https://www.github.com/solynhoo/solyn'
      },
      navigation: true,
      alignment: 'center',
      message: "Despite Everything, It's Still You!"
    },
    socials: {
      twitter: 'Solynhoo',
      instagram: 'Solynhoo',
      github: 'Solynhoo',
      facebook: '',
      medium: '',
      youtube: 'Solynhoo'
    },
    form: {
      successMessage: '✉️ Mensagem enviada. Obrigado!'
    },
    backToTop: {
      text: 'Voltar ao topo!',
      icon: 'material-symbols:arrow-upward'
    }
  }
})
