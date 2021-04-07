/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Volcanoids Modding SDK",
  tagline: "The Volcanoids Modding SDK",
  url: "https://sdk.melodicalbuild.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/ModdingCOG.ico",
  organizationName: "VolcanoidsModding", // Usually your GitHub org/user name.
  projectName: "SDKWiki", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Modding SDK",
      logo: {
        alt: "Modding SDK Logo",
        src: "img/ModdingCOG.ico",
      },
      items: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/VolcanoidsModding",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/volcanoids",
            },
            {
              label: "Discord",
              href: "https://discord.gg/volcanoids",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/volcanoids",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/VolcanoidsModding",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Volcanoids Modding SDK`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
