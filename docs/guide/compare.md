---
nav:
  title: 指南
  path: /guide
  order: 2
---

# UI Component Compare

为后续 SDK 项目能够快速接入 SDK 组件库 ，同时提供开发人员一个查阅的组件文档，以及设计人员可随时预览具体组件实现效果的文档，考虑到组件文档的实现成本，为快速实现组件文档的生成，在此调研了两款当前流行的 UI 组件库，其一是国外的 storybook，其二是国内的 dumi。

在简单的接入使用后，针对两者各自的特性，下面将分别对其优势做一个列举说明。

## StoryBook

[demo](https://github.com/18270219411/ui-storybook)

1. 支持多种框架语言的 UI 组件库，例如 `React | Vue | Angular | Web Components | Preact`等，目前 SDK 项目使用到的框架语言也刚好是 `Preact`，对于后续其他框架语言项目接入组件文档可提供比较丰富的经验。
2. 组件文档，核心在于文档，其可支持丰富格式的文档类型，例如 `MDX | TSX | JSX | TS | JS` 等类型的文档，另外其生态圈中也提供丰富的内置文档插件，可直接使用通过引入组件的形式，组合输出文档。
3. 支持在文档中实时切换组件参数值，预览其不同参数下的效果。
4. 支持在文档中进行组件事件的调试查看。

## Dumi

[demo](https://github.com/18270219411/ui-dumi)

1.  支持移动端预览。
2.  [支持配置化的多语言使用，且自动带兜底处理](https://d.umijs.org/zh-CN/guide/advanced#%E5%A4%9A%E8%AF%AD%E8%A8%80)。
3.  [组件文档支持 UI 界面形式向文档中插入组件](https://d.umijs.org/zh-CN/guide/advanced#5-%E5%9C%A8-umi-ui-%E4%B8%AD%E4%BD%BF%E7%94%A8)。
4.  [文档代码支持即拷即用](https://d.umijs.org/zh-CN/guide/basic#%E4%BB%A3%E7%A0%81%E5%9D%97)。
5.  支持查看当前组件实例所用引用过的文件。
6.  支持自定义主题，提供主题开发功能。

## 核心点对比

| 核心功能 | StoryBook | Dumi |
| :-- | :-- | :-- |
| 框架语言支持性 | `perfect`，支持丰富 | `bad`，目前仅支持 `React` |
| 组件文档灵活性 | `perfect`，类型多样 | `bad`，目前仅支持 `Markdown` |
| 整体文档灵活性 | `bad`，类型单一，可定制化弱 | `perfect`，类型丰富，支持多语言，多主题，多平台 |
| 接入成本 | `normal`，生态较好，但文档内容基本上是英文，且使用的介绍较浅 | `good`，全中文文档，使用介绍较清晰，但稳定性较弱 |
| 使用成本 | `normal`，文档中拷贝的代码需进行一定的调整才可使用 | `perfect`，即拷即用，同时提供当前组件实例引用过的所有文件，可直接查看相互关联文件的详细信息 |
