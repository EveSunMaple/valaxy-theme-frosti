import type { Plugin } from 'vite'
import type { ResolvedValaxyOptions } from 'valaxy'
import type { ThemeConfig } from '../types'

/**
 * Default Config
 */
export const defaultThemeConfig: ThemeConfig = {
  valaxyDarkOptions: {
    circleTransition: true,
  },

  colors: {
    primary: '#0078E7',
  },

  theme: {
    light: 'winter',
    dark: 'winter',
  },

  dateFormat: 'ddd MMM DD YYYY',

  infoTest: {
    tag: 'Tag: ',
    noTag: 'untagged',
    tagCard: 'Tags',
    tagPage: 'Tag - ',
    noCategory: 'uncategorized',
    categoryCard: 'Categories',
    categoryPage: 'Category - ',
    link: 'Link: ',
    prevPage: 'Recent posts',
    nextPage: 'Older posts',
  },

  menuItems: [],

  socialIcons: [],

  footer: {
    since: 2022,
    icon: {
      name: 'i-ri-cloud-line',
      animated: true,
      color: 'var(--va-c-primary)',
      url: 'https://sponsors.yunyoujun.cn',
      title: 'Sponsor YunYouJun',
    },

    powered: true,

    beian: {
      enable: false,
      icp: '',
    },
  },

}

// write a vite plugin
// https://vitejs.dev/guide/api-plugin.html
export function themePlugin(options: ResolvedValaxyOptions<ThemeConfig>): Plugin {
  const themeConfig = options.config.themeConfig || {}

  return {
    name: 'valaxy-theme-starter',

    config() {
      return {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: `$c-primary: ${themeConfig.colors?.primary || '#0078E7'} !default;`,
            },
          },
        },

        valaxy: {},
      }
    },
  }
}

/**
 * generateSafelist by config
 * @param themeConfig
 */
export function generateSafelist(themeConfig: ThemeConfig) {
  const safelist: string[] = []

  const footerIcon = themeConfig.footer?.icon?.name
  if (footerIcon)
    safelist.push(footerIcon)

  themeConfig.menuItems?.forEach((menuItems) => {
    if (typeof menuItems !== 'string' && menuItems.icon)
      safelist.push(menuItems.icon)
  })

  themeConfig.socialIcons?.forEach((socialIcons) => {
    if (typeof socialIcons !== 'string' && socialIcons.icon)
      safelist.push(socialIcons.icon)
  })

  return safelist
}
