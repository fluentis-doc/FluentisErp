// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  //themes: ['@docusaurus/theme-mermaid'],
  title: 'Fluentis ERP Documentation',
  tagline: 'La guida progettata per supportarti nell’utilizzo quotidiano di Fluentis ERP',
  url: 'https://github.com',
  baseUrl: '/FluentisErp/',

  organizationName: 'fluentis-doc', // Usually your GitHub org/user name.
  projectName: 'FluentisErp', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fluentis-32x32px.png',
  i18n: {
    defaultLocale: 'it-IT',
    locales: ['en-US', 'es-CO', 'fr-FR', 'hr-HR', 'it-IT', 'pt-PT', 'ro-RO'],  // , 'sr-Latn-CS', 'zh-CN'
    localeConfigs: {
      "en-US": {
        label: 'English',
      },
      "es-CO": {
        label: 'Español',
      },
      "fr-FR": {
        label: 'Français',
      },
      "hr-HR": {
        label: 'Hrvatski',
      },
      "it-IT": {
        label: 'Italiano',
      },
      "pt-PT": {
        label: 'Português',
      },
      "ro-RO": {
        label: 'Română',
      },
      /*"sr-Latn-CS": {
        label: 'Srpski',
      },*/
      "zh-CN": {
        label: '中文',
      },
    },
  },
  themeConfig: {
    prism: {
      additionalLanguages: ['csharp'],
    },
    navbar: {
      title: 'academy',
      logo: {
        alt: 'Logo',
        src: 'img/fluentis.svg',
        className: 'logo'
      },
      items: [
        {
          to: 'docs/release-notes/intro',
          /*activeBasePath: 'docs',*/
          label: 'Release Notes',
          position: 'right',
        },
        {
          label: 'Formazione',
          position: 'right',
          items: [
            {
              to: 'docs/knowlegde-base/intro',
              activeBasePath: 'docs',
              label: 'FAQ',
            },
            {
              to: 'docs/video/intro',
              activeBasePath: 'docs',
              label: 'Video tutorial',
            },
          ]
        },
        {
          label: 'Introduzione',
          position: 'left',
          items: [
            {
              to: 'docs/guide/fluentis-erp-structure/',
              activeBasePath: 'docs',
              label: 'Introduzione',
            },
            {
              to: 'docs/guide/fast-start',
              activeBasePath: 'docs',
              label: 'Fluentis Fast Start',
            },
            {
              to: 'docs/guide/start-application/fluentis-connection',
              activeBasePath: 'docs',
              label: 'Avviamento Fluentis ERP',
            },
            {
              to: 'docs/guide/common',
              activeBasePath: 'docs',
              label: 'Campi, funzionalità e pulsanti comuni',
            },
          ]
        },
        {
          label: 'Impostazioni',
          position: 'left',
          items: [
            {
              to: 'docs/applications/applications-intro',
              activeBasePath: 'docs',
              label: 'Strumenti',
            },
            {
              to: 'docs/object-navigator/object-navigator-intro',
              activeBasePath: 'docs',
              label: 'Object Navigator',
            },
            {
              to: 'docs/panels/context-panel',
              activeBasePath: 'docs',
              label: 'Context Panel',
            },
            {
              to: 'docs/configurations/configuration',
              activeBasePath: 'docs',
              label: 'Configurazioni (Tabelle, Parametri...)',
            },
            {
              to: 'docs/form-navigator/form-navigator-intro',
              activeBasePath: 'docs',
              label: 'Form navigator',
            },
          ]
        },
        {
          label: 'Anagrafiche',
          position: 'left',
          items: [
            {
              to: 'docs/erp-home/registers/contacts/registers-management',
              activeBasePath: 'docs',
              label: 'Contatti',
            },
            {
              to: 'docs/erp-home/registers/accounting/analytic-chart-of-accounts',
              activeBasePath: 'docs',
              label: 'Piano dei conti',
            },
            {
              to: 'docs/erp-home/registers/items/master-item-intro',
              activeBasePath: 'docs',
              label: 'Articoli',
            },
            {
              to: 'docs/erp-home/registers/production/routes/work-center',
              activeBasePath: 'docs',
              label: 'Produzione',
            },
            {
              to: 'docs/erp-home/registers/employee/training-courses/training-courses-intro',
              activeBasePath: 'docs',
              label: 'Dipendenti',
            },
          ]
        },
        {
          label: 'Aree',
          position: 'left',
          items: [
            {
              to: 'docs/finance-area/finance-intro',
              activeBasePath: 'docs',
              label: 'Amministrativa',
            },
            {
              to: 'docs/treasury/treasury-intro',
              activeBasePath: 'docs',
              label: 'Tesoreria',
            },
            {
              to: 'docs/controlling/controlling-intro',
              activeBasePath: 'docs',
              label: 'Controlling',
            },
            {
              to: 'docs/ddmrp/master-data/introduction',
              activeBasePath: 'docs',
              label: 'DDMRP',
            },
            {
              to: 'docs/crm/crm-intro',
              activeBasePath: 'docs',
              label: 'CRM',
            },
            {
              to: 'docs/purchase/purchases-intro',
              activeBasePath: 'docs',
              label: 'Acquisti',
            },
            {
              to: 'docs/sales/sales-intro',
              activeBasePath: 'docs',
              label: 'Vendite',
            },
            {
              to: 'docs/logistics/logistics-intro',
              activeBasePath: 'docs',
              label: 'Logistica',
            },
            {
              to: 'docs/planning/planning-intro',
              activeBasePath: 'docs',
              label: 'Pianificazione',
            },
            {
              to: 'docs/production/production-intro',
              activeBasePath: 'docs',
              label: 'Produzione',
            },
            {
              to: 'docs/subcontractor/subcontractor-intro',
              activeBasePath: 'docs',
              label: 'Conto Lavoro',
            },
            {
              to: 'docs/project-management/project-management-intro',
              activeBasePath: 'docs',
              label: 'Gestione progetti',
            },
            {
              to: 'docs/quality/quality-intro',
              activeBasePath: 'docs',
              label: 'Qualità',
            },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {

          title: 'Fluentis Documentation',
          items: [
            {
              label: 'Fluentis Live Update',
              href: 'https://docs.fluentis.com/FluentisLiveUpdate/',
            },
            {
              label: 'ARM',
              href: 'https://docs.fluentis.com/Arm/',
            },
          ],
        },
        {
          title: 'Integration',
          items: [
            {
              label: 'Integration',
              href: 'https://docs.fluentis.com/Integration/',
            },
          ],
        },

        {
          title: 'Fluentis Training',
          items: [
            {
              label: 'Training',
              href: 'https://training.fluentis.com/',
            },
          ],
        },
        {
          title: 'About Fluentis',
          items: [
            {
              label: ' Web Site',
              href: 'https://www.fluentis.com/it/',
              className: 'icon bi bi-arrow-up-right-circle-fill',
            },
            {
              label: ' Instagram',
              href: 'https://www.instagram.com/fluentis.erp/',
              className: 'icon bi bi-instagram',
            },
            {
              label: ' Facebook',
              href: 'https://www.facebook.com/FluentisSrl',
              className: 'icon bi bi-facebook',
            },
            {
              label: ' Youtube',
              href: 'https://www.youtube.com/@formazionefluentis',
              className: 'icon bi bi-youtube',
            },
          ],
        },
      ],
      copyright: `Fluentis SRL 2024 | C.F. e P.IVA IT01720550936`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/fluentis-doc/FluentisErp/edit/website-edits/',
          editLocalizedFiles: true,
        },
        /* blog: {
          showReadingTime: true,
          // Please change this to your repo.
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],  
  plugins: [
    [
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
        {
          to: '/docs/guide/fluentis-erp-structure/',  // nuovo URL
          from: ['/docs/guide/intro/intro-erp'],     // vecchio URL
        },
      ],
    },
  ],
    [
    require.resolve('./plugins/md-jsonld'),
    {}
    ],
    [ require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // whether to index docs pages
        indexDocs: true,

        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 0,

        // whether to index blog pages
        indexBlog: false,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,

        // language of your documentation, see next section
        language: ['en', 'it', 'pt', 'ro'],

        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
        // overwrites with `!important`, because they might otherwise not be applied as expected. See the
        // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
        style: undefined,

        // The maximum number of search results shown to the user. This does _not_ affect performance of
        // searches, but simply does not display additional search results that have been found.
        maxSearchResults: 64,

        // lunr.js-specific settings
        lunr: {
          // When indexing your documents, their content is split into "tokens".
          // Text entered into the search box is also tokenized.
          // This setting configures the separator used to determine where to split the text into tokens.
          // By default, it splits the text at whitespace and dashes.
          //
          // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
          tokenizerSeparator: /[\s\-_]+|(?=[A-Z])/,
          // https://lunrjs.com/guides/customising.html#similarity-tuning
          //
          // This parameter controls the importance given to the length of a document and its fields. This
          // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
          // reduces the effect of different length documents on a term’s importance to that document.
          b: 0.6,
          // This controls how quickly the boost given by a common word reaches saturation. Increasing it
          // will slow down the rate of saturation and lower values result in quicker saturation. The
          // default value is 1.2. If the collection of documents being indexed have high occurrences
          // of words that are not covered by a stop word filter, these words can quickly dominate any
          // similarity calculation. In these cases, this value can be reduced to get more balanced results.
          k1: 1,
          // By default, we rank pages where the search term appears in the title higher than pages where
          // the search term appears in just the text. This is done by "boosting" title matches with a
          // higher value than content matches. The concrete boosting behavior can be controlled by changing
          // the following settings.
          titleBoost: 10,
          contentBoost: 2,
          tagsBoost: 3,
          parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
        }
      },
    ],
  ],
};


export default config;