/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Learn Physical AI in-depth',
  url: 'https://sadaqathussain8190.github.io',
  baseUrl: '/Book-ai-robotic/',
  organizationName: 'sadaqathussain8190', 
  projectName: 'Book-ai-robotic',
  trailingSlash: false,
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Physical AI Book',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Textbook Content',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;

