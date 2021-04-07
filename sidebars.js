module.exports = {
  docs: [
    {
      type: "doc",
      id: "introduction",
    },
    {
      type: "category",
      label: "VolcanoidsSDK",
      items: [
        {
          type: "doc",
          id: "VolcanoidsSDK/sdk",
        },
        {
          type: "doc",
          id: "VolcanoidsSDK/functions",
        },
        {
          type: "category",
          label: "lib",
          items: [
            {
              type: "category",
              label: "classes",
              items: [
                {
                  type: "doc",
                  id: "VolcanoidsSDK/lib/classes/enums",
                },
                {
                  type: "doc",
                  id: "VolcanoidsSDK/lib/classes/input",
                },
                {
                  type: "doc",
                  id: "VolcanoidsSDK/lib/classes/output",
                },
              ],
            },
            {
              type: "category",
              label: "scripts",
              items: [
                {
                  type: "doc",
                  id: "VolcanoidsSDK/lib/scripts/extensions",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
