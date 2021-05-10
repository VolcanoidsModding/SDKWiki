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
    // announcementBar: {
    //     id: 'support_us', // Any value that will identify this message.
    //     content:
    //         'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey<a>',
    //     backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //     textColor: '#091E42', // Defaults to `#000`.
    //     isCloseable: false, // Defaults to `true`.
    // },
    prism: {
      additionalLanguages: ["csharp"],
    },
    navbar: {
      title: "Modding SDK",
      logo: {
        alt: "Modding SDK Logo",
        src: "img/ModdingCOG.ico",
      },
      items: [
        {
          type: "docsVersionDropdown",

          //// Optional
          position: "right",
          // Add additional dropdown items at the beginning/end of the dropdown.
          dropdownItemsBefore: [],
          dropdownItemsAfter: [],
          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
          docsPluginId: "docs",
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
              label: "Modding",
              href: "https://modding.melodicalbuild.me/",
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
          id: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
          includeCurrentVersion: true,
          disableVersioning: false,
          lastVersion: "current",
          versions: {
            current: {
              label: "1.1.0",
              path: "",
            },
            "1.0.5": {
              label: "1.0.5",
              path: "docs-1.0.5",
            },
            "1.0.2": {
              label: "1.0.2",
              path: "docs-1.0.2",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
