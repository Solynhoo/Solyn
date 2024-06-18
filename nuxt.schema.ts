export default defineNuxtSchema({
  appConfig: {
    /**
     * Alpine theme configuration.
     *
     * @studioIcon carbon:blog
    */
    alpine: {
      /**
       * Website title, used as header default title and meta title.
       *
       * @studioIcon material-symbols:title
       */
      title: '🌱 Solyn',
      /**
       * Website description, used for meta description.
       *
       * @studioIcon material-symbols:description
       */
      description: '🌱 O meu site pessoal',
      /**
       * Cover image.
       *
       * @example '/cover.jpg'
       *
       * @studioIcon dashicons:cover-image
       */
      image: {
        /**
         * @example '/cover.jpg'
         * @studioIcon dashicons:cover-image
         * @studioInput file
         */
        src: '/assets/og.png',
        width: 400,
        height: 300
      },
      /**
       * Header configuration.
       *
       * @studioIcon fluent:document-header-24-regular
       */
      header: {
        /**
         * Header position.
         *
         * @type {'left'|'center'|'right'}
         */
        position: 'right',
        /**
         * Header logo.
         *
         * @studioIcon dashicons:cover-image
         */
        logo: {
          /**
           * Path of the logo.
           *
           * @studioIcon dashicons:cover-image
           * @studioInput file
           */
          path: '/assets/logo.webp',
          /**
           * Path of the logo in dark mode.
           *
           * Leave it empty if you want to use the same logo.
           *
           * @studioIcon dashicons:cover-image
           * @studioInput file
           */
          pathDark: '/assets/logo-dark.webp',
          /**
           * Alt description for the image.
           */
        }
      },
      /**
       * Footer configuration.
       *
       * @studioIcon fluent:document-footer-24-regular
       */
      footer: {
        /**
         * Footer credits.
         */
        credits: {
          /**
           * Toggle the footer.
           */
          enabled: true,
          /**
           * Text to be displayed.
           */
          text: 'Solyn',
          /**
           * GitHub repository link.
           */
          repository: 'https://www.github.com/solynhoo/solyn'
        },
        /**
         * Toggle the navigation.
         */
        navigation: true, // possible value are : true | false
        /**
         * Footer position.
         *
         * @type {'left'|'center'|'right'}
         */
        alignment: 'center',
        /**
         * Footer message.
         *
         * Leave it empty to disable.
         */
        message: "Despite Everything, It's Still You!"
      },
      /**
       * Icons to be added to Social Icons in footer.
       *
       * @studioIcon material-symbols:add-link
       */
      socials: {
        /**
         * Twitter handle
         * @example 'nuxt_js'
         * @studioIcon simple-icons:twitter
         */
        twitter: 'solynhoo',
        /**
         * Instagram handle
         * @example 'wearenuxt'
         * @studioIcon simple-icons:instagram
         */
        instagram: 'solynhoo',
        /**
         * GitHub path
         * @example 'nuxt-themes/alpine'
         * @studioIcon simple-icons:github
         */
        github: 'solynhoo',
        /**
         * GitHub path
         * @example 'nuxt'
         * @studioIcon simple-icons:facebook
         */
        facebook: 'solynhoo',
        /**
         * Medium handle
         * @example 'nuxt'
         * @studioIcon simple-icons:medium
         */
        medium: '',
        /**
         * Youtube handle
         * @example '@nuxtlabs'
         * @studioIcon simple-icons:youtube
         */
        youtube: 'solynhoo'
      },
      /**
       * Contact form configuration.
       *
       * @studioIcon ion:ios-paperplane
       */
      form: {
        /**
         * Success message.
         */
        successMessage: '✉️ Mensagem enviada. Obrigado!'
      },
      /**
       * Back to top button configuration.
       *
       * @studioIcon material-symbols:arrow-upward
       */
      backToTop: {
        icon: 'material-symbols:arrow-upward',
        text: 'Voltar ao topo',
      }
    }
  }
})
