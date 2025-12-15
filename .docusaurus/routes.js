import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/soda/__docusaurus/debug',
    component: ComponentCreator('/soda/__docusaurus/debug', '925'),
    exact: true
  },
  {
    path: '/soda/__docusaurus/debug/config',
    component: ComponentCreator('/soda/__docusaurus/debug/config', 'e7a'),
    exact: true
  },
  {
    path: '/soda/__docusaurus/debug/content',
    component: ComponentCreator('/soda/__docusaurus/debug/content', 'bfe'),
    exact: true
  },
  {
    path: '/soda/__docusaurus/debug/globalData',
    component: ComponentCreator('/soda/__docusaurus/debug/globalData', '2ee'),
    exact: true
  },
  {
    path: '/soda/__docusaurus/debug/metadata',
    component: ComponentCreator('/soda/__docusaurus/debug/metadata', '3dc'),
    exact: true
  },
  {
    path: '/soda/__docusaurus/debug/registry',
    component: ComponentCreator('/soda/__docusaurus/debug/registry', 'a94'),
    exact: true
  },
  {
    path: '/soda/__docusaurus/debug/routes',
    component: ComponentCreator('/soda/__docusaurus/debug/routes', '4e0'),
    exact: true
  },
  {
    path: '/soda/blog',
    component: ComponentCreator('/soda/blog', 'a92'),
    exact: true
  },
  {
    path: '/soda/blog/archive',
    component: ComponentCreator('/soda/blog/archive', 'af6'),
    exact: true
  },
  {
    path: '/soda/blog/performance-improvements-in-v0.18.0',
    component: ComponentCreator('/soda/blog/performance-improvements-in-v0.18.0', '9e7'),
    exact: true
  },
  {
    path: '/soda/blog/tags',
    component: ComponentCreator('/soda/blog/tags', 'da8'),
    exact: true
  },
  {
    path: '/soda/blog/tags/c',
    component: ComponentCreator('/soda/blog/tags/c', '48a'),
    exact: true
  },
  {
    path: '/soda/blog/tags/core',
    component: ComponentCreator('/soda/blog/tags/core', 'e2f'),
    exact: true
  },
  {
    path: '/soda/blog/tags/csharp',
    component: ComponentCreator('/soda/blog/tags/csharp', '3ba'),
    exact: true
  },
  {
    path: '/soda/blog/tags/dates',
    component: ComponentCreator('/soda/blog/tags/dates', '328'),
    exact: true
  },
  {
    path: '/soda/blog/tags/examples',
    component: ComponentCreator('/soda/blog/tags/examples', 'b42'),
    exact: true
  },
  {
    path: '/soda/blog/tags/performance',
    component: ComponentCreator('/soda/blog/tags/performance', '7b6'),
    exact: true
  },
  {
    path: '/soda/blog/tags/phoenix',
    component: ComponentCreator('/soda/blog/tags/phoenix', '97b'),
    exact: true
  },
  {
    path: '/soda/blog/tags/programming',
    component: ComponentCreator('/soda/blog/tags/programming', 'e9e'),
    exact: true
  },
  {
    path: '/soda/blog/tags/schemas',
    component: ComponentCreator('/soda/blog/tags/schemas', '90d'),
    exact: true
  },
  {
    path: '/soda/blog/tags/scl',
    component: ComponentCreator('/soda/blog/tags/scl', '479'),
    exact: true
  },
  {
    path: '/soda/blog/tags/software',
    component: ComponentCreator('/soda/blog/tags/software', '55b'),
    exact: true
  },
  {
    path: '/soda/blog/tags/structured-data',
    component: ComponentCreator('/soda/blog/tags/structured-data', 'ab8'),
    exact: true
  },
  {
    path: '/soda/blog/tags/transform',
    component: ComponentCreator('/soda/blog/tags/transform', '60a'),
    exact: true
  },
  {
    path: '/soda/blog/wrangling-dates-with-scl',
    component: ComponentCreator('/soda/blog/wrangling-dates-with-scl', '525'),
    exact: true
  },
  {
    path: '/soda/download',
    component: ComponentCreator('/soda/download', '78f'),
    exact: true
  },
  {
    path: '/soda/playground',
    component: ComponentCreator('/soda/playground', 'f4f'),
    exact: true
  },
  {
    path: '/soda/scl-grammar-test',
    component: ComponentCreator('/soda/scl-grammar-test', '2f4'),
    exact: true
  },
  {
    path: '/soda/search',
    component: ComponentCreator('/soda/search', 'd25'),
    exact: true
  },
  {
    path: '/soda/docs',
    component: ComponentCreator('/soda/docs', '91c'),
    routes: [
      {
        path: '/soda/docs/next',
        component: ComponentCreator('/soda/docs/next', '1e1'),
        routes: [
          {
            path: '/soda/docs/next',
            component: ComponentCreator('/soda/docs/next', '13e'),
            routes: [
              {
                path: '/soda/docs/next/application-settings',
                component: ComponentCreator('/soda/docs/next/application-settings', '4ef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/build-from-source',
                component: ComponentCreator('/soda/docs/next/build-from-source', '73c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/connectors/core',
                component: ComponentCreator('/soda/docs/next/connectors/core', '855'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/connectors/filesystem',
                component: ComponentCreator('/soda/docs/next/connectors/filesystem', '365'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/connectors/microsoft365',
                component: ComponentCreator('/soda/docs/next/connectors/microsoft365', 'b49'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/connectors/nuix',
                component: ComponentCreator('/soda/docs/next/connectors/nuix', '7d8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/connectors/powershell',
                component: ComponentCreator('/soda/docs/next/connectors/powershell', 'a03'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/connectors/relativity',
                component: ComponentCreator('/soda/docs/next/connectors/relativity', 'fbf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/connectors/rest',
                component: ComponentCreator('/soda/docs/next/connectors/rest', '311'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/connectors/singer',
                component: ComponentCreator('/soda/docs/next/connectors/singer', '490'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/connectors/sql',
                component: ComponentCreator('/soda/docs/next/connectors/sql', '002'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/connectors/structureddata',
                component: ComponentCreator('/soda/docs/next/connectors/structureddata', 'cd3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/connectors/tesseract',
                component: ComponentCreator('/soda/docs/next/connectors/tesseract', '2b8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/connectors/tsk',
                component: ComponentCreator('/soda/docs/next/connectors/tsk', 'dd5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/developers-guide',
                component: ComponentCreator('/soda/docs/next/developers-guide', 'e32'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/entities',
                component: ComponentCreator('/soda/docs/next/entities', '2de'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/application-settings',
                component: ComponentCreator('/soda/docs/next/examples/application-settings', '9b2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/filesystem',
                component: ComponentCreator('/soda/docs/next/examples/connectors/filesystem', 'f95'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/filesystem/extract-an-archive',
                component: ComponentCreator('/soda/docs/next/examples/connectors/filesystem/extract-an-archive', '66d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/filesystem/read-a-file',
                component: ComponentCreator('/soda/docs/next/examples/connectors/filesystem/read-a-file', '326'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/filesystem/write-a-file',
                component: ComponentCreator('/soda/docs/next/examples/connectors/filesystem/write-a-file', 'e8b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/microsoft365',
                component: ComponentCreator('/soda/docs/next/examples/connectors/microsoft365', '6bc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/microsoft365/microsoft365-get-team-channels',
                component: ComponentCreator('/soda/docs/next/examples/connectors/microsoft365/microsoft365-get-team-channels', '612'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/microsoft365/microsoft365-get-teams',
                component: ComponentCreator('/soda/docs/next/examples/connectors/microsoft365/microsoft365-get-teams', 'e75'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/microsoft365/microsoft365-login',
                component: ComponentCreator('/soda/docs/next/examples/connectors/microsoft365/microsoft365-login', '70a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/nuix',
                component: ComponentCreator('/soda/docs/next/examples/connectors/nuix', '9a8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/nuix/nuix-create-ingest-export',
                component: ComponentCreator('/soda/docs/next/examples/connectors/nuix/nuix-create-ingest-export', '538'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/nuix/nuix-create-ingest-filter',
                component: ComponentCreator('/soda/docs/next/examples/connectors/nuix/nuix-create-ingest-filter', '656'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/nuix/nuix-download-sample-data',
                component: ComponentCreator('/soda/docs/next/examples/connectors/nuix/nuix-download-sample-data', '4fa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/nuix/nuix-ingest-custom-profile',
                component: ComponentCreator('/soda/docs/next/examples/connectors/nuix/nuix-ingest-custom-profile', '4f1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/nuix/nuix-search-and-tag',
                component: ComponentCreator('/soda/docs/next/examples/connectors/nuix/nuix-search-and-tag', 'c9b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/powershell',
                component: ComponentCreator('/soda/docs/next/examples/connectors/powershell', 'e66'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/powershell/download-csv',
                component: ComponentCreator('/soda/docs/next/examples/connectors/powershell/download-csv', '774'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/relativity',
                component: ComponentCreator('/soda/docs/next/examples/connectors/relativity', 'efc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/relativity/relativity-create-workspace',
                component: ComponentCreator('/soda/docs/next/examples/connectors/relativity/relativity-create-workspace', '819'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/relativity/relativity-end-to-end',
                component: ComponentCreator('/soda/docs/next/examples/connectors/relativity/relativity-end-to-end', '548'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/relativity/relativity-export-entities',
                component: ComponentCreator('/soda/docs/next/examples/connectors/relativity/relativity-export-entities', 'bf8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/relativity/relativity-import-concordance',
                component: ComponentCreator('/soda/docs/next/examples/connectors/relativity/relativity-import-concordance', '3d3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/relativity/relativity-import-entities',
                component: ComponentCreator('/soda/docs/next/examples/connectors/relativity/relativity-import-entities', '2e9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/relativity/relativity-import-from-nuix',
                component: ComponentCreator('/soda/docs/next/examples/connectors/relativity/relativity-import-from-nuix', '2a7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/relativity/relativity-search-and-tag',
                component: ComponentCreator('/soda/docs/next/examples/connectors/relativity/relativity-search-and-tag', 'fc9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/rest',
                component: ComponentCreator('/soda/docs/next/examples/connectors/rest', 'dc9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/rest/reveal-create-folder',
                component: ComponentCreator('/soda/docs/next/examples/connectors/rest/reveal-create-folder', 'ffa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/rest/reveal-get-all-documents',
                component: ComponentCreator('/soda/docs/next/examples/connectors/rest/reveal-get-all-documents', 'bd1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/rest/reveal-get-all-fields',
                component: ComponentCreator('/soda/docs/next/examples/connectors/rest/reveal-get-all-fields', '1d0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/rest/reveal-get-all-folders',
                component: ComponentCreator('/soda/docs/next/examples/connectors/rest/reveal-get-all-folders', 'fb7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/rest/reveal-get-case-statistics',
                component: ComponentCreator('/soda/docs/next/examples/connectors/rest/reveal-get-case-statistics', '7c0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/rest/reveal-get-cases',
                component: ComponentCreator('/soda/docs/next/examples/connectors/rest/reveal-get-cases', '1ce'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/singer',
                component: ComponentCreator('/soda/docs/next/examples/connectors/singer', '774'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/singer/import-data-from-slack',
                component: ComponentCreator('/soda/docs/next/examples/connectors/singer/import-data-from-slack', '554'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/sql',
                component: ComponentCreator('/soda/docs/next/examples/connectors/sql', 'b50'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/sql/create-table-insert-data',
                component: ComponentCreator('/soda/docs/next/examples/connectors/sql/create-table-insert-data', 'd64'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/sql/read-data-from-table',
                component: ComponentCreator('/soda/docs/next/examples/connectors/sql/read-data-from-table', 'c1e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/structureddata',
                component: ComponentCreator('/soda/docs/next/examples/connectors/structureddata', 'd19'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/structureddata/concordance',
                component: ComponentCreator('/soda/docs/next/examples/connectors/structureddata/concordance', 'c10'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/structureddata/csv-files',
                component: ComponentCreator('/soda/docs/next/examples/connectors/structureddata/csv-files', '6d9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/tesseract',
                component: ComponentCreator('/soda/docs/next/examples/connectors/tesseract', '228'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/tsk',
                component: ComponentCreator('/soda/docs/next/examples/connectors/tsk', 'ee7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/tsk/tsk-create-case-and-add-data',
                component: ComponentCreator('/soda/docs/next/examples/connectors/tsk/tsk-create-case-and-add-data', '524'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/tsk/tsk-create-reports',
                component: ComponentCreator('/soda/docs/next/examples/connectors/tsk/tsk-create-reports', '2f8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/connectors/tsk/tsk-import-from-nuix',
                component: ComponentCreator('/soda/docs/next/examples/connectors/tsk/tsk-import-from-nuix', '2a5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/core',
                component: ComponentCreator('/soda/docs/next/examples/core', '922'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/schema-examples',
                component: ComponentCreator('/soda/docs/next/examples/schema-examples', '5a8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/schemas/edrm-schema',
                component: ComponentCreator('/soda/docs/next/examples/schemas/edrm-schema', '5c4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/schemas/transform-concordance-to-ussec',
                component: ComponentCreator('/soda/docs/next/examples/schemas/transform-concordance-to-ussec', '996'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/schemas/using-schemas-to-transform-dates',
                component: ComponentCreator('/soda/docs/next/examples/schemas/using-schemas-to-transform-dates', '245'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/examples/schemas/ussec-schema',
                component: ComponentCreator('/soda/docs/next/examples/schemas/ussec-schema', '59b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/intro',
                component: ComponentCreator('/soda/docs/next/intro', 'a84'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/logging',
                component: ComponentCreator('/soda/docs/next/logging', 'bf4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/quick-start',
                component: ComponentCreator('/soda/docs/next/quick-start', 'cb9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/schemas',
                component: ComponentCreator('/soda/docs/next/schemas', '2a7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/next/sequence-configuration-language',
                component: ComponentCreator('/soda/docs/next/sequence-configuration-language', '9ac'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      },
      {
        path: '/soda/docs/v0.16.0',
        component: ComponentCreator('/soda/docs/v0.16.0', '2d9'),
        routes: [
          {
            path: '/soda/docs/v0.16.0',
            component: ComponentCreator('/soda/docs/v0.16.0', 'e11'),
            routes: [
              {
                path: '/soda/docs/v0.16.0/application-settings',
                component: ComponentCreator('/soda/docs/v0.16.0/application-settings', '404'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/build-from-source',
                component: ComponentCreator('/soda/docs/v0.16.0/build-from-source', '7c3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/connectors/core',
                component: ComponentCreator('/soda/docs/v0.16.0/connectors/core', '77e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/connectors/filesystem',
                component: ComponentCreator('/soda/docs/v0.16.0/connectors/filesystem', 'd0e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/connectors/nuix',
                component: ComponentCreator('/soda/docs/v0.16.0/connectors/nuix', '92e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/connectors/powershell',
                component: ComponentCreator('/soda/docs/v0.16.0/connectors/powershell', '8c7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/connectors/relativity',
                component: ComponentCreator('/soda/docs/v0.16.0/connectors/relativity', '5ec'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/connectors/rest',
                component: ComponentCreator('/soda/docs/v0.16.0/connectors/rest', '37e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/connectors/singer',
                component: ComponentCreator('/soda/docs/v0.16.0/connectors/singer', '64a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/connectors/sql',
                component: ComponentCreator('/soda/docs/v0.16.0/connectors/sql', 'caa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/connectors/structureddata',
                component: ComponentCreator('/soda/docs/v0.16.0/connectors/structureddata', 'a84'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/connectors/tesseract',
                component: ComponentCreator('/soda/docs/v0.16.0/connectors/tesseract', '9a2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/connectors/tsk',
                component: ComponentCreator('/soda/docs/v0.16.0/connectors/tsk', '817'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/developers-guide',
                component: ComponentCreator('/soda/docs/v0.16.0/developers-guide', '6d0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/entities',
                component: ComponentCreator('/soda/docs/v0.16.0/entities', '033'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/application-settings',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/application-settings', '8ec'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/filesystem',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/filesystem', 'aef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/filesystem/extract-an-archive',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/filesystem/extract-an-archive', '238'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/filesystem/read-a-file',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/filesystem/read-a-file', 'bde'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/filesystem/write-a-file',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/filesystem/write-a-file', 'c92'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/nuix',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/nuix', 'bbd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/nuix/nuix-create-ingest-export',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/nuix/nuix-create-ingest-export', '37c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/nuix/nuix-create-ingest-filter',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/nuix/nuix-create-ingest-filter', '94e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/nuix/nuix-download-sample-data',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/nuix/nuix-download-sample-data', 'daa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/nuix/nuix-ingest-custom-profile',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/nuix/nuix-ingest-custom-profile', '75d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/nuix/nuix-search-and-tag',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/nuix/nuix-search-and-tag', 'bad'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/powershell',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/powershell', '733'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/powershell/download-csv',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/powershell/download-csv', 'dbe'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/relativity',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/relativity', 'fb6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/relativity/relativity-create-workspace',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/relativity/relativity-create-workspace', 'a41'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/relativity/relativity-end-to-end',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/relativity/relativity-end-to-end', 'b53'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/relativity/relativity-export-entities',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/relativity/relativity-export-entities', '1f8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/relativity/relativity-import-concordance',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/relativity/relativity-import-concordance', 'd27'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/relativity/relativity-import-entities',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/relativity/relativity-import-entities', '9fa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/relativity/relativity-import-from-nuix',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/relativity/relativity-import-from-nuix', '961'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/relativity/relativity-search-and-tag',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/relativity/relativity-search-and-tag', 'ca8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/rest',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/rest', '4f8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/rest/reveal-create-folder',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/rest/reveal-create-folder', 'a23'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/rest/reveal-get-all-documents',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/rest/reveal-get-all-documents', '02f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/rest/reveal-get-all-fields',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/rest/reveal-get-all-fields', 'd88'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/rest/reveal-get-all-folders',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/rest/reveal-get-all-folders', '8bb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/rest/reveal-get-case-statistics',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/rest/reveal-get-case-statistics', 'a45'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/rest/reveal-get-cases',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/rest/reveal-get-cases', 'e05'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/singer',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/singer', '389'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/singer/import-data-from-slack',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/singer/import-data-from-slack', '886'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/sql',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/sql', '03e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/sql/create-table-insert-data',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/sql/create-table-insert-data', 'f53'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/sql/read-data-from-table',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/sql/read-data-from-table', 'b66'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/structureddata',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/structureddata', '30e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/structureddata/concordance',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/structureddata/concordance', '424'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/structureddata/csv-files',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/structureddata/csv-files', 'ecc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/tesseract',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/tesseract', '1f7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/tsk',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/tsk', '423'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/tsk/tsk-create-case-and-add-data',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/tsk/tsk-create-case-and-add-data', '2b5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/tsk/tsk-create-reports',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/tsk/tsk-create-reports', 'cc8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/connectors/tsk/tsk-import-from-nuix',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/connectors/tsk/tsk-import-from-nuix', 'c1b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/core',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/core', '03c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/schema-examples',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/schema-examples', '8dd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/schemas/edrm-schema',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/schemas/edrm-schema', 'cd3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/schemas/transform-concordance-to-ussec',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/schemas/transform-concordance-to-ussec', '590'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/schemas/using-schemas-to-transform-dates',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/schemas/using-schemas-to-transform-dates', '804'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/examples/schemas/ussec-schema',
                component: ComponentCreator('/soda/docs/v0.16.0/examples/schemas/ussec-schema', '290'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/intro',
                component: ComponentCreator('/soda/docs/v0.16.0/intro', 'b13'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/logging',
                component: ComponentCreator('/soda/docs/v0.16.0/logging', '06e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/quick-start',
                component: ComponentCreator('/soda/docs/v0.16.0/quick-start', '5fc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/schemas',
                component: ComponentCreator('/soda/docs/v0.16.0/schemas', '1fd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.16.0/sequence-configuration-language',
                component: ComponentCreator('/soda/docs/v0.16.0/sequence-configuration-language', 'df1'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      },
      {
        path: '/soda/docs/v0.17.0',
        component: ComponentCreator('/soda/docs/v0.17.0', '073'),
        routes: [
          {
            path: '/soda/docs/v0.17.0',
            component: ComponentCreator('/soda/docs/v0.17.0', 'b7b'),
            routes: [
              {
                path: '/soda/docs/v0.17.0/application-settings',
                component: ComponentCreator('/soda/docs/v0.17.0/application-settings', 'd67'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/build-from-source',
                component: ComponentCreator('/soda/docs/v0.17.0/build-from-source', '9ee'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/connectors/core',
                component: ComponentCreator('/soda/docs/v0.17.0/connectors/core', '6a8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/connectors/filesystem',
                component: ComponentCreator('/soda/docs/v0.17.0/connectors/filesystem', 'c43'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/connectors/microsoft365',
                component: ComponentCreator('/soda/docs/v0.17.0/connectors/microsoft365', '616'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/connectors/nuix',
                component: ComponentCreator('/soda/docs/v0.17.0/connectors/nuix', '4ca'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/connectors/powershell',
                component: ComponentCreator('/soda/docs/v0.17.0/connectors/powershell', '2ed'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/connectors/relativity',
                component: ComponentCreator('/soda/docs/v0.17.0/connectors/relativity', '80c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/connectors/rest',
                component: ComponentCreator('/soda/docs/v0.17.0/connectors/rest', '18e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/connectors/singer',
                component: ComponentCreator('/soda/docs/v0.17.0/connectors/singer', '716'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/connectors/sql',
                component: ComponentCreator('/soda/docs/v0.17.0/connectors/sql', 'a92'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/connectors/structureddata',
                component: ComponentCreator('/soda/docs/v0.17.0/connectors/structureddata', '904'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/connectors/tesseract',
                component: ComponentCreator('/soda/docs/v0.17.0/connectors/tesseract', '3c3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/connectors/tsk',
                component: ComponentCreator('/soda/docs/v0.17.0/connectors/tsk', '174'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/developers-guide',
                component: ComponentCreator('/soda/docs/v0.17.0/developers-guide', 'a9f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/entities',
                component: ComponentCreator('/soda/docs/v0.17.0/entities', '8bc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/application-settings',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/application-settings', 'c70'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/filesystem',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/filesystem', '0c2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/filesystem/extract-an-archive',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/filesystem/extract-an-archive', '136'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/filesystem/read-a-file',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/filesystem/read-a-file', '10b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/filesystem/write-a-file',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/filesystem/write-a-file', 'c17'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/microsoft365',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/microsoft365', '05a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/microsoft365/microsoft365-get-team-channels',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/microsoft365/microsoft365-get-team-channels', '823'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/microsoft365/microsoft365-get-teams',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/microsoft365/microsoft365-get-teams', '862'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/microsoft365/microsoft365-login',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/microsoft365/microsoft365-login', 'bf1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/nuix',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/nuix', '12b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/nuix/nuix-create-ingest-export',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/nuix/nuix-create-ingest-export', '377'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/nuix/nuix-create-ingest-filter',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/nuix/nuix-create-ingest-filter', '86a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/nuix/nuix-download-sample-data',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/nuix/nuix-download-sample-data', 'b31'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/nuix/nuix-ingest-custom-profile',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/nuix/nuix-ingest-custom-profile', 'a55'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/nuix/nuix-search-and-tag',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/nuix/nuix-search-and-tag', '995'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/powershell',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/powershell', '2bb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/powershell/download-csv',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/powershell/download-csv', '2cc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/relativity',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/relativity', 'dd2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/relativity/relativity-create-workspace',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/relativity/relativity-create-workspace', '7b9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/relativity/relativity-end-to-end',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/relativity/relativity-end-to-end', '92e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/relativity/relativity-export-entities',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/relativity/relativity-export-entities', '0fd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/relativity/relativity-import-concordance',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/relativity/relativity-import-concordance', 'd3b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/relativity/relativity-import-entities',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/relativity/relativity-import-entities', '78e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/relativity/relativity-import-from-nuix',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/relativity/relativity-import-from-nuix', 'cd4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/relativity/relativity-search-and-tag',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/relativity/relativity-search-and-tag', 'a5c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/rest',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/rest', 'b0d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/rest/reveal-create-folder',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/rest/reveal-create-folder', 'fa7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/rest/reveal-get-all-documents',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/rest/reveal-get-all-documents', '01e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/rest/reveal-get-all-fields',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/rest/reveal-get-all-fields', 'edc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/rest/reveal-get-all-folders',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/rest/reveal-get-all-folders', 'c8c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/rest/reveal-get-case-statistics',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/rest/reveal-get-case-statistics', '91b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/rest/reveal-get-cases',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/rest/reveal-get-cases', 'b94'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/singer',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/singer', '68a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/singer/import-data-from-slack',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/singer/import-data-from-slack', '69f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/sql',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/sql', 'd15'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/sql/create-table-insert-data',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/sql/create-table-insert-data', 'c02'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/sql/read-data-from-table',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/sql/read-data-from-table', '211'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/structureddata',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/structureddata', 'c79'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/structureddata/concordance',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/structureddata/concordance', 'd1d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/structureddata/csv-files',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/structureddata/csv-files', 'c68'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/tesseract',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/tesseract', 'fab'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/tsk',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/tsk', 'cfb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/tsk/tsk-create-case-and-add-data',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/tsk/tsk-create-case-and-add-data', '949'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/tsk/tsk-create-reports',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/tsk/tsk-create-reports', 'ad8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/connectors/tsk/tsk-import-from-nuix',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/connectors/tsk/tsk-import-from-nuix', '702'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/core',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/core', '4ef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/schema-examples',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/schema-examples', '8f3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/schemas/edrm-schema',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/schemas/edrm-schema', '64d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/schemas/transform-concordance-to-ussec',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/schemas/transform-concordance-to-ussec', 'a6e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/schemas/using-schemas-to-transform-dates',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/schemas/using-schemas-to-transform-dates', 'ea8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/examples/schemas/ussec-schema',
                component: ComponentCreator('/soda/docs/v0.17.0/examples/schemas/ussec-schema', '76d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/intro',
                component: ComponentCreator('/soda/docs/v0.17.0/intro', '2c8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/logging',
                component: ComponentCreator('/soda/docs/v0.17.0/logging', '97c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/quick-start',
                component: ComponentCreator('/soda/docs/v0.17.0/quick-start', '3d2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/schemas',
                component: ComponentCreator('/soda/docs/v0.17.0/schemas', 'a01'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/v0.17.0/sequence-configuration-language',
                component: ComponentCreator('/soda/docs/v0.17.0/sequence-configuration-language', '968'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      },
      {
        path: '/soda/docs',
        component: ComponentCreator('/soda/docs', 'da5'),
        routes: [
          {
            path: '/soda/docs',
            component: ComponentCreator('/soda/docs', '12e'),
            routes: [
              {
                path: '/soda/docs/application-settings',
                component: ComponentCreator('/soda/docs/application-settings', 'ab8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/build-from-source',
                component: ComponentCreator('/soda/docs/build-from-source', '6ea'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/connectors/core',
                component: ComponentCreator('/soda/docs/connectors/core', '52c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/connectors/filesystem',
                component: ComponentCreator('/soda/docs/connectors/filesystem', '78a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/connectors/microsoft365',
                component: ComponentCreator('/soda/docs/connectors/microsoft365', 'a42'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/connectors/nuix',
                component: ComponentCreator('/soda/docs/connectors/nuix', '178'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/connectors/powershell',
                component: ComponentCreator('/soda/docs/connectors/powershell', '1cd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/connectors/relativity',
                component: ComponentCreator('/soda/docs/connectors/relativity', '018'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/connectors/rest',
                component: ComponentCreator('/soda/docs/connectors/rest', '414'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/connectors/singer',
                component: ComponentCreator('/soda/docs/connectors/singer', '394'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/connectors/sql',
                component: ComponentCreator('/soda/docs/connectors/sql', 'c19'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/connectors/structureddata',
                component: ComponentCreator('/soda/docs/connectors/structureddata', 'e40'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/connectors/tesseract',
                component: ComponentCreator('/soda/docs/connectors/tesseract', '6b7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/connectors/tsk',
                component: ComponentCreator('/soda/docs/connectors/tsk', 'f1f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/developers-guide',
                component: ComponentCreator('/soda/docs/developers-guide', 'c7b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/entities',
                component: ComponentCreator('/soda/docs/entities', '0ef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/application-settings',
                component: ComponentCreator('/soda/docs/examples/application-settings', '591'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/filesystem',
                component: ComponentCreator('/soda/docs/examples/connectors/filesystem', 'e14'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/filesystem/extract-an-archive',
                component: ComponentCreator('/soda/docs/examples/connectors/filesystem/extract-an-archive', 'beb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/filesystem/read-a-file',
                component: ComponentCreator('/soda/docs/examples/connectors/filesystem/read-a-file', 'f2b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/filesystem/write-a-file',
                component: ComponentCreator('/soda/docs/examples/connectors/filesystem/write-a-file', '6dd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/microsoft365',
                component: ComponentCreator('/soda/docs/examples/connectors/microsoft365', '404'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/microsoft365/microsoft365-get-team-channels',
                component: ComponentCreator('/soda/docs/examples/connectors/microsoft365/microsoft365-get-team-channels', 'f0a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/microsoft365/microsoft365-get-teams',
                component: ComponentCreator('/soda/docs/examples/connectors/microsoft365/microsoft365-get-teams', '83e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/microsoft365/microsoft365-login',
                component: ComponentCreator('/soda/docs/examples/connectors/microsoft365/microsoft365-login', '5f1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/nuix',
                component: ComponentCreator('/soda/docs/examples/connectors/nuix', '1cd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/nuix/nuix-create-ingest-export',
                component: ComponentCreator('/soda/docs/examples/connectors/nuix/nuix-create-ingest-export', '405'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/nuix/nuix-create-ingest-filter',
                component: ComponentCreator('/soda/docs/examples/connectors/nuix/nuix-create-ingest-filter', '14c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/nuix/nuix-download-sample-data',
                component: ComponentCreator('/soda/docs/examples/connectors/nuix/nuix-download-sample-data', 'd49'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/nuix/nuix-ingest-custom-profile',
                component: ComponentCreator('/soda/docs/examples/connectors/nuix/nuix-ingest-custom-profile', 'e01'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/nuix/nuix-search-and-tag',
                component: ComponentCreator('/soda/docs/examples/connectors/nuix/nuix-search-and-tag', 'c3f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/powershell',
                component: ComponentCreator('/soda/docs/examples/connectors/powershell', '215'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/powershell/download-csv',
                component: ComponentCreator('/soda/docs/examples/connectors/powershell/download-csv', 'b03'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/relativity',
                component: ComponentCreator('/soda/docs/examples/connectors/relativity', '148'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/relativity/relativity-create-workspace',
                component: ComponentCreator('/soda/docs/examples/connectors/relativity/relativity-create-workspace', '4eb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/relativity/relativity-end-to-end',
                component: ComponentCreator('/soda/docs/examples/connectors/relativity/relativity-end-to-end', 'f71'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/relativity/relativity-export-entities',
                component: ComponentCreator('/soda/docs/examples/connectors/relativity/relativity-export-entities', '0be'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/relativity/relativity-import-concordance',
                component: ComponentCreator('/soda/docs/examples/connectors/relativity/relativity-import-concordance', 'c7d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/relativity/relativity-import-entities',
                component: ComponentCreator('/soda/docs/examples/connectors/relativity/relativity-import-entities', '5c1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/relativity/relativity-import-from-nuix',
                component: ComponentCreator('/soda/docs/examples/connectors/relativity/relativity-import-from-nuix', '493'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/relativity/relativity-search-and-tag',
                component: ComponentCreator('/soda/docs/examples/connectors/relativity/relativity-search-and-tag', '9cd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/rest',
                component: ComponentCreator('/soda/docs/examples/connectors/rest', 'a31'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/rest/reveal-create-folder',
                component: ComponentCreator('/soda/docs/examples/connectors/rest/reveal-create-folder', '51c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/rest/reveal-get-all-documents',
                component: ComponentCreator('/soda/docs/examples/connectors/rest/reveal-get-all-documents', '8cb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/rest/reveal-get-all-fields',
                component: ComponentCreator('/soda/docs/examples/connectors/rest/reveal-get-all-fields', '031'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/rest/reveal-get-all-folders',
                component: ComponentCreator('/soda/docs/examples/connectors/rest/reveal-get-all-folders', 'fe6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/rest/reveal-get-case-statistics',
                component: ComponentCreator('/soda/docs/examples/connectors/rest/reveal-get-case-statistics', '701'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/rest/reveal-get-cases',
                component: ComponentCreator('/soda/docs/examples/connectors/rest/reveal-get-cases', 'fc3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/singer',
                component: ComponentCreator('/soda/docs/examples/connectors/singer', 'af3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/singer/import-data-from-slack',
                component: ComponentCreator('/soda/docs/examples/connectors/singer/import-data-from-slack', '20d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/sql',
                component: ComponentCreator('/soda/docs/examples/connectors/sql', '750'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/sql/create-table-insert-data',
                component: ComponentCreator('/soda/docs/examples/connectors/sql/create-table-insert-data', '2cf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/sql/read-data-from-table',
                component: ComponentCreator('/soda/docs/examples/connectors/sql/read-data-from-table', '159'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/structureddata',
                component: ComponentCreator('/soda/docs/examples/connectors/structureddata', '37f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/structureddata/concordance',
                component: ComponentCreator('/soda/docs/examples/connectors/structureddata/concordance', '350'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/structureddata/csv-files',
                component: ComponentCreator('/soda/docs/examples/connectors/structureddata/csv-files', 'b9e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/tesseract',
                component: ComponentCreator('/soda/docs/examples/connectors/tesseract', 'f2e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/tsk',
                component: ComponentCreator('/soda/docs/examples/connectors/tsk', '447'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/tsk/tsk-create-case-and-add-data',
                component: ComponentCreator('/soda/docs/examples/connectors/tsk/tsk-create-case-and-add-data', '9b7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/tsk/tsk-create-reports',
                component: ComponentCreator('/soda/docs/examples/connectors/tsk/tsk-create-reports', 'cef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/connectors/tsk/tsk-import-from-nuix',
                component: ComponentCreator('/soda/docs/examples/connectors/tsk/tsk-import-from-nuix', '198'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/core',
                component: ComponentCreator('/soda/docs/examples/core', '9ef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/schema-examples',
                component: ComponentCreator('/soda/docs/examples/schema-examples', '0fd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/schemas/edrm-schema',
                component: ComponentCreator('/soda/docs/examples/schemas/edrm-schema', '259'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/schemas/transform-concordance-to-ussec',
                component: ComponentCreator('/soda/docs/examples/schemas/transform-concordance-to-ussec', '6d1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/schemas/using-schemas-to-transform-dates',
                component: ComponentCreator('/soda/docs/examples/schemas/using-schemas-to-transform-dates', '695'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/examples/schemas/ussec-schema',
                component: ComponentCreator('/soda/docs/examples/schemas/ussec-schema', '7e7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/intro',
                component: ComponentCreator('/soda/docs/intro', 'fb9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/logging',
                component: ComponentCreator('/soda/docs/logging', '0e0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/quick-start',
                component: ComponentCreator('/soda/docs/quick-start', 'fcc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/schemas',
                component: ComponentCreator('/soda/docs/schemas', '980'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/soda/docs/sequence-configuration-language',
                component: ComponentCreator('/soda/docs/sequence-configuration-language', '173'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/soda/steps',
    component: ComponentCreator('/soda/steps', 'f81'),
    routes: [
      {
        path: '/soda/steps/next',
        component: ComponentCreator('/soda/steps/next', 'a04'),
        routes: [
          {
            path: '/soda/steps/next/tags',
            component: ComponentCreator('/soda/steps/next/tags', 'af0'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/contents',
            component: ComponentCreator('/soda/steps/next/tags/contents', 'bf1'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/core',
            component: ComponentCreator('/soda/steps/next/tags/core', 'd54'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/enums',
            component: ComponentCreator('/soda/steps/next/tags/enums', 'b67'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/file-system',
            component: ComponentCreator('/soda/steps/next/tags/file-system', 'b65'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/microsoft-365',
            component: ComponentCreator('/soda/steps/next/tags/microsoft-365', '0b8'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/nuix',
            component: ComponentCreator('/soda/steps/next/tags/nuix', 'c63'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/pwsh',
            component: ComponentCreator('/soda/steps/next/tags/pwsh', 'f7c'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/relativity',
            component: ComponentCreator('/soda/steps/next/tags/relativity', '68d'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/rest',
            component: ComponentCreator('/soda/steps/next/tags/rest', 'f17'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/singer',
            component: ComponentCreator('/soda/steps/next/tags/singer', 'f9a'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/sql',
            component: ComponentCreator('/soda/steps/next/tags/sql', 'd59'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/step',
            component: ComponentCreator('/soda/steps/next/tags/step', '508'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/structured-data',
            component: ComponentCreator('/soda/steps/next/tags/structured-data', 'df4'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/tesseract',
            component: ComponentCreator('/soda/steps/next/tags/tesseract', 'ff5'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/tsk',
            component: ComponentCreator('/soda/steps/next/tags/tsk', 'e50'),
            exact: true
          },
          {
            path: '/soda/steps/next/tags/unit',
            component: ComponentCreator('/soda/steps/next/tags/unit', '9a9'),
            exact: true
          },
          {
            path: '/soda/steps/next',
            component: ComponentCreator('/soda/steps/next', '9a1'),
            routes: [
              {
                path: '/soda/steps/next/all',
                component: ComponentCreator('/soda/steps/next/all', '0d6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core',
                component: ComponentCreator('/soda/steps/next/Core', 'b39'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/And',
                component: ComponentCreator('/soda/steps/next/Core/And', '536'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayConcat',
                component: ComponentCreator('/soda/steps/next/Core/ArrayConcat', 'd52'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayDistinct',
                component: ComponentCreator('/soda/steps/next/Core/ArrayDistinct', 'ab1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayElementAtIndex',
                component: ComponentCreator('/soda/steps/next/Core/ArrayElementAtIndex', 'a03'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayFilter',
                component: ComponentCreator('/soda/steps/next/Core/ArrayFilter', '660'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayFind',
                component: ComponentCreator('/soda/steps/next/Core/ArrayFind', 'ec1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayFirst',
                component: ComponentCreator('/soda/steps/next/Core/ArrayFirst', 'f81'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayGroupBy',
                component: ComponentCreator('/soda/steps/next/Core/ArrayGroupBy', 'e7e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayIsEmpty',
                component: ComponentCreator('/soda/steps/next/Core/ArrayIsEmpty', '966'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayLast',
                component: ComponentCreator('/soda/steps/next/Core/ArrayLast', 'ebf'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayLength',
                component: ComponentCreator('/soda/steps/next/Core/ArrayLength', 'b98'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayMap',
                component: ComponentCreator('/soda/steps/next/Core/ArrayMap', '01d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayNew',
                component: ComponentCreator('/soda/steps/next/Core/ArrayNew', '0ea'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayReverse',
                component: ComponentCreator('/soda/steps/next/Core/ArrayReverse', '19d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArraySkip',
                component: ComponentCreator('/soda/steps/next/Core/ArraySkip', '8ee'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArraySort',
                component: ComponentCreator('/soda/steps/next/Core/ArraySort', '128'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ArrayTake',
                component: ComponentCreator('/soda/steps/next/Core/ArrayTake', '2ac'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/AssertEqual',
                component: ComponentCreator('/soda/steps/next/Core/AssertEqual', '633'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/AssertError',
                component: ComponentCreator('/soda/steps/next/Core/AssertError', '2e4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/AssertTrue',
                component: ComponentCreator('/soda/steps/next/Core/AssertTrue', '088'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/CharAtIndex',
                component: ComponentCreator('/soda/steps/next/Core/CharAtIndex', 'f03'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Clone',
                component: ComponentCreator('/soda/steps/next/Core/Clone', 'c9c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ConvertSizeUnits',
                component: ComponentCreator('/soda/steps/next/Core/ConvertSizeUnits', '624'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/DateToString',
                component: ComponentCreator('/soda/steps/next/Core/DateToString', 'b54'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Delay',
                component: ComponentCreator('/soda/steps/next/Core/Delay', '9b0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Divide',
                component: ComponentCreator('/soda/steps/next/Core/Divide', '36a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/DocumentationCreate',
                component: ComponentCreator('/soda/steps/next/Core/DocumentationCreate', 'cb8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/DoNothing',
                component: ComponentCreator('/soda/steps/next/Core/DoNothing', '562'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/DoubleDivide',
                component: ComponentCreator('/soda/steps/next/Core/DoubleDivide', '5fa'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/DoublePower',
                component: ComponentCreator('/soda/steps/next/Core/DoublePower', '2c6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/DoubleProduct',
                component: ComponentCreator('/soda/steps/next/Core/DoubleProduct', '78a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/DoubleSubtract',
                component: ComponentCreator('/soda/steps/next/Core/DoubleSubtract', '59e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/DoubleSum',
                component: ComponentCreator('/soda/steps/next/Core/DoubleSum', '2f7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/EntityCombine',
                component: ComponentCreator('/soda/steps/next/Core/EntityCombine', 'e59'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/EntityFlatten',
                component: ComponentCreator('/soda/steps/next/Core/EntityFlatten', 'e88'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/EntityFormat',
                component: ComponentCreator('/soda/steps/next/Core/EntityFormat', 'aaf'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/EntityGetProperties',
                component: ComponentCreator('/soda/steps/next/Core/EntityGetProperties', '650'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/EntityGetValue',
                component: ComponentCreator('/soda/steps/next/Core/EntityGetValue', '756'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/EntityHasProperty',
                component: ComponentCreator('/soda/steps/next/Core/EntityHasProperty', '021'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/EntityMapProperties',
                component: ComponentCreator('/soda/steps/next/Core/EntityMapProperties', '100'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/EntityRemoveProperty',
                component: ComponentCreator('/soda/steps/next/Core/EntityRemoveProperty', '1cb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/EntitySetValue',
                component: ComponentCreator('/soda/steps/next/Core/EntitySetValue', '18c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/EntityValidateRelations',
                component: ComponentCreator('/soda/steps/next/Core/EntityValidateRelations', '289'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Equals',
                component: ComponentCreator('/soda/steps/next/Core/Equals', '1ad'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/For',
                component: ComponentCreator('/soda/steps/next/Core/For', '169'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/ForEach',
                component: ComponentCreator('/soda/steps/next/Core/ForEach', '264'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/GetApplicationVersion',
                component: ComponentCreator('/soda/steps/next/Core/GetApplicationVersion', '78d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/GetAutomaticVariable',
                component: ComponentCreator('/soda/steps/next/Core/GetAutomaticVariable', 'ed0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/GetConnectorInformation',
                component: ComponentCreator('/soda/steps/next/Core/GetConnectorInformation', 'a5e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/GetSettings',
                component: ComponentCreator('/soda/steps/next/Core/GetSettings', '5c5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/GetVariable',
                component: ComponentCreator('/soda/steps/next/Core/GetVariable', 'a5b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/GreaterThan',
                component: ComponentCreator('/soda/steps/next/Core/GreaterThan', '457'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/GreaterThanOrEqual',
                component: ComponentCreator('/soda/steps/next/Core/GreaterThanOrEqual', 'f1b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Hash',
                component: ComponentCreator('/soda/steps/next/Core/Hash', 'e81'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/HttpRequest',
                component: ComponentCreator('/soda/steps/next/Core/HttpRequest', '2df'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/If',
                component: ComponentCreator('/soda/steps/next/Core/If', '289'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/IncrementVariable',
                component: ComponentCreator('/soda/steps/next/Core/IncrementVariable', 'b6f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/IsNull',
                component: ComponentCreator('/soda/steps/next/Core/IsNull', '632'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/LessThan',
                component: ComponentCreator('/soda/steps/next/Core/LessThan', '643'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/LessThanOrEqual',
                component: ComponentCreator('/soda/steps/next/Core/LessThanOrEqual', 'cd7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Log',
                component: ComponentCreator('/soda/steps/next/Core/Log', '3d8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Modulo',
                component: ComponentCreator('/soda/steps/next/Core/Modulo', '487'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Not',
                component: ComponentCreator('/soda/steps/next/Core/Not', '316'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/NotEquals',
                component: ComponentCreator('/soda/steps/next/Core/NotEquals', 'b5d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Or',
                component: ComponentCreator('/soda/steps/next/Core/Or', '0c3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Power',
                component: ComponentCreator('/soda/steps/next/Core/Power', 'bfb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Print',
                component: ComponentCreator('/soda/steps/next/Core/Print', '2d7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Product',
                component: ComponentCreator('/soda/steps/next/Core/Product', 'f10'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Repeat',
                component: ComponentCreator('/soda/steps/next/Core/Repeat', 'aac'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Round',
                component: ComponentCreator('/soda/steps/next/Core/Round', 'fbd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/RunExternalProcess',
                component: ComponentCreator('/soda/steps/next/Core/RunExternalProcess', '46b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/RunSCL',
                component: ComponentCreator('/soda/steps/next/Core/RunSCL', '053'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/RunStep',
                component: ComponentCreator('/soda/steps/next/Core/RunStep', '4f6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/SchemaCreate',
                component: ComponentCreator('/soda/steps/next/Core/SchemaCreate', '349'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/SchemaCreateCoerced',
                component: ComponentCreator('/soda/steps/next/Core/SchemaCreateCoerced', '2bc'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Sequence',
                component: ComponentCreator('/soda/steps/next/Core/Sequence', '345'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/SetVariable',
                component: ComponentCreator('/soda/steps/next/Core/SetVariable', 'a5f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StandardErrorWrite',
                component: ComponentCreator('/soda/steps/next/Core/StandardErrorWrite', '9b7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StandardInRead',
                component: ComponentCreator('/soda/steps/next/Core/StandardInRead', '412'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StandardOutWrite',
                component: ComponentCreator('/soda/steps/next/Core/StandardOutWrite', '0b5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringAppend',
                component: ComponentCreator('/soda/steps/next/Core/StringAppend', '14f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringContains',
                component: ComponentCreator('/soda/steps/next/Core/StringContains', 'c50'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringFind',
                component: ComponentCreator('/soda/steps/next/Core/StringFind', '5cb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringFindLast',
                component: ComponentCreator('/soda/steps/next/Core/StringFindLast', 'ed0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringInterpolate',
                component: ComponentCreator('/soda/steps/next/Core/StringInterpolate', '608'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringIsEmpty',
                component: ComponentCreator('/soda/steps/next/Core/StringIsEmpty', 'a42'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringJoin',
                component: ComponentCreator('/soda/steps/next/Core/StringJoin', 'c88'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringLength',
                component: ComponentCreator('/soda/steps/next/Core/StringLength', '24d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringMatch',
                component: ComponentCreator('/soda/steps/next/Core/StringMatch', '60d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringReplace',
                component: ComponentCreator('/soda/steps/next/Core/StringReplace', '942'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringSplit',
                component: ComponentCreator('/soda/steps/next/Core/StringSplit', 'd58'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringSubstring',
                component: ComponentCreator('/soda/steps/next/Core/StringSubstring', 'f96'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringToBool',
                component: ComponentCreator('/soda/steps/next/Core/StringToBool', '559'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringToCase',
                component: ComponentCreator('/soda/steps/next/Core/StringToCase', '4b6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringToDate',
                component: ComponentCreator('/soda/steps/next/Core/StringToDate', '7e9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringToDouble',
                component: ComponentCreator('/soda/steps/next/Core/StringToDouble', '943'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringToInt',
                component: ComponentCreator('/soda/steps/next/Core/StringToInt', '4ff'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/StringTrim',
                component: ComponentCreator('/soda/steps/next/Core/StringTrim', '31c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Subtract',
                component: ComponentCreator('/soda/steps/next/Core/Subtract', '580'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Sum',
                component: ComponentCreator('/soda/steps/next/Core/Sum', '4a4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Transform',
                component: ComponentCreator('/soda/steps/next/Core/Transform', 'd52'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Try',
                component: ComponentCreator('/soda/steps/next/Core/Try', '8a5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/Validate',
                component: ComponentCreator('/soda/steps/next/Core/Validate', 'e58'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Core/While',
                component: ComponentCreator('/soda/steps/next/Core/While', '4c3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/ArtifactType',
                component: ComponentCreator('/soda/steps/next/Enums/ArtifactType', '368'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/AutopsyCaseType',
                component: ComponentCreator('/soda/steps/next/Enums/AutopsyCaseType', '93e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/DeduplicateBy',
                component: ComponentCreator('/soda/steps/next/Enums/DeduplicateBy', '9c8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/EncodingEnum',
                component: ComponentCreator('/soda/steps/next/Enums/EncodingEnum', 'd90'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/ErrorBehavior',
                component: ComponentCreator('/soda/steps/next/Enums/ErrorBehavior', 'dc2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/ExportDeduplication',
                component: ComponentCreator('/soda/steps/next/Enums/ExportDeduplication', 'c37'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/ExportSortOrder',
                component: ComponentCreator('/soda/steps/next/Enums/ExportSortOrder', '9ee'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/ExportTraversalStrategy',
                component: ComponentCreator('/soda/steps/next/Enums/ExportTraversalStrategy', '376'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/FileImportType',
                component: ComponentCreator('/soda/steps/next/Enums/FileImportType', 'f7d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/HashAlgorithm',
                component: ComponentCreator('/soda/steps/next/Enums/HashAlgorithm', 'a7d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/ImageFormat',
                component: ComponentCreator('/soda/steps/next/Enums/ImageFormat', '79f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/ItemSetDeduplication',
                component: ComponentCreator('/soda/steps/next/Enums/ItemSetDeduplication', 'fe5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/ItemSortOrder',
                component: ComponentCreator('/soda/steps/next/Enums/ItemSortOrder', 'fcf'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/LoadFileType',
                component: ComponentCreator('/soda/steps/next/Enums/LoadFileType', '7a9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/MatterStatus',
                component: ComponentCreator('/soda/steps/next/Enums/MatterStatus', '943'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/PrintPreviewState',
                component: ComponentCreator('/soda/steps/next/Enums/PrintPreviewState', 'ed1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/SearchScope',
                component: ComponentCreator('/soda/steps/next/Enums/SearchScope', '843'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/SearchType',
                component: ComponentCreator('/soda/steps/next/Enums/SearchType', '787'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/Severity',
                component: ComponentCreator('/soda/steps/next/Enums/Severity', '858'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/SizeUnit',
                component: ComponentCreator('/soda/steps/next/Enums/SizeUnit', 'f9d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/SortEnum',
                component: ComponentCreator('/soda/steps/next/Enums/SortEnum', '4be'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/SortOrder',
                component: ComponentCreator('/soda/steps/next/Enums/SortOrder', '213'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/TextCase',
                component: ComponentCreator('/soda/steps/next/Enums/TextCase', '365'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/TrimSide',
                component: ComponentCreator('/soda/steps/next/Enums/TrimSide', 'd65'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Enums/UpdateBehaviour',
                component: ComponentCreator('/soda/steps/next/Enums/UpdateBehaviour', '39c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem',
                component: ComponentCreator('/soda/steps/next/FileSystem', '56b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem/DeleteItem',
                component: ComponentCreator('/soda/steps/next/FileSystem/DeleteItem', '499'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem/DirectoryCopy',
                component: ComponentCreator('/soda/steps/next/FileSystem/DirectoryCopy', '003'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem/DirectoryCreate',
                component: ComponentCreator('/soda/steps/next/FileSystem/DirectoryCreate', '5d1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem/DirectoryExists',
                component: ComponentCreator('/soda/steps/next/FileSystem/DirectoryExists', '32c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem/DirectoryGetItems',
                component: ComponentCreator('/soda/steps/next/FileSystem/DirectoryGetItems', '5bd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem/DirectoryMove',
                component: ComponentCreator('/soda/steps/next/FileSystem/DirectoryMove', 'd78'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem/FileCopy',
                component: ComponentCreator('/soda/steps/next/FileSystem/FileCopy', 'de2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem/FileExists',
                component: ComponentCreator('/soda/steps/next/FileSystem/FileExists', 'a09'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem/FileExtract',
                component: ComponentCreator('/soda/steps/next/FileSystem/FileExtract', 'd78'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem/FileMove',
                component: ComponentCreator('/soda/steps/next/FileSystem/FileMove', '0f4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem/FileRead',
                component: ComponentCreator('/soda/steps/next/FileSystem/FileRead', '592'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem/FileWrite',
                component: ComponentCreator('/soda/steps/next/FileSystem/FileWrite', '2bb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/FileSystem/PathCombine',
                component: ComponentCreator('/soda/steps/next/FileSystem/PathCombine', 'b65'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Microsoft365',
                component: ComponentCreator('/soda/steps/next/Microsoft365', '9f7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Microsoft365/M365ChannelMessagesRead',
                component: ComponentCreator('/soda/steps/next/Microsoft365/M365ChannelMessagesRead', '194'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Microsoft365/M365ChannelsRead',
                component: ComponentCreator('/soda/steps/next/Microsoft365/M365ChannelsRead', '527'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Microsoft365/M365ChatsRead',
                component: ComponentCreator('/soda/steps/next/Microsoft365/M365ChatsRead', '007'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Microsoft365/M365GetToken',
                component: ComponentCreator('/soda/steps/next/Microsoft365/M365GetToken', 'aed'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Microsoft365/M365Login',
                component: ComponentCreator('/soda/steps/next/Microsoft365/M365Login', 'be6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Microsoft365/M365MailRead',
                component: ComponentCreator('/soda/steps/next/Microsoft365/M365MailRead', 'c95'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Microsoft365/M365TeamsRead',
                component: ComponentCreator('/soda/steps/next/Microsoft365/M365TeamsRead', 'bb3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Microsoft365/M365UsersRead',
                component: ComponentCreator('/soda/steps/next/Microsoft365/M365UsersRead', '314'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix',
                component: ComponentCreator('/soda/steps/next/Nuix', '459'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixAddConcordance',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixAddConcordance', 'cf5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixAddItem',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixAddItem', '36f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixAddToItemSet',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixAddToItemSet', '339'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixAddToProductionSet',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixAddToProductionSet', '3f5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixAnnotateDocumentIdList',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixAnnotateDocumentIdList', '1aa'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixAssertPrintPreviewState',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixAssertPrintPreviewState', '270'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixAssignCustodian',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixAssignCustodian', '55e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixCloseConnection',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixCloseConnection', 'a67'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixCountItems',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixCountItems', 'ba9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixCreateCase',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixCreateCase', '0cc'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixCreateIrregularItemsReport',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixCreateIrregularItemsReport', '7cc'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixCreateNRTReport',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixCreateNRTReport', '414'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixCreateReport',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixCreateReport', '86e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixCreateTermList',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixCreateTermList', '666'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixDoesCaseExist',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixDoesCaseExist', '4d2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixExcludeDecryptedItems',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixExcludeDecryptedItems', '028'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixExportConcordance',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixExportConcordance', '739'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixExtractEntities',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixExtractEntities', 'e16'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixGeneratePrintPreviews',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixGeneratePrintPreviews', '5ca'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixGetAuditedSize',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixGetAuditedSize', '8e1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixGetCaseDetails',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixGetCaseDetails', 'bb3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixGetItemProperties',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixGetItemProperties', '040'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixGetLicenseDetails',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixGetLicenseDetails', 'ca4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixGetVersion',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixGetVersion', 'a68'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixImportDocumentIds',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixImportDocumentIds', '147'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixMigrateCase',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixMigrateCase', '36a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixOpenCase',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixOpenCase', '0ee'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixOpenConnection',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixOpenConnection', '586'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixPerformOCR',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixPerformOCR', '6e5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixRemoveFromItemSet',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixRemoveFromItemSet', 'a90'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixRemoveFromProductionSet',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixRemoveFromProductionSet', 'cd7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixReorderProductionSet',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixReorderProductionSet', '0de'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixRunScript',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixRunScript', '54f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixSearchAndExclude',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixSearchAndExclude', 'a0d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Nuix/NuixSearchAndTag',
                component: ComponentCreator('/soda/steps/next/Nuix/NuixSearchAndTag', '7ab'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Pwsh',
                component: ComponentCreator('/soda/steps/next/Pwsh', 'cd1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Pwsh/PwshRunScript',
                component: ComponentCreator('/soda/steps/next/Pwsh/PwshRunScript', '6be'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Pwsh/PwshRunScriptAsync',
                component: ComponentCreator('/soda/steps/next/Pwsh/PwshRunScriptAsync', 'd2b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity',
                component: ComponentCreator('/soda/steps/next/Relativity', '4f8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityCreateDynamicObjects',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityCreateDynamicObjects', '710'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityCreateField',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityCreateField', 'e2c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityCreateFolder',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityCreateFolder', '80e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityCreateKeywordSearch',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityCreateKeywordSearch', 'c6a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityCreateMatter',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityCreateMatter', '109'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityCreateWorkspace',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityCreateWorkspace', '9eb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityDeleteDocument',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityDeleteDocument', 'a89'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityDeleteKeywordSearch',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityDeleteKeywordSearch', '491'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityDeleteMatter',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityDeleteMatter', '396'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityDeleteUnusedFolders',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityDeleteUnusedFolders', '8bd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityDeleteWorkspace',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityDeleteWorkspace', '495'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityExport',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityExport', '8e8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityGetClients',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityGetClients', '358'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityGetMatterStatuses',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityGetMatterStatuses', 'f63'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityGetSubfolders',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityGetSubfolders', 'b30'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityImport',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityImport', '204'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityImportEntities',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityImportEntities', '15c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityMoveFolder',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityMoveFolder', '91f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityReadKeywordSearch',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityReadKeywordSearch', '7cc'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityRetrieveMatter',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityRetrieveMatter', 'b28'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityRetrieveRootFolder',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityRetrieveRootFolder', '235'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityRetrieveWorkspace',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityRetrieveWorkspace', '5d0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityRetrieveWorkspaceStatistics',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityRetrieveWorkspaceStatistics', 'eb4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativitySendQuery',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativitySendQuery', 'c4d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityUpdateFolder',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityUpdateFolder', '773'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityUpdateMatter',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityUpdateMatter', 'f17'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Relativity/RelativityUpdateObject',
                component: ComponentCreator('/soda/steps/next/Relativity/RelativityUpdateObject', '2e6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Rest',
                component: ComponentCreator('/soda/steps/next/Rest', '615'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Rest/RESTDelete',
                component: ComponentCreator('/soda/steps/next/Rest/RESTDelete', '817'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Rest/RESTGetJSON',
                component: ComponentCreator('/soda/steps/next/Rest/RESTGetJSON', 'ef3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Rest/RESTGetStream',
                component: ComponentCreator('/soda/steps/next/Rest/RESTGetStream', 'dd1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Rest/RESTPatch',
                component: ComponentCreator('/soda/steps/next/Rest/RESTPatch', '961'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Rest/RESTPost',
                component: ComponentCreator('/soda/steps/next/Rest/RESTPost', '073'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Rest/RESTPut',
                component: ComponentCreator('/soda/steps/next/Rest/RESTPut', '181'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Singer',
                component: ComponentCreator('/soda/steps/next/Singer', '5c1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Singer/FromSinger',
                component: ComponentCreator('/soda/steps/next/Singer/FromSinger', '0f9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Sql',
                component: ComponentCreator('/soda/steps/next/Sql', '422'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Sql/CreateMsSQLConnectionString',
                component: ComponentCreator('/soda/steps/next/Sql/CreateMsSQLConnectionString', '4b7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Sql/CreateMySQLConnectionString',
                component: ComponentCreator('/soda/steps/next/Sql/CreateMySQLConnectionString', 'eea'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Sql/CreatePostgresConnectionString',
                component: ComponentCreator('/soda/steps/next/Sql/CreatePostgresConnectionString', '29b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Sql/OpenConnection',
                component: ComponentCreator('/soda/steps/next/Sql/OpenConnection', 'bd4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Sql/SqlCommand',
                component: ComponentCreator('/soda/steps/next/Sql/SqlCommand', '326'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Sql/SqlCreateSchemaFromTable',
                component: ComponentCreator('/soda/steps/next/Sql/SqlCreateSchemaFromTable', '074'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Sql/SqlCreateTable',
                component: ComponentCreator('/soda/steps/next/Sql/SqlCreateTable', '4f8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Sql/SqlInsert',
                component: ComponentCreator('/soda/steps/next/Sql/SqlInsert', '44c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Sql/SqlQuery',
                component: ComponentCreator('/soda/steps/next/Sql/SqlQuery', 'b07'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData',
                component: ComponentCreator('/soda/steps/next/StructuredData', '7c3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/FromConcordance',
                component: ComponentCreator('/soda/steps/next/StructuredData/FromConcordance', '175'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/FromCSV',
                component: ComponentCreator('/soda/steps/next/StructuredData/FromCSV', '997'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/FromIDX',
                component: ComponentCreator('/soda/steps/next/StructuredData/FromIDX', '361'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/FromJson',
                component: ComponentCreator('/soda/steps/next/StructuredData/FromJson', 'c29'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/FromJsonArray',
                component: ComponentCreator('/soda/steps/next/StructuredData/FromJsonArray', '289'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/FromXml',
                component: ComponentCreator('/soda/steps/next/StructuredData/FromXml', 'a4a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/FromXmlArray',
                component: ComponentCreator('/soda/steps/next/StructuredData/FromXmlArray', '5b3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/FromYaml',
                component: ComponentCreator('/soda/steps/next/StructuredData/FromYaml', 'f4c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/ToConcordance',
                component: ComponentCreator('/soda/steps/next/StructuredData/ToConcordance', '270'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/ToCSV',
                component: ComponentCreator('/soda/steps/next/StructuredData/ToCSV', '871'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/ToIDX',
                component: ComponentCreator('/soda/steps/next/StructuredData/ToIDX', '085'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/ToJson',
                component: ComponentCreator('/soda/steps/next/StructuredData/ToJson', 'f7b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/ToJsonArray',
                component: ComponentCreator('/soda/steps/next/StructuredData/ToJsonArray', 'd4e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/ToXml',
                component: ComponentCreator('/soda/steps/next/StructuredData/ToXml', 'dd7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/ToXmlArray',
                component: ComponentCreator('/soda/steps/next/StructuredData/ToXmlArray', 'b54'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/StructuredData/ToYaml',
                component: ComponentCreator('/soda/steps/next/StructuredData/ToYaml', '303'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Tesseract',
                component: ComponentCreator('/soda/steps/next/Tesseract', 'dde'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Tesseract/GetImageFormat',
                component: ComponentCreator('/soda/steps/next/Tesseract/GetImageFormat', '220'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/Tesseract/TesseractOCR',
                component: ComponentCreator('/soda/steps/next/Tesseract/TesseractOCR', '88e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/TSK',
                component: ComponentCreator('/soda/steps/next/TSK', 'ec3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/TSK/AutopsyAddDataSource',
                component: ComponentCreator('/soda/steps/next/TSK/AutopsyAddDataSource', '396'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/TSK/AutopsyCreateNewCase',
                component: ComponentCreator('/soda/steps/next/TSK/AutopsyCreateNewCase', '914'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/TSK/AutopsyGenerateReports',
                component: ComponentCreator('/soda/steps/next/TSK/AutopsyGenerateReports', '4cd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/next/TSK/AutopsyListDataSources',
                component: ComponentCreator('/soda/steps/next/TSK/AutopsyListDataSources', 'a65'),
                exact: true,
                sidebar: "steps"
              }
            ]
          }
        ]
      },
      {
        path: '/soda/steps/v0.16.0',
        component: ComponentCreator('/soda/steps/v0.16.0', 'a91'),
        routes: [
          {
            path: '/soda/steps/v0.16.0/tags',
            component: ComponentCreator('/soda/steps/v0.16.0/tags', 'd2a'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/contents',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/contents', 'a9d'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/core',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/core', 'cef'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/enums',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/enums', 'd75'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/file-system',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/file-system', 'd24'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/nuix',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/nuix', 'f54'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/pwsh',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/pwsh', 'a31'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/relativity',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/relativity', '684'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/rest',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/rest', 'ba4'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/singer',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/singer', 'b20'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/sql',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/sql', '164'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/step',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/step', '9ea'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/structured-data',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/structured-data', '803'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/tesseract',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/tesseract', 'ec9'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/tsk',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/tsk', '16a'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0/tags/unit',
            component: ComponentCreator('/soda/steps/v0.16.0/tags/unit', '6fe'),
            exact: true
          },
          {
            path: '/soda/steps/v0.16.0',
            component: ComponentCreator('/soda/steps/v0.16.0', 'd2a'),
            routes: [
              {
                path: '/soda/steps/v0.16.0/all',
                component: ComponentCreator('/soda/steps/v0.16.0/all', 'd8c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core',
                component: ComponentCreator('/soda/steps/v0.16.0/Core', '433'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/And',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/And', '4ef'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArrayConcat',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArrayConcat', 'd4a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArrayDistinct',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArrayDistinct', '43c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArrayElementAtIndex',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArrayElementAtIndex', '10a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArrayFilter',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArrayFilter', 'c40'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArrayFind',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArrayFind', 'd2a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArrayFirst',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArrayFirst', '78f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArrayGroupBy',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArrayGroupBy', '0b0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArrayIsEmpty',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArrayIsEmpty', '51a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArrayLast',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArrayLast', '01a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArrayLength',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArrayLength', '4b3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArrayMap',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArrayMap', '4cd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArrayNew',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArrayNew', '9e1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArraySkip',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArraySkip', '646'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArraySort',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArraySort', 'c17'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ArrayTake',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ArrayTake', '8e1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/AssertEqual',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/AssertEqual', 'a3d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/AssertError',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/AssertError', '0ac'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/AssertTrue',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/AssertTrue', 'bfd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/CharAtIndex',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/CharAtIndex', 'fd5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Clone',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Clone', '129'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ConvertSizeUnits',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ConvertSizeUnits', '509'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/DateToString',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/DateToString', '880'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Delay',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Delay', '396'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Divide',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Divide', 'eda'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/DocumentationCreate',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/DocumentationCreate', '8fd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/DoNothing',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/DoNothing', '846'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/DoubleDivide',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/DoubleDivide', 'a8f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/DoublePower',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/DoublePower', 'e08'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/DoubleProduct',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/DoubleProduct', 'a68'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/DoubleSubtract',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/DoubleSubtract', '035'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/DoubleSum',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/DoubleSum', 'f32'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/EntityCombine',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/EntityCombine', '301'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/EntityFormat',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/EntityFormat', 'ed2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/EntityGetProperties',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/EntityGetProperties', 'a6e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/EntityGetValue',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/EntityGetValue', '80a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/EntityHasProperty',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/EntityHasProperty', '5b9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/EntityMapProperties',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/EntityMapProperties', '3f9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/EntityRemoveProperty',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/EntityRemoveProperty', 'c01'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/EntitySetValue',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/EntitySetValue', '66f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Equals',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Equals', '828'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/For',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/For', '011'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/ForEach',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/ForEach', '988'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/GetApplicationVersion',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/GetApplicationVersion', '97a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/GetAutomaticVariable',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/GetAutomaticVariable', '2a5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/GetConnectorInformation',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/GetConnectorInformation', '748'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/GetSettings',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/GetSettings', '5c7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/GetVariable',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/GetVariable', '3be'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/GreaterThan',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/GreaterThan', 'fa8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/GreaterThanOrEqual',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/GreaterThanOrEqual', '446'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Hash',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Hash', '6e5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/HttpRequest',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/HttpRequest', '5b6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/If',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/If', '4c6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/IncrementVariable',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/IncrementVariable', '1ec'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/IsNull',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/IsNull', '344'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/LessThan',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/LessThan', '2ae'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/LessThanOrEqual',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/LessThanOrEqual', '817'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Log',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Log', '6a6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Modulo',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Modulo', 'b3c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Not',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Not', 'add'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/NotEquals',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/NotEquals', '94e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Or',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Or', 'ddb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Power',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Power', 'd03'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Print',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Print', '0c4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Product',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Product', '6ca'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Repeat',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Repeat', 'cd8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Round',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Round', 'da8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/RunExternalProcess',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/RunExternalProcess', '206'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/RunSCL',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/RunSCL', '9b7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/RunStep',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/RunStep', 'af9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/SchemaCreate',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/SchemaCreate', '54e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/SchemaCreateCoerced',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/SchemaCreateCoerced', '442'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Sequence',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Sequence', '564'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/SetVariable',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/SetVariable', '3f2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StandardErrorWrite',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StandardErrorWrite', '3b6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StandardInRead',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StandardInRead', '002'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StandardOutWrite',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StandardOutWrite', 'c22'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringAppend',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringAppend', '79d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringContains',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringContains', '6f4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringFind',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringFind', '17f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringFindLast',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringFindLast', 'b84'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringInterpolate',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringInterpolate', 'acd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringIsEmpty',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringIsEmpty', '9fa'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringJoin',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringJoin', '3d2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringLength',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringLength', '056'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringMatch',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringMatch', 'a81'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringReplace',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringReplace', '6ad'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringSplit',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringSplit', '14d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringSubstring',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringSubstring', '05a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringToBool',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringToBool', '48a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringToCase',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringToCase', '179'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringToDate',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringToDate', 'ed5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringToDouble',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringToDouble', 'de4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringToInt',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringToInt', '03f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/StringTrim',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/StringTrim', 'e02'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Subtract',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Subtract', 'f2e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Sum',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Sum', 'ec0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Transform',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Transform', '9c4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Try',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Try', 'af3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/Validate',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/Validate', '6ff'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Core/While',
                component: ComponentCreator('/soda/steps/v0.16.0/Core/While', '0f1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/ArtifactType',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/ArtifactType', '1e8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/AutopsyCaseType',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/AutopsyCaseType', '829'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/DeduplicateBy',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/DeduplicateBy', 'bee'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/EncodingEnum',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/EncodingEnum', '290'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/ErrorBehavior',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/ErrorBehavior', 'f9b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/ExportDeduplication',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/ExportDeduplication', '46b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/ExportSortOrder',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/ExportSortOrder', 'c8e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/ExportTraversalStrategy',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/ExportTraversalStrategy', '2e9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/FileImportType',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/FileImportType', 'f9e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/HashAlgorithm',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/HashAlgorithm', '2cd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/ImageFormat',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/ImageFormat', '994'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/ItemSetDeduplication',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/ItemSetDeduplication', '91c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/ItemSortOrder',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/ItemSortOrder', '4d1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/LoadFileType',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/LoadFileType', '09a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/MatterStatus',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/MatterStatus', 'b2a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/PrintPreviewState',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/PrintPreviewState', 'a60'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/SearchScope',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/SearchScope', '709'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/SearchType',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/SearchType', 'ea7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/Severity',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/Severity', '79e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/SizeUnit',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/SizeUnit', 'd12'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/SortEnum',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/SortEnum', '748'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/SortOrder',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/SortOrder', 'e49'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/TextCase',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/TextCase', '6fd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/TrimSide',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/TrimSide', 'cb9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Enums/UpdateBehaviour',
                component: ComponentCreator('/soda/steps/v0.16.0/Enums/UpdateBehaviour', '792'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem', '7c3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem/DeleteItem',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem/DeleteItem', 'cd3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem/DirectoryCopy',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem/DirectoryCopy', '53c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem/DirectoryCreate',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem/DirectoryCreate', '847'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem/DirectoryExists',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem/DirectoryExists', '616'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem/DirectoryGetItems',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem/DirectoryGetItems', '969'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem/DirectoryMove',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem/DirectoryMove', '9a4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem/FileCopy',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem/FileCopy', '48d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem/FileExists',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem/FileExists', '479'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem/FileExtract',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem/FileExtract', 'fb3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem/FileMove',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem/FileMove', '845'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem/FileRead',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem/FileRead', '993'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem/FileWrite',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem/FileWrite', '8c9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/FileSystem/PathCombine',
                component: ComponentCreator('/soda/steps/v0.16.0/FileSystem/PathCombine', '2cc'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix', '6e2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixAddConcordance',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixAddConcordance', '674'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixAddItem',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixAddItem', '17f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixAddToItemSet',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixAddToItemSet', 'c1a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixAddToProductionSet',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixAddToProductionSet', '963'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixAnnotateDocumentIdList',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixAnnotateDocumentIdList', '666'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixAssertPrintPreviewState',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixAssertPrintPreviewState', 'c76'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixAssignCustodian',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixAssignCustodian', '82d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixCloseConnection',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixCloseConnection', 'c0e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixCountItems',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixCountItems', '047'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixCreateCase',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixCreateCase', '722'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixCreateIrregularItemsReport',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixCreateIrregularItemsReport', '3a3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixCreateNRTReport',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixCreateNRTReport', '10d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixCreateReport',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixCreateReport', '6ca'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixCreateTermList',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixCreateTermList', '062'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixDoesCaseExist',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixDoesCaseExist', 'd22'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixExcludeDecryptedItems',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixExcludeDecryptedItems', '2bb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixExportConcordance',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixExportConcordance', '17c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixExtractEntities',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixExtractEntities', '98e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixGeneratePrintPreviews',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixGeneratePrintPreviews', 'e8d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixGetAuditedSize',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixGetAuditedSize', '8b2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixGetCaseDetails',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixGetCaseDetails', '4e9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixGetItemProperties',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixGetItemProperties', 'eff'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixGetLicenseDetails',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixGetLicenseDetails', 'efb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixGetVersion',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixGetVersion', '76f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixImportDocumentIds',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixImportDocumentIds', '722'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixMigrateCase',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixMigrateCase', '639'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixOpenCase',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixOpenCase', '2d7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixOpenConnection',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixOpenConnection', 'f5c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixPerformOCR',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixPerformOCR', '3e5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixRemoveFromItemSet',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixRemoveFromItemSet', '294'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixRemoveFromProductionSet',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixRemoveFromProductionSet', '0bb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixReorderProductionSet',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixReorderProductionSet', '116'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixRunScript',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixRunScript', '112'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixSearchAndExclude',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixSearchAndExclude', '6bb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Nuix/NuixSearchAndTag',
                component: ComponentCreator('/soda/steps/v0.16.0/Nuix/NuixSearchAndTag', '299'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Pwsh',
                component: ComponentCreator('/soda/steps/v0.16.0/Pwsh', '509'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Pwsh/PwshRunScript',
                component: ComponentCreator('/soda/steps/v0.16.0/Pwsh/PwshRunScript', '200'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Pwsh/PwshRunScriptAsync',
                component: ComponentCreator('/soda/steps/v0.16.0/Pwsh/PwshRunScriptAsync', '2a0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity', '10d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityCreateDynamicObjects',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityCreateDynamicObjects', '58e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityCreateField',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityCreateField', '3b2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityCreateFolder',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityCreateFolder', '4d3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityCreateKeywordSearch',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityCreateKeywordSearch', '4dd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityCreateMatter',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityCreateMatter', 'caf'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityCreateWorkspace',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityCreateWorkspace', 'e99'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityDeleteDocument',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityDeleteDocument', 'ec1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityDeleteKeywordSearch',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityDeleteKeywordSearch', 'e42'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityDeleteMatter',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityDeleteMatter', '458'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityDeleteUnusedFolders',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityDeleteUnusedFolders', '3c0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityDeleteWorkspace',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityDeleteWorkspace', '1ff'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityExport',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityExport', '02f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityGetClients',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityGetClients', '5e2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityGetMatterStatuses',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityGetMatterStatuses', '252'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityGetSubfolders',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityGetSubfolders', 'edd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityImport',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityImport', '349'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityImportEntities',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityImportEntities', '8d4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityMoveFolder',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityMoveFolder', 'fe3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityReadKeywordSearch',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityReadKeywordSearch', '075'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityRetrieveMatter',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityRetrieveMatter', '247'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityRetrieveRootFolder',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityRetrieveRootFolder', '218'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityRetrieveWorkspace',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityRetrieveWorkspace', 'bac'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityRetrieveWorkspaceStatistics',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityRetrieveWorkspaceStatistics', 'c50'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativitySendQuery',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativitySendQuery', '93e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityUpdateFolder',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityUpdateFolder', '04e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityUpdateMatter',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityUpdateMatter', 'f83'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Relativity/RelativityUpdateObject',
                component: ComponentCreator('/soda/steps/v0.16.0/Relativity/RelativityUpdateObject', 'dc6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Rest',
                component: ComponentCreator('/soda/steps/v0.16.0/Rest', 'c7d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Rest/RESTDelete',
                component: ComponentCreator('/soda/steps/v0.16.0/Rest/RESTDelete', '61d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Rest/RESTGetJSON',
                component: ComponentCreator('/soda/steps/v0.16.0/Rest/RESTGetJSON', '45c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Rest/RESTGetStream',
                component: ComponentCreator('/soda/steps/v0.16.0/Rest/RESTGetStream', '94f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Rest/RESTPatch',
                component: ComponentCreator('/soda/steps/v0.16.0/Rest/RESTPatch', 'd10'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Rest/RESTPost',
                component: ComponentCreator('/soda/steps/v0.16.0/Rest/RESTPost', 'f10'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Rest/RESTPut',
                component: ComponentCreator('/soda/steps/v0.16.0/Rest/RESTPut', '91d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Singer',
                component: ComponentCreator('/soda/steps/v0.16.0/Singer', '26f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Singer/FromSinger',
                component: ComponentCreator('/soda/steps/v0.16.0/Singer/FromSinger', '589'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Sql',
                component: ComponentCreator('/soda/steps/v0.16.0/Sql', '9dd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Sql/CreateMsSQLConnectionString',
                component: ComponentCreator('/soda/steps/v0.16.0/Sql/CreateMsSQLConnectionString', '32e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Sql/CreateMySQLConnectionString',
                component: ComponentCreator('/soda/steps/v0.16.0/Sql/CreateMySQLConnectionString', '0a4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Sql/CreatePostgresConnectionString',
                component: ComponentCreator('/soda/steps/v0.16.0/Sql/CreatePostgresConnectionString', '1a8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Sql/OpenConnection',
                component: ComponentCreator('/soda/steps/v0.16.0/Sql/OpenConnection', 'ea4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Sql/SqlCommand',
                component: ComponentCreator('/soda/steps/v0.16.0/Sql/SqlCommand', '05b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Sql/SqlCreateSchemaFromTable',
                component: ComponentCreator('/soda/steps/v0.16.0/Sql/SqlCreateSchemaFromTable', '429'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Sql/SqlCreateTable',
                component: ComponentCreator('/soda/steps/v0.16.0/Sql/SqlCreateTable', '4e6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Sql/SqlInsert',
                component: ComponentCreator('/soda/steps/v0.16.0/Sql/SqlInsert', 'dcc'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Sql/SqlQuery',
                component: ComponentCreator('/soda/steps/v0.16.0/Sql/SqlQuery', 'b59'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData', '548'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/FromConcordance',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/FromConcordance', '64e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/FromCSV',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/FromCSV', '6c2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/FromIDX',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/FromIDX', 'b19'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/FromJson',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/FromJson', '28c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/FromJsonArray',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/FromJsonArray', '25f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/FromXml',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/FromXml', 'a6f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/FromXmlArray',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/FromXmlArray', '5f1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/FromYaml',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/FromYaml', '2f4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/ToConcordance',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/ToConcordance', 'c3e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/ToCSV',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/ToCSV', 'f35'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/ToIDX',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/ToIDX', '3cf'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/ToJson',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/ToJson', 'f13'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/ToJsonArray',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/ToJsonArray', '916'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/ToXml',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/ToXml', '8fd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/ToXmlArray',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/ToXmlArray', '676'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/StructuredData/ToYaml',
                component: ComponentCreator('/soda/steps/v0.16.0/StructuredData/ToYaml', '75f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Tesseract',
                component: ComponentCreator('/soda/steps/v0.16.0/Tesseract', '496'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Tesseract/GetImageFormat',
                component: ComponentCreator('/soda/steps/v0.16.0/Tesseract/GetImageFormat', '6de'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/Tesseract/TesseractOCR',
                component: ComponentCreator('/soda/steps/v0.16.0/Tesseract/TesseractOCR', 'd7c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/TSK',
                component: ComponentCreator('/soda/steps/v0.16.0/TSK', 'fd4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/TSK/AutopsyAddDataSource',
                component: ComponentCreator('/soda/steps/v0.16.0/TSK/AutopsyAddDataSource', '397'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/TSK/AutopsyCreateNewCase',
                component: ComponentCreator('/soda/steps/v0.16.0/TSK/AutopsyCreateNewCase', '677'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/TSK/AutopsyGenerateReports',
                component: ComponentCreator('/soda/steps/v0.16.0/TSK/AutopsyGenerateReports', 'db7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.16.0/TSK/AutopsyListDataSources',
                component: ComponentCreator('/soda/steps/v0.16.0/TSK/AutopsyListDataSources', 'c43'),
                exact: true,
                sidebar: "steps"
              }
            ]
          }
        ]
      },
      {
        path: '/soda/steps/v0.17.0',
        component: ComponentCreator('/soda/steps/v0.17.0', 'ede'),
        routes: [
          {
            path: '/soda/steps/v0.17.0/tags',
            component: ComponentCreator('/soda/steps/v0.17.0/tags', 'df5'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/contents',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/contents', '031'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/core',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/core', '6c5'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/enums',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/enums', 'a97'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/file-system',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/file-system', '780'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/microsoft-365',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/microsoft-365', '551'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/nuix',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/nuix', '235'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/pwsh',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/pwsh', 'e62'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/relativity',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/relativity', '113'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/rest',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/rest', '76e'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/singer',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/singer', 'ab7'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/sql',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/sql', '05d'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/step',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/step', '168'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/structured-data',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/structured-data', '858'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/tesseract',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/tesseract', '917'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/tsk',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/tsk', 'f95'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0/tags/unit',
            component: ComponentCreator('/soda/steps/v0.17.0/tags/unit', '2d7'),
            exact: true
          },
          {
            path: '/soda/steps/v0.17.0',
            component: ComponentCreator('/soda/steps/v0.17.0', 'f7e'),
            routes: [
              {
                path: '/soda/steps/v0.17.0/all',
                component: ComponentCreator('/soda/steps/v0.17.0/all', '1d9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core',
                component: ComponentCreator('/soda/steps/v0.17.0/Core', '8ce'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/And',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/And', '42f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArrayConcat',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArrayConcat', '48e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArrayDistinct',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArrayDistinct', '74e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArrayElementAtIndex',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArrayElementAtIndex', '1cf'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArrayFilter',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArrayFilter', '420'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArrayFind',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArrayFind', 'd67'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArrayFirst',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArrayFirst', '702'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArrayGroupBy',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArrayGroupBy', '055'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArrayIsEmpty',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArrayIsEmpty', '38e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArrayLast',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArrayLast', '235'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArrayLength',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArrayLength', 'c05'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArrayMap',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArrayMap', '961'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArrayNew',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArrayNew', '98b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArraySkip',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArraySkip', '833'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArraySort',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArraySort', 'ffa'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ArrayTake',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ArrayTake', '4cf'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/AssertEqual',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/AssertEqual', '75e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/AssertError',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/AssertError', '1a0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/AssertTrue',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/AssertTrue', 'fad'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/CharAtIndex',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/CharAtIndex', '1a8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Clone',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Clone', '34d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ConvertSizeUnits',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ConvertSizeUnits', '4e2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/DateToString',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/DateToString', '617'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Delay',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Delay', '810'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Divide',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Divide', '2f9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/DocumentationCreate',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/DocumentationCreate', '716'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/DoNothing',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/DoNothing', '25b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/DoubleDivide',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/DoubleDivide', '7d1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/DoublePower',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/DoublePower', 'a19'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/DoubleProduct',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/DoubleProduct', 'c2e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/DoubleSubtract',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/DoubleSubtract', 'bb1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/DoubleSum',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/DoubleSum', 'fe5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/EntityCombine',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/EntityCombine', '72b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/EntityFormat',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/EntityFormat', '52e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/EntityGetProperties',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/EntityGetProperties', '126'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/EntityGetValue',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/EntityGetValue', '3ff'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/EntityHasProperty',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/EntityHasProperty', 'dfe'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/EntityMapProperties',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/EntityMapProperties', '06d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/EntityRemoveProperty',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/EntityRemoveProperty', '12b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/EntitySetValue',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/EntitySetValue', '158'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Equals',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Equals', 'df7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/For',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/For', '598'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/ForEach',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/ForEach', '11d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/GetApplicationVersion',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/GetApplicationVersion', '69b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/GetAutomaticVariable',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/GetAutomaticVariable', '91f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/GetConnectorInformation',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/GetConnectorInformation', '336'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/GetSettings',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/GetSettings', 'fe8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/GetVariable',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/GetVariable', '0c4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/GreaterThan',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/GreaterThan', '241'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/GreaterThanOrEqual',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/GreaterThanOrEqual', 'f01'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Hash',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Hash', 'd1f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/HttpRequest',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/HttpRequest', '6dc'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/If',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/If', '361'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/IncrementVariable',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/IncrementVariable', '38c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/IsNull',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/IsNull', 'd7f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/LessThan',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/LessThan', '12c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/LessThanOrEqual',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/LessThanOrEqual', '85c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Log',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Log', 'e19'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Modulo',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Modulo', '136'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Not',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Not', 'c7f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/NotEquals',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/NotEquals', '202'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Or',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Or', 'b8e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Power',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Power', '8ba'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Print',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Print', 'ccf'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Product',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Product', 'a69'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Repeat',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Repeat', '1e1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Round',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Round', '1ef'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/RunExternalProcess',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/RunExternalProcess', '4bd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/RunSCL',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/RunSCL', '96e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/RunStep',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/RunStep', '011'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/SchemaCreate',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/SchemaCreate', '5cc'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/SchemaCreateCoerced',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/SchemaCreateCoerced', '383'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Sequence',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Sequence', '128'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/SetVariable',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/SetVariable', '4ac'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StandardErrorWrite',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StandardErrorWrite', '130'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StandardInRead',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StandardInRead', 'f69'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StandardOutWrite',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StandardOutWrite', '3a7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringAppend',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringAppend', 'd98'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringContains',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringContains', '58a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringFind',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringFind', '024'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringFindLast',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringFindLast', 'a0a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringInterpolate',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringInterpolate', '942'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringIsEmpty',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringIsEmpty', '72c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringJoin',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringJoin', '7e9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringLength',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringLength', 'b2d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringMatch',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringMatch', 'f4a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringReplace',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringReplace', '8d6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringSplit',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringSplit', '557'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringSubstring',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringSubstring', 'a4f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringToBool',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringToBool', 'dd2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringToCase',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringToCase', 'bf8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringToDate',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringToDate', 'b31'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringToDouble',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringToDouble', '991'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringToInt',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringToInt', 'cf2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/StringTrim',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/StringTrim', 'aad'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Subtract',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Subtract', '034'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Sum',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Sum', 'a74'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Transform',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Transform', 'f50'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Try',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Try', '2df'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/Validate',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/Validate', '678'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Core/While',
                component: ComponentCreator('/soda/steps/v0.17.0/Core/While', '509'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/ArtifactType',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/ArtifactType', 'b0d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/AutopsyCaseType',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/AutopsyCaseType', 'f4c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/DeduplicateBy',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/DeduplicateBy', '79c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/EncodingEnum',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/EncodingEnum', 'f4d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/ErrorBehavior',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/ErrorBehavior', 'dbd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/ExportDeduplication',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/ExportDeduplication', 'f64'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/ExportSortOrder',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/ExportSortOrder', '1b6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/ExportTraversalStrategy',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/ExportTraversalStrategy', '86e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/FileImportType',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/FileImportType', 'b58'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/HashAlgorithm',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/HashAlgorithm', '628'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/ImageFormat',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/ImageFormat', 'fa3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/ItemSetDeduplication',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/ItemSetDeduplication', 'a42'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/ItemSortOrder',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/ItemSortOrder', 'c14'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/LoadFileType',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/LoadFileType', '8d5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/MatterStatus',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/MatterStatus', '695'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/PrintPreviewState',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/PrintPreviewState', '815'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/SearchScope',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/SearchScope', 'da0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/SearchType',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/SearchType', '569'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/Severity',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/Severity', 'd46'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/SizeUnit',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/SizeUnit', '124'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/SortEnum',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/SortEnum', '436'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/SortOrder',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/SortOrder', 'cf0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/TextCase',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/TextCase', 'aef'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/TrimSide',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/TrimSide', '3c7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Enums/UpdateBehaviour',
                component: ComponentCreator('/soda/steps/v0.17.0/Enums/UpdateBehaviour', '881'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem', '931'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem/DeleteItem',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem/DeleteItem', '63f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem/DirectoryCopy',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem/DirectoryCopy', '9f5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem/DirectoryCreate',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem/DirectoryCreate', 'df0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem/DirectoryExists',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem/DirectoryExists', '4a1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem/DirectoryGetItems',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem/DirectoryGetItems', 'b13'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem/DirectoryMove',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem/DirectoryMove', 'caa'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem/FileCopy',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem/FileCopy', '416'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem/FileExists',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem/FileExists', 'dc0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem/FileExtract',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem/FileExtract', '1f1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem/FileMove',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem/FileMove', '544'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem/FileRead',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem/FileRead', 'cbb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem/FileWrite',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem/FileWrite', 'bbb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/FileSystem/PathCombine',
                component: ComponentCreator('/soda/steps/v0.17.0/FileSystem/PathCombine', '343'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Microsoft365',
                component: ComponentCreator('/soda/steps/v0.17.0/Microsoft365', 'aba'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Microsoft365/M365ChannelMessagesRead',
                component: ComponentCreator('/soda/steps/v0.17.0/Microsoft365/M365ChannelMessagesRead', 'c0e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Microsoft365/M365ChannelsRead',
                component: ComponentCreator('/soda/steps/v0.17.0/Microsoft365/M365ChannelsRead', 'd13'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Microsoft365/M365ChatsRead',
                component: ComponentCreator('/soda/steps/v0.17.0/Microsoft365/M365ChatsRead', '887'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Microsoft365/M365GetToken',
                component: ComponentCreator('/soda/steps/v0.17.0/Microsoft365/M365GetToken', '21e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Microsoft365/M365Login',
                component: ComponentCreator('/soda/steps/v0.17.0/Microsoft365/M365Login', '015'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Microsoft365/M365MailRead',
                component: ComponentCreator('/soda/steps/v0.17.0/Microsoft365/M365MailRead', 'b4a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Microsoft365/M365TeamsRead',
                component: ComponentCreator('/soda/steps/v0.17.0/Microsoft365/M365TeamsRead', 'ae9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Microsoft365/M365UsersRead',
                component: ComponentCreator('/soda/steps/v0.17.0/Microsoft365/M365UsersRead', '5f0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix', '138'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixAddConcordance',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixAddConcordance', '510'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixAddItem',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixAddItem', '4fa'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixAddToItemSet',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixAddToItemSet', '4ca'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixAddToProductionSet',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixAddToProductionSet', 'c78'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixAnnotateDocumentIdList',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixAnnotateDocumentIdList', '76d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixAssertPrintPreviewState',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixAssertPrintPreviewState', '1de'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixAssignCustodian',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixAssignCustodian', 'eee'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixCloseConnection',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixCloseConnection', 'b0f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixCountItems',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixCountItems', '7b9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixCreateCase',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixCreateCase', '80d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixCreateIrregularItemsReport',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixCreateIrregularItemsReport', 'aa0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixCreateNRTReport',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixCreateNRTReport', '99b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixCreateReport',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixCreateReport', 'fc4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixCreateTermList',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixCreateTermList', '668'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixDoesCaseExist',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixDoesCaseExist', 'fe9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixExcludeDecryptedItems',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixExcludeDecryptedItems', '91f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixExportConcordance',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixExportConcordance', 'b1c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixExtractEntities',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixExtractEntities', '450'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixGeneratePrintPreviews',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixGeneratePrintPreviews', '2b6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixGetAuditedSize',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixGetAuditedSize', '6a4'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixGetCaseDetails',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixGetCaseDetails', 'def'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixGetItemProperties',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixGetItemProperties', '6ee'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixGetLicenseDetails',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixGetLicenseDetails', 'd75'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixGetVersion',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixGetVersion', 'c25'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixImportDocumentIds',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixImportDocumentIds', '195'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixMigrateCase',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixMigrateCase', 'dee'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixOpenCase',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixOpenCase', '08e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixOpenConnection',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixOpenConnection', 'ff1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixPerformOCR',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixPerformOCR', '1ca'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixRemoveFromItemSet',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixRemoveFromItemSet', 'ac5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixRemoveFromProductionSet',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixRemoveFromProductionSet', '604'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixReorderProductionSet',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixReorderProductionSet', '74a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixRunScript',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixRunScript', '52d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixSearchAndExclude',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixSearchAndExclude', '94a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Nuix/NuixSearchAndTag',
                component: ComponentCreator('/soda/steps/v0.17.0/Nuix/NuixSearchAndTag', 'ab9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Pwsh',
                component: ComponentCreator('/soda/steps/v0.17.0/Pwsh', '14d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Pwsh/PwshRunScript',
                component: ComponentCreator('/soda/steps/v0.17.0/Pwsh/PwshRunScript', '0e0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Pwsh/PwshRunScriptAsync',
                component: ComponentCreator('/soda/steps/v0.17.0/Pwsh/PwshRunScriptAsync', 'b4a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity', 'ecd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityCreateDynamicObjects',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityCreateDynamicObjects', '86d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityCreateField',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityCreateField', 'a8b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityCreateFolder',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityCreateFolder', '888'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityCreateKeywordSearch',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityCreateKeywordSearch', '894'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityCreateMatter',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityCreateMatter', '859'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityCreateWorkspace',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityCreateWorkspace', 'dd9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityDeleteDocument',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityDeleteDocument', '359'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityDeleteKeywordSearch',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityDeleteKeywordSearch', '834'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityDeleteMatter',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityDeleteMatter', '2ef'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityDeleteUnusedFolders',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityDeleteUnusedFolders', 'e55'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityDeleteWorkspace',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityDeleteWorkspace', '980'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityExport',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityExport', 'e38'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityGetClients',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityGetClients', '4e6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityGetMatterStatuses',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityGetMatterStatuses', 'a12'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityGetSubfolders',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityGetSubfolders', '58e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityImport',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityImport', 'ce1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityImportEntities',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityImportEntities', '06f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityMoveFolder',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityMoveFolder', '670'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityReadKeywordSearch',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityReadKeywordSearch', '4b7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityRetrieveMatter',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityRetrieveMatter', '5d0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityRetrieveRootFolder',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityRetrieveRootFolder', '8c0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityRetrieveWorkspace',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityRetrieveWorkspace', '7f1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityRetrieveWorkspaceStatistics',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityRetrieveWorkspaceStatistics', '8f1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativitySendQuery',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativitySendQuery', '1ed'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityUpdateFolder',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityUpdateFolder', '07e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityUpdateMatter',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityUpdateMatter', '882'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Relativity/RelativityUpdateObject',
                component: ComponentCreator('/soda/steps/v0.17.0/Relativity/RelativityUpdateObject', 'e6b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Rest',
                component: ComponentCreator('/soda/steps/v0.17.0/Rest', '67c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Rest/RESTDelete',
                component: ComponentCreator('/soda/steps/v0.17.0/Rest/RESTDelete', '3fc'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Rest/RESTGetJSON',
                component: ComponentCreator('/soda/steps/v0.17.0/Rest/RESTGetJSON', '582'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Rest/RESTGetStream',
                component: ComponentCreator('/soda/steps/v0.17.0/Rest/RESTGetStream', 'fad'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Rest/RESTPatch',
                component: ComponentCreator('/soda/steps/v0.17.0/Rest/RESTPatch', 'aff'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Rest/RESTPost',
                component: ComponentCreator('/soda/steps/v0.17.0/Rest/RESTPost', 'ea8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Rest/RESTPut',
                component: ComponentCreator('/soda/steps/v0.17.0/Rest/RESTPut', '613'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Singer',
                component: ComponentCreator('/soda/steps/v0.17.0/Singer', '5ed'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Singer/FromSinger',
                component: ComponentCreator('/soda/steps/v0.17.0/Singer/FromSinger', '8f7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Sql',
                component: ComponentCreator('/soda/steps/v0.17.0/Sql', '974'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Sql/CreateMsSQLConnectionString',
                component: ComponentCreator('/soda/steps/v0.17.0/Sql/CreateMsSQLConnectionString', '33e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Sql/CreateMySQLConnectionString',
                component: ComponentCreator('/soda/steps/v0.17.0/Sql/CreateMySQLConnectionString', 'db8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Sql/CreatePostgresConnectionString',
                component: ComponentCreator('/soda/steps/v0.17.0/Sql/CreatePostgresConnectionString', 'f83'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Sql/OpenConnection',
                component: ComponentCreator('/soda/steps/v0.17.0/Sql/OpenConnection', '20e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Sql/SqlCommand',
                component: ComponentCreator('/soda/steps/v0.17.0/Sql/SqlCommand', 'f0a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Sql/SqlCreateSchemaFromTable',
                component: ComponentCreator('/soda/steps/v0.17.0/Sql/SqlCreateSchemaFromTable', '65b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Sql/SqlCreateTable',
                component: ComponentCreator('/soda/steps/v0.17.0/Sql/SqlCreateTable', 'b99'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Sql/SqlInsert',
                component: ComponentCreator('/soda/steps/v0.17.0/Sql/SqlInsert', 'bb2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Sql/SqlQuery',
                component: ComponentCreator('/soda/steps/v0.17.0/Sql/SqlQuery', 'fa5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData', '02e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/FromConcordance',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/FromConcordance', '47e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/FromCSV',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/FromCSV', 'f81'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/FromIDX',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/FromIDX', '02f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/FromJson',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/FromJson', 'd9a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/FromJsonArray',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/FromJsonArray', '3ae'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/FromXml',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/FromXml', '7b5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/FromXmlArray',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/FromXmlArray', '0ba'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/FromYaml',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/FromYaml', '2dd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/ToConcordance',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/ToConcordance', '7d6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/ToCSV',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/ToCSV', '25e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/ToIDX',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/ToIDX', '47d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/ToJson',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/ToJson', 'f0c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/ToJsonArray',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/ToJsonArray', '2b9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/ToXml',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/ToXml', '861'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/ToXmlArray',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/ToXmlArray', 'aa7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/StructuredData/ToYaml',
                component: ComponentCreator('/soda/steps/v0.17.0/StructuredData/ToYaml', '813'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Tesseract',
                component: ComponentCreator('/soda/steps/v0.17.0/Tesseract', 'e38'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Tesseract/GetImageFormat',
                component: ComponentCreator('/soda/steps/v0.17.0/Tesseract/GetImageFormat', '023'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/Tesseract/TesseractOCR',
                component: ComponentCreator('/soda/steps/v0.17.0/Tesseract/TesseractOCR', 'd39'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/TSK',
                component: ComponentCreator('/soda/steps/v0.17.0/TSK', '61e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/TSK/AutopsyAddDataSource',
                component: ComponentCreator('/soda/steps/v0.17.0/TSK/AutopsyAddDataSource', '1b2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/TSK/AutopsyCreateNewCase',
                component: ComponentCreator('/soda/steps/v0.17.0/TSK/AutopsyCreateNewCase', '45e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/TSK/AutopsyGenerateReports',
                component: ComponentCreator('/soda/steps/v0.17.0/TSK/AutopsyGenerateReports', '007'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/v0.17.0/TSK/AutopsyListDataSources',
                component: ComponentCreator('/soda/steps/v0.17.0/TSK/AutopsyListDataSources', '91c'),
                exact: true,
                sidebar: "steps"
              }
            ]
          }
        ]
      },
      {
        path: '/soda/steps',
        component: ComponentCreator('/soda/steps', '3b2'),
        routes: [
          {
            path: '/soda/steps/tags',
            component: ComponentCreator('/soda/steps/tags', '9e0'),
            exact: true
          },
          {
            path: '/soda/steps/tags/contents',
            component: ComponentCreator('/soda/steps/tags/contents', 'b58'),
            exact: true
          },
          {
            path: '/soda/steps/tags/core',
            component: ComponentCreator('/soda/steps/tags/core', '08b'),
            exact: true
          },
          {
            path: '/soda/steps/tags/enums',
            component: ComponentCreator('/soda/steps/tags/enums', 'eb9'),
            exact: true
          },
          {
            path: '/soda/steps/tags/file-system',
            component: ComponentCreator('/soda/steps/tags/file-system', 'a1f'),
            exact: true
          },
          {
            path: '/soda/steps/tags/microsoft-365',
            component: ComponentCreator('/soda/steps/tags/microsoft-365', '3f7'),
            exact: true
          },
          {
            path: '/soda/steps/tags/nuix',
            component: ComponentCreator('/soda/steps/tags/nuix', 'c9c'),
            exact: true
          },
          {
            path: '/soda/steps/tags/pwsh',
            component: ComponentCreator('/soda/steps/tags/pwsh', 'b66'),
            exact: true
          },
          {
            path: '/soda/steps/tags/relativity',
            component: ComponentCreator('/soda/steps/tags/relativity', 'c9a'),
            exact: true
          },
          {
            path: '/soda/steps/tags/rest',
            component: ComponentCreator('/soda/steps/tags/rest', 'bd3'),
            exact: true
          },
          {
            path: '/soda/steps/tags/singer',
            component: ComponentCreator('/soda/steps/tags/singer', '62c'),
            exact: true
          },
          {
            path: '/soda/steps/tags/sql',
            component: ComponentCreator('/soda/steps/tags/sql', 'cc7'),
            exact: true
          },
          {
            path: '/soda/steps/tags/step',
            component: ComponentCreator('/soda/steps/tags/step', 'ebe'),
            exact: true
          },
          {
            path: '/soda/steps/tags/structured-data',
            component: ComponentCreator('/soda/steps/tags/structured-data', '317'),
            exact: true
          },
          {
            path: '/soda/steps/tags/tesseract',
            component: ComponentCreator('/soda/steps/tags/tesseract', '67d'),
            exact: true
          },
          {
            path: '/soda/steps/tags/tsk',
            component: ComponentCreator('/soda/steps/tags/tsk', 'e3d'),
            exact: true
          },
          {
            path: '/soda/steps/tags/unit',
            component: ComponentCreator('/soda/steps/tags/unit', '88f'),
            exact: true
          },
          {
            path: '/soda/steps',
            component: ComponentCreator('/soda/steps', '281'),
            routes: [
              {
                path: '/soda/steps/all',
                component: ComponentCreator('/soda/steps/all', '491'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core',
                component: ComponentCreator('/soda/steps/Core', '796'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/And',
                component: ComponentCreator('/soda/steps/Core/And', '060'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayConcat',
                component: ComponentCreator('/soda/steps/Core/ArrayConcat', '2a1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayDistinct',
                component: ComponentCreator('/soda/steps/Core/ArrayDistinct', '999'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayElementAtIndex',
                component: ComponentCreator('/soda/steps/Core/ArrayElementAtIndex', 'e82'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayFilter',
                component: ComponentCreator('/soda/steps/Core/ArrayFilter', '249'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayFind',
                component: ComponentCreator('/soda/steps/Core/ArrayFind', 'eca'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayFirst',
                component: ComponentCreator('/soda/steps/Core/ArrayFirst', '5fd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayGroupBy',
                component: ComponentCreator('/soda/steps/Core/ArrayGroupBy', 'c26'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayIsEmpty',
                component: ComponentCreator('/soda/steps/Core/ArrayIsEmpty', 'ac8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayLast',
                component: ComponentCreator('/soda/steps/Core/ArrayLast', 'a38'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayLength',
                component: ComponentCreator('/soda/steps/Core/ArrayLength', '8e6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayMap',
                component: ComponentCreator('/soda/steps/Core/ArrayMap', '5c8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayNew',
                component: ComponentCreator('/soda/steps/Core/ArrayNew', 'ba6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayReverse',
                component: ComponentCreator('/soda/steps/Core/ArrayReverse', '74d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArraySkip',
                component: ComponentCreator('/soda/steps/Core/ArraySkip', '3e0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArraySort',
                component: ComponentCreator('/soda/steps/Core/ArraySort', 'e4d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ArrayTake',
                component: ComponentCreator('/soda/steps/Core/ArrayTake', '37c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/AssertEqual',
                component: ComponentCreator('/soda/steps/Core/AssertEqual', '5de'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/AssertError',
                component: ComponentCreator('/soda/steps/Core/AssertError', '37b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/AssertTrue',
                component: ComponentCreator('/soda/steps/Core/AssertTrue', 'bc1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/CharAtIndex',
                component: ComponentCreator('/soda/steps/Core/CharAtIndex', '02f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Clone',
                component: ComponentCreator('/soda/steps/Core/Clone', '505'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ConvertSizeUnits',
                component: ComponentCreator('/soda/steps/Core/ConvertSizeUnits', 'f2c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/DateToString',
                component: ComponentCreator('/soda/steps/Core/DateToString', 'eb5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Delay',
                component: ComponentCreator('/soda/steps/Core/Delay', 'cbe'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Divide',
                component: ComponentCreator('/soda/steps/Core/Divide', '29e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/DocumentationCreate',
                component: ComponentCreator('/soda/steps/Core/DocumentationCreate', 'bce'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/DoNothing',
                component: ComponentCreator('/soda/steps/Core/DoNothing', '22b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/DoubleDivide',
                component: ComponentCreator('/soda/steps/Core/DoubleDivide', '146'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/DoublePower',
                component: ComponentCreator('/soda/steps/Core/DoublePower', 'cbc'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/DoubleProduct',
                component: ComponentCreator('/soda/steps/Core/DoubleProduct', '3b2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/DoubleSubtract',
                component: ComponentCreator('/soda/steps/Core/DoubleSubtract', 'd3b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/DoubleSum',
                component: ComponentCreator('/soda/steps/Core/DoubleSum', '3f9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/EntityCombine',
                component: ComponentCreator('/soda/steps/Core/EntityCombine', '0a5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/EntityFlatten',
                component: ComponentCreator('/soda/steps/Core/EntityFlatten', '787'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/EntityFormat',
                component: ComponentCreator('/soda/steps/Core/EntityFormat', 'af9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/EntityGetProperties',
                component: ComponentCreator('/soda/steps/Core/EntityGetProperties', '55e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/EntityGetValue',
                component: ComponentCreator('/soda/steps/Core/EntityGetValue', '51c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/EntityHasProperty',
                component: ComponentCreator('/soda/steps/Core/EntityHasProperty', 'ee0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/EntityMapProperties',
                component: ComponentCreator('/soda/steps/Core/EntityMapProperties', 'dba'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/EntityRemoveProperty',
                component: ComponentCreator('/soda/steps/Core/EntityRemoveProperty', '1ac'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/EntitySetValue',
                component: ComponentCreator('/soda/steps/Core/EntitySetValue', '702'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/EntityValidateRelations',
                component: ComponentCreator('/soda/steps/Core/EntityValidateRelations', '842'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Equals',
                component: ComponentCreator('/soda/steps/Core/Equals', '518'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/For',
                component: ComponentCreator('/soda/steps/Core/For', '649'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/ForEach',
                component: ComponentCreator('/soda/steps/Core/ForEach', '3e6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/GetApplicationVersion',
                component: ComponentCreator('/soda/steps/Core/GetApplicationVersion', 'eb2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/GetAutomaticVariable',
                component: ComponentCreator('/soda/steps/Core/GetAutomaticVariable', '148'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/GetConnectorInformation',
                component: ComponentCreator('/soda/steps/Core/GetConnectorInformation', 'a9b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/GetSettings',
                component: ComponentCreator('/soda/steps/Core/GetSettings', '334'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/GetVariable',
                component: ComponentCreator('/soda/steps/Core/GetVariable', '248'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/GreaterThan',
                component: ComponentCreator('/soda/steps/Core/GreaterThan', '3ff'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/GreaterThanOrEqual',
                component: ComponentCreator('/soda/steps/Core/GreaterThanOrEqual', '04b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Hash',
                component: ComponentCreator('/soda/steps/Core/Hash', '8d6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/HttpRequest',
                component: ComponentCreator('/soda/steps/Core/HttpRequest', 'de1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/If',
                component: ComponentCreator('/soda/steps/Core/If', '87b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/IncrementVariable',
                component: ComponentCreator('/soda/steps/Core/IncrementVariable', '979'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/IsNull',
                component: ComponentCreator('/soda/steps/Core/IsNull', 'ea1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/LessThan',
                component: ComponentCreator('/soda/steps/Core/LessThan', '0fa'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/LessThanOrEqual',
                component: ComponentCreator('/soda/steps/Core/LessThanOrEqual', '8e3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Log',
                component: ComponentCreator('/soda/steps/Core/Log', '13b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Modulo',
                component: ComponentCreator('/soda/steps/Core/Modulo', 'a27'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Not',
                component: ComponentCreator('/soda/steps/Core/Not', '7cd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/NotEquals',
                component: ComponentCreator('/soda/steps/Core/NotEquals', '91f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Or',
                component: ComponentCreator('/soda/steps/Core/Or', '4cf'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Power',
                component: ComponentCreator('/soda/steps/Core/Power', '02b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Print',
                component: ComponentCreator('/soda/steps/Core/Print', '93f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Product',
                component: ComponentCreator('/soda/steps/Core/Product', '8a2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Repeat',
                component: ComponentCreator('/soda/steps/Core/Repeat', '466'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Round',
                component: ComponentCreator('/soda/steps/Core/Round', '6f0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/RunExternalProcess',
                component: ComponentCreator('/soda/steps/Core/RunExternalProcess', '0a6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/RunSCL',
                component: ComponentCreator('/soda/steps/Core/RunSCL', 'a66'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/RunStep',
                component: ComponentCreator('/soda/steps/Core/RunStep', 'ce6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/SchemaCreate',
                component: ComponentCreator('/soda/steps/Core/SchemaCreate', '104'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/SchemaCreateCoerced',
                component: ComponentCreator('/soda/steps/Core/SchemaCreateCoerced', '373'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Sequence',
                component: ComponentCreator('/soda/steps/Core/Sequence', 'd36'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/SetVariable',
                component: ComponentCreator('/soda/steps/Core/SetVariable', '270'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StandardErrorWrite',
                component: ComponentCreator('/soda/steps/Core/StandardErrorWrite', '0aa'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StandardInRead',
                component: ComponentCreator('/soda/steps/Core/StandardInRead', 'ed5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StandardOutWrite',
                component: ComponentCreator('/soda/steps/Core/StandardOutWrite', 'db0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringAppend',
                component: ComponentCreator('/soda/steps/Core/StringAppend', '47c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringContains',
                component: ComponentCreator('/soda/steps/Core/StringContains', '445'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringFind',
                component: ComponentCreator('/soda/steps/Core/StringFind', '50c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringFindLast',
                component: ComponentCreator('/soda/steps/Core/StringFindLast', '188'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringInterpolate',
                component: ComponentCreator('/soda/steps/Core/StringInterpolate', '0ad'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringIsEmpty',
                component: ComponentCreator('/soda/steps/Core/StringIsEmpty', '66b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringJoin',
                component: ComponentCreator('/soda/steps/Core/StringJoin', 'd44'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringLength',
                component: ComponentCreator('/soda/steps/Core/StringLength', '31c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringMatch',
                component: ComponentCreator('/soda/steps/Core/StringMatch', 'a27'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringReplace',
                component: ComponentCreator('/soda/steps/Core/StringReplace', '702'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringSplit',
                component: ComponentCreator('/soda/steps/Core/StringSplit', '311'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringSubstring',
                component: ComponentCreator('/soda/steps/Core/StringSubstring', '9c0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringToBool',
                component: ComponentCreator('/soda/steps/Core/StringToBool', '506'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringToCase',
                component: ComponentCreator('/soda/steps/Core/StringToCase', 'dae'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringToDate',
                component: ComponentCreator('/soda/steps/Core/StringToDate', 'f20'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringToDouble',
                component: ComponentCreator('/soda/steps/Core/StringToDouble', 'f50'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringToInt',
                component: ComponentCreator('/soda/steps/Core/StringToInt', '620'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/StringTrim',
                component: ComponentCreator('/soda/steps/Core/StringTrim', '82e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Subtract',
                component: ComponentCreator('/soda/steps/Core/Subtract', '3ed'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Sum',
                component: ComponentCreator('/soda/steps/Core/Sum', '1e6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Transform',
                component: ComponentCreator('/soda/steps/Core/Transform', 'ecf'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Try',
                component: ComponentCreator('/soda/steps/Core/Try', '6cd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/Validate',
                component: ComponentCreator('/soda/steps/Core/Validate', '969'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Core/While',
                component: ComponentCreator('/soda/steps/Core/While', 'ff6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/ArtifactType',
                component: ComponentCreator('/soda/steps/Enums/ArtifactType', 'e2a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/AutopsyCaseType',
                component: ComponentCreator('/soda/steps/Enums/AutopsyCaseType', 'f58'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/DeduplicateBy',
                component: ComponentCreator('/soda/steps/Enums/DeduplicateBy', 'd39'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/EncodingEnum',
                component: ComponentCreator('/soda/steps/Enums/EncodingEnum', 'd75'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/ErrorBehavior',
                component: ComponentCreator('/soda/steps/Enums/ErrorBehavior', 'f9f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/ExportDeduplication',
                component: ComponentCreator('/soda/steps/Enums/ExportDeduplication', '2cd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/ExportSortOrder',
                component: ComponentCreator('/soda/steps/Enums/ExportSortOrder', '71f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/ExportTraversalStrategy',
                component: ComponentCreator('/soda/steps/Enums/ExportTraversalStrategy', 'b8f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/FileImportType',
                component: ComponentCreator('/soda/steps/Enums/FileImportType', 'ae7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/HashAlgorithm',
                component: ComponentCreator('/soda/steps/Enums/HashAlgorithm', '9f2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/ImageFormat',
                component: ComponentCreator('/soda/steps/Enums/ImageFormat', 'f7a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/ItemSetDeduplication',
                component: ComponentCreator('/soda/steps/Enums/ItemSetDeduplication', '4f6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/ItemSortOrder',
                component: ComponentCreator('/soda/steps/Enums/ItemSortOrder', 'c15'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/LoadFileType',
                component: ComponentCreator('/soda/steps/Enums/LoadFileType', 'ba3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/MatterStatus',
                component: ComponentCreator('/soda/steps/Enums/MatterStatus', '2ad'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/PrintPreviewState',
                component: ComponentCreator('/soda/steps/Enums/PrintPreviewState', '7d0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/SearchScope',
                component: ComponentCreator('/soda/steps/Enums/SearchScope', '1b9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/SearchType',
                component: ComponentCreator('/soda/steps/Enums/SearchType', 'af1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/Severity',
                component: ComponentCreator('/soda/steps/Enums/Severity', '811'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/SizeUnit',
                component: ComponentCreator('/soda/steps/Enums/SizeUnit', '33d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/SortEnum',
                component: ComponentCreator('/soda/steps/Enums/SortEnum', '9f3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/SortOrder',
                component: ComponentCreator('/soda/steps/Enums/SortOrder', '637'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/TextCase',
                component: ComponentCreator('/soda/steps/Enums/TextCase', 'fb2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/TrimSide',
                component: ComponentCreator('/soda/steps/Enums/TrimSide', '7c0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Enums/UpdateBehaviour',
                component: ComponentCreator('/soda/steps/Enums/UpdateBehaviour', '8b0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem',
                component: ComponentCreator('/soda/steps/FileSystem', 'bab'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem/DeleteItem',
                component: ComponentCreator('/soda/steps/FileSystem/DeleteItem', '084'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem/DirectoryCopy',
                component: ComponentCreator('/soda/steps/FileSystem/DirectoryCopy', '594'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem/DirectoryCreate',
                component: ComponentCreator('/soda/steps/FileSystem/DirectoryCreate', 'cbe'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem/DirectoryExists',
                component: ComponentCreator('/soda/steps/FileSystem/DirectoryExists', '7bb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem/DirectoryGetItems',
                component: ComponentCreator('/soda/steps/FileSystem/DirectoryGetItems', 'f8f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem/DirectoryMove',
                component: ComponentCreator('/soda/steps/FileSystem/DirectoryMove', '3f2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem/FileCopy',
                component: ComponentCreator('/soda/steps/FileSystem/FileCopy', '3d1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem/FileExists',
                component: ComponentCreator('/soda/steps/FileSystem/FileExists', '9f8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem/FileExtract',
                component: ComponentCreator('/soda/steps/FileSystem/FileExtract', 'bf6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem/FileMove',
                component: ComponentCreator('/soda/steps/FileSystem/FileMove', '014'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem/FileRead',
                component: ComponentCreator('/soda/steps/FileSystem/FileRead', '3cd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem/FileWrite',
                component: ComponentCreator('/soda/steps/FileSystem/FileWrite', '370'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/FileSystem/PathCombine',
                component: ComponentCreator('/soda/steps/FileSystem/PathCombine', 'b05'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Microsoft365',
                component: ComponentCreator('/soda/steps/Microsoft365', '35b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Microsoft365/M365ChannelMessagesRead',
                component: ComponentCreator('/soda/steps/Microsoft365/M365ChannelMessagesRead', 'f43'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Microsoft365/M365ChannelsRead',
                component: ComponentCreator('/soda/steps/Microsoft365/M365ChannelsRead', 'abb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Microsoft365/M365ChatsRead',
                component: ComponentCreator('/soda/steps/Microsoft365/M365ChatsRead', '1a9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Microsoft365/M365GetToken',
                component: ComponentCreator('/soda/steps/Microsoft365/M365GetToken', '009'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Microsoft365/M365Login',
                component: ComponentCreator('/soda/steps/Microsoft365/M365Login', 'd59'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Microsoft365/M365MailRead',
                component: ComponentCreator('/soda/steps/Microsoft365/M365MailRead', '93f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Microsoft365/M365TeamsRead',
                component: ComponentCreator('/soda/steps/Microsoft365/M365TeamsRead', '4b5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Microsoft365/M365UsersRead',
                component: ComponentCreator('/soda/steps/Microsoft365/M365UsersRead', '60c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix',
                component: ComponentCreator('/soda/steps/Nuix', '779'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixAddConcordance',
                component: ComponentCreator('/soda/steps/Nuix/NuixAddConcordance', '36c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixAddItem',
                component: ComponentCreator('/soda/steps/Nuix/NuixAddItem', '33d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixAddToItemSet',
                component: ComponentCreator('/soda/steps/Nuix/NuixAddToItemSet', '63a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixAddToProductionSet',
                component: ComponentCreator('/soda/steps/Nuix/NuixAddToProductionSet', 'fa3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixAnnotateDocumentIdList',
                component: ComponentCreator('/soda/steps/Nuix/NuixAnnotateDocumentIdList', '93f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixAssertPrintPreviewState',
                component: ComponentCreator('/soda/steps/Nuix/NuixAssertPrintPreviewState', '9ab'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixAssignCustodian',
                component: ComponentCreator('/soda/steps/Nuix/NuixAssignCustodian', 'bd1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixCloseConnection',
                component: ComponentCreator('/soda/steps/Nuix/NuixCloseConnection', '410'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixCountItems',
                component: ComponentCreator('/soda/steps/Nuix/NuixCountItems', '7c5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixCreateCase',
                component: ComponentCreator('/soda/steps/Nuix/NuixCreateCase', '198'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixCreateIrregularItemsReport',
                component: ComponentCreator('/soda/steps/Nuix/NuixCreateIrregularItemsReport', 'a06'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixCreateNRTReport',
                component: ComponentCreator('/soda/steps/Nuix/NuixCreateNRTReport', '16e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixCreateReport',
                component: ComponentCreator('/soda/steps/Nuix/NuixCreateReport', 'e26'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixCreateTermList',
                component: ComponentCreator('/soda/steps/Nuix/NuixCreateTermList', '982'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixDoesCaseExist',
                component: ComponentCreator('/soda/steps/Nuix/NuixDoesCaseExist', 'bc8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixExcludeDecryptedItems',
                component: ComponentCreator('/soda/steps/Nuix/NuixExcludeDecryptedItems', '0a3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixExportConcordance',
                component: ComponentCreator('/soda/steps/Nuix/NuixExportConcordance', 'f0f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixExtractEntities',
                component: ComponentCreator('/soda/steps/Nuix/NuixExtractEntities', '3d9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixGeneratePrintPreviews',
                component: ComponentCreator('/soda/steps/Nuix/NuixGeneratePrintPreviews', '2eb'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixGetAuditedSize',
                component: ComponentCreator('/soda/steps/Nuix/NuixGetAuditedSize', '4d1'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixGetCaseDetails',
                component: ComponentCreator('/soda/steps/Nuix/NuixGetCaseDetails', '484'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixGetItemProperties',
                component: ComponentCreator('/soda/steps/Nuix/NuixGetItemProperties', 'f70'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixGetLicenseDetails',
                component: ComponentCreator('/soda/steps/Nuix/NuixGetLicenseDetails', '33f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixGetVersion',
                component: ComponentCreator('/soda/steps/Nuix/NuixGetVersion', 'f3c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixImportDocumentIds',
                component: ComponentCreator('/soda/steps/Nuix/NuixImportDocumentIds', 'fb3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixMigrateCase',
                component: ComponentCreator('/soda/steps/Nuix/NuixMigrateCase', 'b8e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixOpenCase',
                component: ComponentCreator('/soda/steps/Nuix/NuixOpenCase', 'ca8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixOpenConnection',
                component: ComponentCreator('/soda/steps/Nuix/NuixOpenConnection', '7ac'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixPerformOCR',
                component: ComponentCreator('/soda/steps/Nuix/NuixPerformOCR', 'b76'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixRemoveFromItemSet',
                component: ComponentCreator('/soda/steps/Nuix/NuixRemoveFromItemSet', '2b9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixRemoveFromProductionSet',
                component: ComponentCreator('/soda/steps/Nuix/NuixRemoveFromProductionSet', '535'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixReorderProductionSet',
                component: ComponentCreator('/soda/steps/Nuix/NuixReorderProductionSet', 'a2f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixRunScript',
                component: ComponentCreator('/soda/steps/Nuix/NuixRunScript', '833'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixSearchAndExclude',
                component: ComponentCreator('/soda/steps/Nuix/NuixSearchAndExclude', '63f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Nuix/NuixSearchAndTag',
                component: ComponentCreator('/soda/steps/Nuix/NuixSearchAndTag', 'c64'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Pwsh',
                component: ComponentCreator('/soda/steps/Pwsh', '68c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Pwsh/PwshRunScript',
                component: ComponentCreator('/soda/steps/Pwsh/PwshRunScript', 'f7d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Pwsh/PwshRunScriptAsync',
                component: ComponentCreator('/soda/steps/Pwsh/PwshRunScriptAsync', '528'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity',
                component: ComponentCreator('/soda/steps/Relativity', 'cbf'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityCreateDynamicObjects',
                component: ComponentCreator('/soda/steps/Relativity/RelativityCreateDynamicObjects', '6c6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityCreateField',
                component: ComponentCreator('/soda/steps/Relativity/RelativityCreateField', 'a00'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityCreateFolder',
                component: ComponentCreator('/soda/steps/Relativity/RelativityCreateFolder', '457'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityCreateKeywordSearch',
                component: ComponentCreator('/soda/steps/Relativity/RelativityCreateKeywordSearch', '717'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityCreateMatter',
                component: ComponentCreator('/soda/steps/Relativity/RelativityCreateMatter', '08f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityCreateWorkspace',
                component: ComponentCreator('/soda/steps/Relativity/RelativityCreateWorkspace', '52e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityDeleteDocument',
                component: ComponentCreator('/soda/steps/Relativity/RelativityDeleteDocument', 'de6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityDeleteKeywordSearch',
                component: ComponentCreator('/soda/steps/Relativity/RelativityDeleteKeywordSearch', '09d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityDeleteMatter',
                component: ComponentCreator('/soda/steps/Relativity/RelativityDeleteMatter', 'db9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityDeleteUnusedFolders',
                component: ComponentCreator('/soda/steps/Relativity/RelativityDeleteUnusedFolders', '1bd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityDeleteWorkspace',
                component: ComponentCreator('/soda/steps/Relativity/RelativityDeleteWorkspace', '4bf'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityExport',
                component: ComponentCreator('/soda/steps/Relativity/RelativityExport', '552'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityGetClients',
                component: ComponentCreator('/soda/steps/Relativity/RelativityGetClients', 'd11'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityGetMatterStatuses',
                component: ComponentCreator('/soda/steps/Relativity/RelativityGetMatterStatuses', 'f7e'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityGetSubfolders',
                component: ComponentCreator('/soda/steps/Relativity/RelativityGetSubfolders', 'e43'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityImport',
                component: ComponentCreator('/soda/steps/Relativity/RelativityImport', '70d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityImportEntities',
                component: ComponentCreator('/soda/steps/Relativity/RelativityImportEntities', '8a5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityMoveFolder',
                component: ComponentCreator('/soda/steps/Relativity/RelativityMoveFolder', '948'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityReadKeywordSearch',
                component: ComponentCreator('/soda/steps/Relativity/RelativityReadKeywordSearch', '47b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityRetrieveMatter',
                component: ComponentCreator('/soda/steps/Relativity/RelativityRetrieveMatter', '60b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityRetrieveRootFolder',
                component: ComponentCreator('/soda/steps/Relativity/RelativityRetrieveRootFolder', '778'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityRetrieveWorkspace',
                component: ComponentCreator('/soda/steps/Relativity/RelativityRetrieveWorkspace', '183'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityRetrieveWorkspaceStatistics',
                component: ComponentCreator('/soda/steps/Relativity/RelativityRetrieveWorkspaceStatistics', '3d7'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativitySendQuery',
                component: ComponentCreator('/soda/steps/Relativity/RelativitySendQuery', '987'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityUpdateFolder',
                component: ComponentCreator('/soda/steps/Relativity/RelativityUpdateFolder', '339'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityUpdateMatter',
                component: ComponentCreator('/soda/steps/Relativity/RelativityUpdateMatter', '730'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Relativity/RelativityUpdateObject',
                component: ComponentCreator('/soda/steps/Relativity/RelativityUpdateObject', '580'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Rest',
                component: ComponentCreator('/soda/steps/Rest', '1cf'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Rest/RESTDelete',
                component: ComponentCreator('/soda/steps/Rest/RESTDelete', '33f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Rest/RESTGetJSON',
                component: ComponentCreator('/soda/steps/Rest/RESTGetJSON', '8a9'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Rest/RESTGetStream',
                component: ComponentCreator('/soda/steps/Rest/RESTGetStream', 'fe2'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Rest/RESTPatch',
                component: ComponentCreator('/soda/steps/Rest/RESTPatch', 'ffd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Rest/RESTPost',
                component: ComponentCreator('/soda/steps/Rest/RESTPost', 'fb3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Rest/RESTPut',
                component: ComponentCreator('/soda/steps/Rest/RESTPut', '720'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Singer',
                component: ComponentCreator('/soda/steps/Singer', '0c8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Singer/FromSinger',
                component: ComponentCreator('/soda/steps/Singer/FromSinger', '72c'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Sql',
                component: ComponentCreator('/soda/steps/Sql', '11f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Sql/CreateMsSQLConnectionString',
                component: ComponentCreator('/soda/steps/Sql/CreateMsSQLConnectionString', 'bbd'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Sql/CreateMySQLConnectionString',
                component: ComponentCreator('/soda/steps/Sql/CreateMySQLConnectionString', '960'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Sql/CreatePostgresConnectionString',
                component: ComponentCreator('/soda/steps/Sql/CreatePostgresConnectionString', '582'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Sql/OpenConnection',
                component: ComponentCreator('/soda/steps/Sql/OpenConnection', 'c46'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Sql/SqlCommand',
                component: ComponentCreator('/soda/steps/Sql/SqlCommand', '1b5'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Sql/SqlCreateSchemaFromTable',
                component: ComponentCreator('/soda/steps/Sql/SqlCreateSchemaFromTable', '99d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Sql/SqlCreateTable',
                component: ComponentCreator('/soda/steps/Sql/SqlCreateTable', '480'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Sql/SqlInsert',
                component: ComponentCreator('/soda/steps/Sql/SqlInsert', '081'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Sql/SqlQuery',
                component: ComponentCreator('/soda/steps/Sql/SqlQuery', 'c15'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData',
                component: ComponentCreator('/soda/steps/StructuredData', '798'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/FromConcordance',
                component: ComponentCreator('/soda/steps/StructuredData/FromConcordance', '57d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/FromCSV',
                component: ComponentCreator('/soda/steps/StructuredData/FromCSV', '376'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/FromIDX',
                component: ComponentCreator('/soda/steps/StructuredData/FromIDX', 'af6'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/FromJson',
                component: ComponentCreator('/soda/steps/StructuredData/FromJson', '983'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/FromJsonArray',
                component: ComponentCreator('/soda/steps/StructuredData/FromJsonArray', '6db'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/FromXml',
                component: ComponentCreator('/soda/steps/StructuredData/FromXml', '77a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/FromXmlArray',
                component: ComponentCreator('/soda/steps/StructuredData/FromXmlArray', '143'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/FromYaml',
                component: ComponentCreator('/soda/steps/StructuredData/FromYaml', 'd55'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/ToConcordance',
                component: ComponentCreator('/soda/steps/StructuredData/ToConcordance', 'd40'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/ToCSV',
                component: ComponentCreator('/soda/steps/StructuredData/ToCSV', '9b0'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/ToIDX',
                component: ComponentCreator('/soda/steps/StructuredData/ToIDX', 'f96'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/ToJson',
                component: ComponentCreator('/soda/steps/StructuredData/ToJson', '26b'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/ToJsonArray',
                component: ComponentCreator('/soda/steps/StructuredData/ToJsonArray', '62f'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/ToXml',
                component: ComponentCreator('/soda/steps/StructuredData/ToXml', 'a81'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/ToXmlArray',
                component: ComponentCreator('/soda/steps/StructuredData/ToXmlArray', '568'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/StructuredData/ToYaml',
                component: ComponentCreator('/soda/steps/StructuredData/ToYaml', '7d3'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Tesseract',
                component: ComponentCreator('/soda/steps/Tesseract', 'f8a'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Tesseract/GetImageFormat',
                component: ComponentCreator('/soda/steps/Tesseract/GetImageFormat', 'ade'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/Tesseract/TesseractOCR',
                component: ComponentCreator('/soda/steps/Tesseract/TesseractOCR', '61d'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/TSK',
                component: ComponentCreator('/soda/steps/TSK', '270'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/TSK/AutopsyAddDataSource',
                component: ComponentCreator('/soda/steps/TSK/AutopsyAddDataSource', '242'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/TSK/AutopsyCreateNewCase',
                component: ComponentCreator('/soda/steps/TSK/AutopsyCreateNewCase', '209'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/TSK/AutopsyGenerateReports',
                component: ComponentCreator('/soda/steps/TSK/AutopsyGenerateReports', '2e8'),
                exact: true,
                sidebar: "steps"
              },
              {
                path: '/soda/steps/TSK/AutopsyListDataSources',
                component: ComponentCreator('/soda/steps/TSK/AutopsyListDataSources', '035'),
                exact: true,
                sidebar: "steps"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/soda/',
    component: ComponentCreator('/soda/', 'f5e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
