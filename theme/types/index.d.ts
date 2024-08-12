import type { DefaultTheme } from 'valaxy'

export namespace FrostiTheme {
  export type Config = ThemeConfig
  export type Sidebar = any
}

/**
 * Theme Config
 */
export interface ThemeConfig extends DefaultTheme.Config {
  theme: {
    light: 'dracula' | 'winter'
    dark: 'dracula' | 'winter'
  }

  dateFormat: string

  infoTest: {
    tag: string
    noTag: string
    tagCard: string
    tagPage: string
    noCategory: string
    categoryCard: string
    categoryPage: string
    link: string
    prevPage: string
    nextPage: string
  }

  /**
   * Menu items for navigation
   */
  menuItems: MenuItem[]

  /**
   * Social media and contact icons
   */
  socialIcons: SocialIcon[]

  colors: {
    /**
     * primary color
     * @default '#0078E7'
     */
    primary: string
  }

  /**
   * footer
   */
  footer: Partial<{
    /**
     * 建站于
     */
    since: number

    /**
     * Icon between year and copyright info.
     */
    icon: {
      /**
       * icon name, i-xxx
       */
      name: string
      animated: boolean
      color: string
      url: string
      title: string
    }

    /**
     * Powered by valaxy & valaxy-theme-${name}, default is yun
     */
    powered: boolean

    /**
     * Chinese Users | 中国用户
     * 备案 ICP
     * 国内用户需要在网站页脚展示备案 ICP 号
     * https://beian.miit.gov.cn/
     */
    beian: {
      enable: boolean
      /**
       * 苏ICP备xxxxxxxx号
       */
      icp: string
    }
  }>
}

export interface MenuItem {
  id: string
  text: string
  href: string
  icon?: string
  target: '_self' | '_blank'
  subItems?: MenuItem[]
}

export interface SocialIcon {
  href: string
  ariaLabel: string
  title: string
  icon: string
}

export type ThemeUserConfig = Partial<ThemeConfig>
