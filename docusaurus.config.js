const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Learn Physical AI in-depth',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Panaversity',
  projectName: 'book-ai-robotic',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }, 
    ],
  ],

  themeConfig: {
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
  },
};

module.exports = config;