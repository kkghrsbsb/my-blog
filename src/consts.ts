import type { IconMap, SocialLink, Site } from '@/types'

// todo: metadata
export const SITE: Site = {
  title: 'kkghrsbsb\'s note',
  description:
    '一个以理性与系统思考为核心的技术笔记站，记录学习、实践与反思。',
  href: 'https://kkghrsbsb.com',
  author: 'kkghrsbsb',
  locale: 'zh-CN',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/kkghrsbsb',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/kkghrsbsb',
    label: 'Twitter',
  },
  {
    href: '395508188@qq.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
