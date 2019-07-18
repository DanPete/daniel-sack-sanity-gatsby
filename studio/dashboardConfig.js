export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d30f63a37b463b7ffc2e000',
                  title: 'Sanity Studio',
                  name: 'daniel-sack-sanity-gatsby-studio',
                  apiId: '69c1c312-5683-4ae7-bd2f-0a74937fac5f'
                },
                {
                  buildHookId: '5d30f63aecd51425f54154fe',
                  title: 'Blog Website',
                  name: 'daniel-sack-sanity-gatsby',
                  apiId: '493a7a5d-ae41-4a19-bf96-609688ff10d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanPete/daniel-sack-sanity-gatsby',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://daniel-sack-sanity-gatsby.netlify.com', category: 'apps'}
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
