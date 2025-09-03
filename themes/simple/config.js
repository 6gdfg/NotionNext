const CONFIG = {

  SIMPLE_LOGO_IMG: 'https://imgbed.6gdfg.tech/file/1756903281338_8076acd083c2efe70aeda6b756d64d5.jpg',
  SIMPLE_TOP_BAR: true, // 显示顶栏
  SIMPLE_TOP_BAR_CONTENT: process.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS || '',
  SIMPLE_LOGO_DESCRIPTION: process.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION || '<div>爱过生日的集体<br/>/团结 友善 进取</div>',

  SIMPLE_AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#',

  SIMPLE_POST_AD_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_AD_ENABLE || false, // 文章列表是否插入广告

  SIMPLE_POST_COVER_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_COVER_ENABLE || false, // 是否展示博客封面

  SIMPLE_ARTICLE_RECOMMEND_POSTS: process.env.NEXT_PUBLIC_SIMPLE_ARTICLE_RECOMMEND_POSTS || true, // 文章详情底部显示推荐

  // 菜单配置
  SIMPLE_MENU_CATEGORY: true, // 显示分类
  SIMPLE_MENU_TAG: true, // 显示标签
  SIMPLE_MENU_ARCHIVE: true, // 显示归档
  SIMPLE_MENU_SEARCH: true // 显示搜索
}
export default CONFIG
