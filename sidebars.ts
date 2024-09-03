import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Add Juno to an App",
      link: {
        type: "generated-index",
        description: "Follow this guide to integrate Juno in your project."
      },
      items: [
        {
          type: "autogenerated",
          dirName: "add-juno-to-an-app"
        }
      ]
    },
    {
      type: "category",
      label: "Build",
      link: {
        type: "generated-index",
        description:
          "Learn about Juno features to build apps running 100% on blockchain without the need to manage servers or write any backend code."
      },
      items: [
        {
          type: "autogenerated",
          dirName: "build"
        }
      ]
    },
    {
      type: "category",
      label: "Guides and Examples",
      link: {
        type: "generated-index",
        description:
          "Start building with your preferred technologies. Explore our quick start guides and tutorials, designed to assist you in hosting and developing web dapps using your favorite frameworks."
      },
      items: [
        {
          type: "autogenerated",
          dirName: "guides"
        }
      ]
    },
    {
      type: "category",
      label: "Miscellaneous",
      link: {
        type: "generated-index"
      },
      items: [
        {
          type: "autogenerated",
          dirName: "miscellaneous"
        }
      ]
    },
    "terminology",
    "faq",
    "troubleshooting",
    "pricing"
  ],
  ["white-paper"]: [
    "white-paper/intro",
    "white-paper/what-is-juno",
    "white-paper/problems-statement",
    "white-paper/solution",
    "white-paper/use-cases",
    "white-paper/roadmap",
    "white-paper/architecture",
    "white-paper/infrastructure",
    "white-paper/open-source",
    "white-paper/business-model",
    "white-paper/competitors",
    "white-paper/costs-challenges",
    "white-paper/validation",
    "white-paper/target-audience",
    "white-paper/market-size",
    "white-paper/contributors",
    {
      type: "category",
      label: "Tokenomics",
      link: {
        type: "generated-index",
        description:
          "Juno will launch a standard ICRC token, known as Juno Build token (JUNOBUILD), at the creation of the DAO through a Service Nervous System (SNS)."
      },
      items: [
        {
          type: "autogenerated",
          dirName: "white-paper/tokenomics"
        }
      ]
    },
    "white-paper/legal-umbrella",
    "white-paper/conclusion"
  ]
};

export default sidebars;