module.exports = {
  title: 'CovidSafe Docs',
  tagline: 'The tagline of my site',
  url: 'https://docs.covidsafeapp.com',
  baseUrl: '/',
  favicon: 'https://covidsafeapp.com/wp-content/uploads/2021/07/CovidSafe-Red-Icon.png',
  organizationName: 'covidsafeapp', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'CovidSafe Logo',
        src: 'https://covidsafeapp.com/wp-content/uploads/2021/07/CovidSafe-Landscape-Red.svg',
        srcDark: 'https://covidsafeapp.com/wp-content/uploads/2021/07/CovidSafe-Landscape-White.svg', // Default to `logo.src`.
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
     {
          to: 'https://covidsafeapp.com',
          label: 'Back to website',
          position: 'left',
        },
             {
          to: 'https://covidsafeapp.com/pricing',
          label: 'Pricing',
          position: 'left',
        },
        {
          to: 'https://status.covidsafeapp.com',
          label: 'Status',
          position: 'left',
        },
        {
          href: 'mailto:hey@covidsafeapp.com',
          label: 'Email support',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
