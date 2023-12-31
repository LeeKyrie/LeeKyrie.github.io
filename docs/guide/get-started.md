---
title: 快速开始
---

# 快速开始

## 简介

`DepSpider` 意为**依赖蜘蛛** [ **Dep**endence **Spider** ]，具有能够按照任意深度 [ **Dep**th ] 潜入分析和监视其他 `npm` 依赖的能力，并提供状态同步的各类可视化交互页面。

## 特点

1. 利用树 + 剪枝代替有向图，支持任意展开、折叠节点，结构更加清晰，规避了有向图错乱复杂的箭头指向。
2. 提供多种展示方式，包括可折叠树、体积块状图、抽屉嵌套列表等。
3. 支持分析相同依赖和循环依赖，支持搜索子依赖、查看依赖信息和体积等。
4. 利用 `ws` 服务器，实时操作 `depth` 深度，并实现分析包 `size` 的懒加载。
5. 支持本地 `CLI` 和在线查询两种模式。
6. 监听依赖，实现依赖实时更新。
7. 支持国际化和暗黑模式。

## 快速开始

### 本地 `CLI`

将 DepSpider 安装到项目，使用 `PNPM`：

```bash
$ pnpm add @dep-spider/cli -D
```

之后你可以在 `npm` 脚本添加使用 `ds` 或者 `depspider` 脚本，以下是推荐配置脚本：

```js
{
  "scripts": {
    "ds": "ds"
    // 或者 "ds": "depspider"
  }
}
```

如果想根据默认配置直接生成依赖分析 `JSON` 文件，直接在命令行中运行：

```bash
$ pnpm run ds
```

如果需要届时开启 UI 页面，请格外传入 `--ui` 参数（对于更多配置参数，或使用配置文件进行配置，请查看[配置](#配置)）：

```bash
$ pnpm run ds --ui
```

接着你能通过 `http://localhost:2023/analyze` 访问 DepSpider UI 页面：

![ui](https://cheerioinf-img.oss-cn-beijing.aliyuncs.com/img/image-20230828225639712%202.png)

推荐使用上述方法，但也支持使用 `npx @dep-spider/cli` 来直接运行 DepSpider。

### 线上查询
