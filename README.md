# UI Component Of Dumi

## 项目预览

```JavaScript
  npm install

  npm run start
```

## 项目介绍

框架语言基于`react`，`markdown`负责自定义组件文档，通过 [father](!https://github.com/umijs/father) 进行打包。

1. [主题](https://d.umijs.org/zh-CN/theme)  
   目前提供了 3 种主题，目前主题的切换和依赖的适配还存在比较大的问题，切换只能通过安装与卸载 `npm` 包的形式进行，且主题包依赖的 `react` 版本较低，在 `16.3.0 ~ 17.0.0` 之间，而核心包 `dumi` 依赖的 `react` 已是 `18.x`。
   - `pc`，默认主题
   - `mobile`， 移动端主题
   - `mobile`，doc 类型的主题，[预览地址](https://panel-docs.tuyacn.com/docs/getting-started)
   ```JavaScript
   // 切换主题
   npm i dumi-theme-[theme-name] -D --legacy-peer-deps
   // 重启项目
   ```
   除去官方提供的主题，也可自己开发对应的主题，对应的文件位置为 `.dumi/theme`，[主题相关 API](https://d.umijs.org/zh-CN/theme/api)，且主题的开发的增量式的，最后形成的主题会与官方默认的做一个合并处理，对自定义中为提供到的必要文件，会由官方的文件进行兜底。
2. [配置](https://d.umijs.org/zh-CN/config)  
   配置主要可将其分为文档内容与项目构建两大块，配置文件默认为根目录下的 `.umirc.ts`，此文件通过脚手架会自动生成，官方文档说也可放在 `config/config.ts`，验证后构建后优先会寻找 `.umirc.ts` 文件，当 `.umirc.ts` 不存在时 `config.ts` 才起作用。

   **文档内容相关配置**

   | 配置名 | 作用 |
   | :-- | :-- |
   | apiParser | 文档 API 解析行为 |
   | description | 仅在 doc 类型下有效，提供整个文档的描述信息 |
   | logo | 文档的图标，支持本地和远程图片，默认为官方的图标 |
   | locals | 多语言配置，每项为长度为 2 的二维数组，第 1 项作为文件匹配的 key，第 2 项 作为文档切换语言的 label，默认为 `[['en-US', 'English'], ['zh-CN', '中文']]` |
   | mode | `doc \| site`，文档模式或者站点模式，此配置会影响其他一些配置的有效性，默认为 `doc` |
   | menus | 左侧菜单的增量式自定义配置，支持对单独语言的配置，默认不配置为默认生成的组件目录，仅在 site 类型有效 |
   | navs | 上方导航栏增量式自定义配置，首项值为 null 时会继承项目中 `markdown`中 的 nav， 例如[指南](/docs/guide/introduce.md)，支持多级菜单的配置 |
   | title | 文档名称，默认为 package.json 中 的 name |
   | themeConfig | 当前主题自定义配置，对于移动端可配置屏幕的一些适配规则 |

   **项目构建相关配置**

   | 配置名       | 作用                                                                |
   | :----------- | :------------------------------------------------------------------ |
   | apiParser    | 文档 API 解析行                                                     |
   | analyze      | 包模块结构分析工具，可以看到项目各模块的大小，按需优化              |
   | autoprefixer | 样式属性的兼容性处理                                                |
   | base         | 路由前缀，默认为 `/`                                                |
   | cssLoader    | [css-loader](https://github.com/webpack-contrib/css-loader#options) |
   | styles       | 额外的全局样式                                                      |

3. [文档](/packages/react-mobile/src/Button/index.md)

   ```Markdown
    title: 自定义组件名称
    nav:
      path: /自定义导航路由
      title: 自定义导航名称
      order: 控制导航顺序，数字越小越靠前，默认以路径长度和字典序排序
    group:
      path: /自定义分组路由，注意，分组路由 = 导航路由 + 自己
      title: 自定义分组名称
      order: 控制分组顺序，数字越小越靠前，默认以路径长度和字典序排序

    /* 其他 markdown 内容 */
   ```

4. [插件](https://d.umijs.org/zh-CN/plugin)
