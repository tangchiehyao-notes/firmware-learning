import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Firmware Learning Hub',
  tagline: 'OpenBMC / Embedded Linux 學習地圖、技術筆記與長期作品集',
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
      title: 'Firmware Learning Hub',
      logo: {
        alt: 'Firmware Learning Hub Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs',
          position: 'left',
          label: 'Docs',
          activeBaseRegex: '^/docs/',
        },
        {
          to: '/docs/learning-roadmap',
          label: 'Roadmap',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Learning Tracks',
          position: 'left',
          items: [
            {
              label: 'Linux Internals',
              to: '/docs/linux-internals',
            },
            {
              label: 'OpenBMC Architecture',
              to: '/docs/openbmc-architecture',
            },
            {
              label: 'Yocto',
              to: '/docs/yocto',
            },
            {
              label: 'Docker',
              to: '/docs/docker',
            },
            {
              label: 'Firmware Debugging',
              to: '/docs/firmware-debugging',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Repositories',
          position: 'right',
          items: [
            {
              label: 'Knowledge Hub Site',
              href: 'https://github.com/tangchiehyao-notes/firmware-learning',
            },
            {
              label: 'linux-internals-notes',
              href: 'https://github.com/tangchiehyao-notes/linux-internals-notes',
            },
            {
              label: 'modern-cpp-notes',
              href: 'https://github.com/tangchiehyao-notes/modern-cpp-notes',
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
          title: 'Docs',
          items: [
            {
              label: 'Knowledge Hub Overview',
              to: '/docs',
            },
            {
              label: 'Learning Roadmap',
              to: '/docs/learning-roadmap',
            },
            {
              label: 'Linux Internals',
              to: '/docs/linux-internals',
            },
          ],
        },
        {
          title: 'Learning Tracks',
          items: [
            {
              label: 'OpenBMC Architecture',
              to: '/docs/openbmc-architecture',
            },
            {
              label: 'Yocto',
              to: '/docs/yocto',
            },
            {
              label: 'Firmware Debugging',
              to: '/docs/firmware-debugging',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'Knowledge Hub Repo',
              href: 'https://github.com/tangchiehyao-notes/firmware-learning',
            },
            {
              label: 'All Notes Repositories',
              href: 'https://github.com/tangchiehyao-notes?tab=repositories',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TangChiehYao. Built with Docusaurus and deployed on GitHub Pages.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'c', 'cpp', 'cmake', 'diff', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
