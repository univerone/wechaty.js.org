const CHATBOT_1_TO_2 = require('./sidebar-chatbot-1-to-2.js')

module.exports = {
  docs: {
    Introduction: [
      'introduction/README',
      'introduction/multi-language',
      'introduction/puppet',
      'introduction/motivations',
      'introduction/concepts',
      'introduction/architecture',
      'introduction/lifecycle',
      'examples',
      'examples2',
      'introduction/alternatives',
    ],
    'Getting Started': [
      'getting-started',
    ],
    Tutorials: [
      'tutorials/README',
      'tutorials/video-tutorial',
      CHATBOT_1_TO_2,
    ],
    Recipes: [
      'recipes/README',
      'recipes/configure-wechaty',
      'recipes/usage-with-typescript',
      'recipes/usage-with-docker',
      'recipes/usage-with-heroku',
      'recipes/using-plugin-with-wechaty',
      'recipes/using-vorpal-with-wechaty',
      'recipes/using-redux-with-wechaty',
    ],
    'Case Study': [
      'case-study/README',
      'case-study/friday-bot',
      'case-study/osschat-bot',
      'case-study/rui-bot',
      'case-study/projects-using-wechaty',
    ],
    'Puppet Services': [
      'puppet-services/README',
      'puppet-services/wxwork',
      'puppet-services/padlocal',
      'puppet-services/paimon',
      'puppet-services/donut',
    ],
    'Contributor Program': [
      'contributor-program/README',
      'contributor-program/publish-blog',
    ],
    'Events': [
      'events/README',
      'events/bot5/README',
      {
        type: 'category',
        label: '开源软件供应链点亮计划',
        items: [
          'events/ospp/README',
          'events/ospp/2021',
          'events/ospp/2020',
        ],
      },
      {
        type: 'category',
        label: 'Google Summer of Code',
        items: [
          'events/gsoc/README',
          'events/gsoc/2021',
        ],
      },
      'events/gsod/README',
    ],
    'API Reference': [
      'api/README',
      'api/wechaty',
      'api/message',
      'api/contact',
      'api/room',
      'api/room-invitation',
      'api/friendship',
    ],
    Specifications: [
      'specifications/README',
      'specifications/wechaty',
      'specifications/puppet',
      'specifications/service',
      'specifications/token',
    ],
    FAQ: ['faq'],
    Troubleshooting: [
      'troubleshooting',
    ],
    Others: [
      'changelog',
      'others/cheatsheet',
      'awesome-wechaty',
      'advanced',
      'resources',
      'glossary',
      'contributing',
      {
        type: 'category',
        label: 'Docusaurus',
        items: [
          'test/doc1',
          'test/doc2',
          'test/doc3',
          'test/mdx',
        ],
      },
    ],
  },
}
