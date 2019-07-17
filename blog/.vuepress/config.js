const moment = require('moment');

module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'cs-CZ',
      title: 'Ahoj VuePress',
      description: 'Jen si hraji...'
    },
    '/en/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Hello VuePress',
      description: 'Just playing around'
    }
  },
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: 'posts',
            // Path of the `entry page` (or `list page`)
            path: '/',
            pagination: {
              lengthPerPage: 2
            }
          }
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'tag',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['tag', 'tags'],
            // Path of the `entry page` (or `list page`)
            path: '/tag/',
            // Layout of the `entry page`
            layout: 'Tag',
          },
        ]
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require('moment');
          moment.locale('cs');
          return moment(timestamp).fromNow();
        }
      }
    ],
    [
      '@vuepress/search', {
        searchMaxSuggestions: 10
      }
    ],
    [
      '@vuepress/active-header-links'
    ],
    [
      '@vuepress/back-to-top'
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ],
    [
      '@vuepress/medium-zoom'
    ],
    [
      '@vuepress/nprogress'
    ],
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: "Právě byl na této stránce vydán nový obsah.",
            buttonText: "Načíst aktuální verzi"
          },
          '/en/': {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        }
      }
    ]
  ],
  theme: '@vuepress/blog',
    themeConfig: {
      nav: [{
          text: 'Domů',
          link: '/'
        },
        {
          text: 'Návod',
          link: '/guide/'
        },
        {
          text: 'Archív',
          link: '/archive/',
        },
        {
          text: 'Tagy',
          link: '/tag/',
        },
        {
          text: 'Externí link',
          link: 'https://google.com'
        }
      ],
      pwa: true,
      sidebar: 'auto',
      lastUpdated: 'Změněno:', // string | boolean
      repo: 'on-slm/polyamory-blog',
      repoLabel: 'Dej love more!',
      // if your docs are in a different repo from your main project:
      docsRepo: 'on-slm/polyamory',
      // if your docs are not at the root of the repo:
      docsDir: 'blog',
      // if your docs are in a specific branch (defaults to 'master'):
      docsBranch: 'master',
      // defaults to false, set to true to enable
      editLinks: false,
      // custom text for edit link. Defaults to "Edit this page"
      editLinkText: 'Help us improve this page!',
      footer: {
        contact: [{
            type: 'github',
            link: 'https://github.com/on-slm',
          },
          {
            type: 'twitter',
            link: 'https://twitter.com/onslm',
          },
        ],
      },
      summary: true,
      summaryLength: 200
    }
};
