// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]
module.exports = {
    siteName: 'distributeddatacloud',
  siteDescription: 'A simple, hackable & minimalistic starter for Gridsome that uses Netlify CMS for content.',

  templates: {
        Post: '/:title'
    },
    plugins: [
        {
            use: 'gridsome-transformer-netlify',
            options: {
                imageKey: 'image',
                markdownKey: 'body'
            }
        },
        {
            use: 'gridsome-plugin-netlify-cms',
            options: {
                publicPath: '/admin',
                htmlPath: './src/admin/index.html',
                modulePath: './src/admin/index.js',
            }
        },
              {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/authors/*.md',
                typeName: 'Author',
                route: '/our-authors/:name',
                  template: './src/templates/Authors.vue',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/pages/**/*.yml',
                typeName: 'Pages',
                remark: {
                    plugins: [
                        // ...local plugins
                    ]
                }
            }
        },
        {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
          path: 'content/posts/*.md',
          refs: {
    //          author: 'Author',
              author: {
                  typeName: 'Author',
                  route: '/authors/:id',
                  template: './src/templates/Authors.vue',
                  create: true
              },
              categories: {
                  typeName: 'Category',
                  route: '/categories/:id',
                  template: './src/templates/Category.vue',
                  create: true
              },
          }
      }
        },
  ],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
