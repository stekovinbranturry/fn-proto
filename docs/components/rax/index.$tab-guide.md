---
title: rxpi 迁移指南
---

# 安装

```bash
npm i -g @clamjs/codemod
```

# 使用

列出所有可迁移组件
```bash
@clam/codemod rxpi-to-fn -l
@clam/codemod rxpi-to-fn --list
```

一键迁移所有组件
```bash
@clam/codemod rxpi-to-fn -a
@clam/codemod rxpi-to-fn --all
```

指定组件
```bash
@clam/codemod rxpi-to-fn -c @ali/rxpi-some-component
@clam/codemod rxpi-to-fn --component @ali/rxpi-some-component
```