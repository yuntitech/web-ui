# web-ui

云梯前端组件库，基于 antd 二次封装的公共组件

## 命令说明

1. 全局依赖

   `pnpm add typescript -DW`

   `-D`(等价于`--save-dev`)将依赖安装到 devDependencies，`-W`将依赖安装到根目录的`node_modules`中，无论你当前在哪个文件夹层级

2. 局部依赖

   `pnpm --filter @yunti/web-ui add typescript -D`

   使用`--filter`或`-F`筛选个别 package 执行相应命令。如上命令表示仅在@yunti/web-ui 文件夹下安装 typescript 开发依赖

## changesets 使用说明

changesets 使用分为三个关键步骤

1. 当开发了某个 feature，或者修复了某个 bug，可以执行`pnpm changeset`，然后进入命令行交互界面，选择`patch/minor/major`，接着如果是有多个包，需进一步选择 package，最后输入 change log 信息。此后会在`.changesets`文件夹中生成一个 changeset 的文件如`cyan-dots-admire.md`。多次执行则生成多条 changeset。待后续升级版本进行消费

2. 当我们积累了一定的 changesets，完成了当前(某个)版本的开发，此时我们进入发布阶段，执行`pnpm changeset version`，这将消耗(1)中累积的 changesets，且每一个 changesets 中都有对应的 package name。此时会对 changesets 做统一处理，合并 changelog，修改对应 package 的版本号。执行完成后，.changesets 文件夹下之前生成的 changeset 文件将被清空，从而转化成对应 package 下的 CHANGELOG.md 以及升级`package.json`中的`version`版本号。

3. 此时还只是升级了本地仓库中对应 package 的版本号，对应 package 如果已经打包完成，则可以执行`pnpm publish -r`，递归进行版本发布，pnpm 会核对每个 package 的版本号和发布了的版本是否一致，不一致则发布新版本，一致则不做处理。

[自定义 changelog 的格式](https://github.com/changesets/changesets/blob/main/docs/modifying-changelog-format.md)

changesets 本身定义了一套基本的 changelog 的格式，但如果我们需要做一些修改或者自定义 changelog 模板格式则可以通过`.changeset/config.json`中的`"changelog": ".changeset/my-changelog-config.js"`配置进行自定义，这里可以是自己写的 js 脚本文件，也可以用第三方包。详情可查阅官方文档。
