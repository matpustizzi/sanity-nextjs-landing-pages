export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e91b605577652ab6f818b84',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4bhm8sss',
                  apiId: 'e2e3ae35-c82c-4932-b408-7af6ff33249f'
                },
                {
                  buildHookId: '5e91b6055776527a41818ff1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-u2qkgdma',
                  apiId: '955dffdb-8fc8-49fc-a6cf-38ff7835d130'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matpustizzi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-u2qkgdma.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
