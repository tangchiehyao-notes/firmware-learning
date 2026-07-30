import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Firmware Engineer Roadmap',
  tagline: 'OpenBMC / Embedded Linux system thinking, code mapping, labs, and interview practice',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://tangchiehyao-notes.github.io',
  baseUrl: '/firmware-learning/',
  organizationName: 'tangchiehyao-notes',
  projectName: 'firmware-learning',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          breadcrumbs: true,
          editUrl:
            'https://github.com/tangchiehyao-notes/firmware-learning/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        language: ['en', 'zh'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: 'Firmware Engineer Roadmap',
      logo: {
        alt: 'Firmware Engineer Roadmap Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs',
          position: 'left',
          label: 'Start',
          activeBaseRegex: '^/docs/',
        },
        {
          to: '/docs/learning-roadmap',
          label: 'Roadmap',
          position: 'left',
        },
        {
          to: '/docs/architecture',
          label: 'Architecture',
          position: 'left',
        },
        {
          to: '/docs/components',
          label: 'Components',
          position: 'left',
        },
        {
          to: '/docs/labs',
          label: 'Labs',
          position: 'left',
        },
        {
          to: '/docs/interview',
          label: 'Interview',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'References',
          position: 'right',
          items: [
            {
              label: 'Roadmap Repository',
              href: 'https://github.com/tangchiehyao-notes/firmware-learning',
            },
            {
              label: 'linux-internals-notes',
              href: 'https://github.com/tangchiehyao-notes/linux-internals-notes',
            },
            {
              label: 'openbmc-architecture-notes',
              href: 'https://github.com/tangchiehyao-notes/openbmc-architecture-notes',
            },
            {
              label: 'yocto-notes',
              href: 'https://github.com/tangchiehyao-notes/yocto-notes',
            },
            {
              label: 'docker-notes',
              href: 'https://github.com/tangchiehyao-notes/docker-notes',
            },
            {
              label: 'firmware-debugging-notes',
              href: 'https://github.com/tangchiehyao-notes/firmware-debugging-notes',
            },
          ],
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/tangchiehyao-notes/firmware-learning',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Roadmap',
          items: [
            {
              label: 'Roadmap Home',
              to: '/docs',
            },
            {
              label: 'Architecture',
              to: '/docs/architecture',
            },
            {
              label: 'Components',
              to: '/docs/components',
            },
          ],
        },
        {
          title: 'Practice',
          items: [
            {
              label: 'Labs',
              to: '/docs/labs',
            },
            {
              label: 'Interview',
              to: '/docs/interview',
            },
            {
              label: 'Knowledge Base',
              to: '/docs/knowledge-base',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'Roadmap Repo',
              href: 'https://github.com/tangchiehyao-notes/firmware-learning',
            },
            {
              label: 'All Notes Repositories',
              href: 'https://github.com/tangchiehyao-notes?tab=repositories',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TangChiehYao. Built with Docusaurus and published as a firmware learning portfolio.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'c', 'cpp', 'cmake', 'diff', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
