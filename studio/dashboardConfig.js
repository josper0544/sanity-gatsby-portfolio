export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5cff09ea89e1dd9445e19485',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4debwivo',
                  apiId: '9e787bd7-b687-4352-bacf-a5758e0d0182'
                },
                {
                  buildHookId: '5cff09ea48b5b7ffc68d0fe2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vxxhi9x6',
                  apiId: '18a5e1bc-0d56-452d-9cd2-b4c318d3d51a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josper0544/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-vxxhi9x6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
