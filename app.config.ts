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
function defineAppConfig(arg0: { alpine: { title: string; description: string; image: { src: string; width: number; height: number; }; header: { position: string; logo: { path: string; pathDark: string; alt: string; }; }; footer: { credits: { enabled: boolean; text: string; repository: string; }; navigation: boolean; alignment: string; message: string; }; socials: { twitter: string; instagram: string; github: string; facebook: string; medium: string; youtube: string; }; form: { successMessage: string; }; backToTop: { text: string; icon: string; }; }; }) {
  throw new Error("Function not implemented.");
}

