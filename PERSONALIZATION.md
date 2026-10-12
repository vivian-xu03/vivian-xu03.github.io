# Bloomfolio 原模板个人主页

保留原版首屏布局、头像形状、字体、项目卡片、实习时间线、教育折叠列表、主题菜单、花朵按钮及手机底部导航。仅替换个人资料和添加中英文切换。

## 编辑内容

- `src/content/hero/index.yaml`：中文首屏。英文在 `src/content/hero/en/index.yaml`。
- `src/content/about/index.md`：中文介绍。英文在 `src/content/about/en/index.md`。
- `src/content/work/`、`education/`、`projects/`：中文记录。各目录的 `en/` 子目录存放英文记录。
- `src/content/contact/`：联系方式。
- `src/content/general/index.yaml`：原模板的展示开关、项目布局和导航设置。

本地启动后可以访问 `/keystatic` 使用原模板编辑界面。带 `(English)` 的分组编辑英文内容，其余对应中文。中英文记录使用同一个文件名以保证语言切换对应同一项目。

没有博客或黑客松资料，所以这两项展示开关关闭，原组件仍保留。项目封面目前为品牌文字占位图，后续可在原编辑器中上传项目海报或报告截图替换。

## 预览

中文 `/`，英文 `/en/`。右上角 `中文 / EN` 切换到同一页面的另一语言。手机保留原版首屏与底部导航，通过底部按钮打开项目、经历和教育信息。

使用 Node.js 22.12 或更新版本，安装依赖后运行 `npm run dev`。当前 `node_modules` 是本地已安装依赖的链接，换到其他设备时需要重新安装。

## GitHub Pages 发布

目标仓库：`vivian-xu03/vivian-xu03.github.io`，网站：`https://vivian-xu03.github.io`。

- 仓库默认分支使用 `main`。
- GitHub 的 Settings → Pages → Source 选择 **GitHub Actions**。
- 推送到 `main` 后，`.github/workflows/deploy.yml` 自动构建并发布。
- `npm run build:pages` 生成 `dist/` 中的静态页面，包含中英文项目详情与分区。
- 本地编辑仍使用 `npm run dev` 和 `/keystatic`；GitHub Pages 上不提供在线编辑后台。
