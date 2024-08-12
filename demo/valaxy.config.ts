import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-frosti'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'starter',

  themeConfig: {
    menuItems: [
      { id: 'home', text: 'Home', href: '/', icon: 'i-solar-home-smile-linear', target: '_self' }, // Home page
      { id: 'about', text: 'About', href: '/about', icon: 'i-solar-question-circle-linear', target: '_self' }, // About page
      {
        id: 'blog',
        text: 'Blogs',
        href: '/blog',
        icon: 'i-solar-book-2-linear',
        target: '_self',
        subItems: [
          {
            id: 'all',
            text: 'All blogs',
            href: '/blog',
            target: '_self',
          }, // All blog
          {
            id: 'tech',
            text: 'Tech blogs',
            href: '/blog/categories/tech',
            target: '_self',
          }, // Technology category
          {
            id: 'life',
            text: 'Life blogs',
            href: '/blog/categories/life',
            target: '_self',
          }, // Life category
        ],
      }, // Blog page with sub-items
      {
        id: 'project',
        text: 'Project',
        href: '/project',
        icon: 'i-solar-code-bold',
        target: '_self',
      }, // Projects page
      {
        id: 'friend',
        text: 'Friend',
        href: '/friend',
        icon: 'i-solar-user-heart-broken',
        target: '_self',
      }, // Friends page
      {
        id: 'contact',
        text: 'Contact',
        href: 'mailto:contact.evesunmaple@outlook.com', // Contact email
        icon: 'i-solar-letter-linear',
        target: '_blank', // Open in a new tab
      },
    ],

    socialIcons: [
      {
        href: 'https://afdian.net/a/saroprock',
        ariaLabel: 'Support my work',
        title: 'Support my work',
        icon: 'i-ant-design-heart-twotone',
      },
      {
        href: 'https://github.com/EveSunMaple',
        ariaLabel: 'Github',
        title: 'Github',
        icon: 'i-ant-design-github-filled',
      },
      {
        href: 'https://space.bilibili.com/438392347',
        ariaLabel: 'BiliBili',
        title: 'BiliBili',
        icon: 'i-ant-design-bilibili-outlined',
      },
      {
        href: '/rss.xml',
        ariaLabel: 'RSS Feed',
        title: 'RSS Feed',
        icon: 'i-ri-rss-line',
      },
    ],

    footer: {
      since: 2016,
    },
  },
})
