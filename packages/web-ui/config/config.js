import { defineConfig } from "dumi";

export default defineConfig({
  title: "web-ui",
  favicon:
    "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
  logo: "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
  outputPath: "docs-dist",
  mode: "site",
  history: {
    type: "hash",
  },
  base: "/module/",
  publicPath: "/module/",
  locales: [
    ["zh-CN", "中文"],
    ["en-US", "English"],
  ],
  // more config: https://d.umijs.org/config
  // extraBabelPlugins: [
  //     [
  //         "babel-plugin-import",
  //         {
  //             libraryName: "antd",
  //             libraryDirectory: "es",
  //             style: true,
  //         },
  //     ],
  // ],
  chainWebpack(memo) {
    memo.plugins.delete("copy");
  },
});
