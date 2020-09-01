export default {
  widgets: [
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
                  buildHookId: '5f4ec7d7dc3b0c00edaade06',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-avdwysit',
                  apiId: 'a342738e-cfc1-45c8-9c43-210b76e603a2'
                },
                {
                  buildHookId: '5f4ec7d7b4a6eb0159a7f0ab',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-d769uyjc',
                  apiId: '5a3c61e0-fe8e-41d6-8885-588425c8a17c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alotoftype/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-d769uyjc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
