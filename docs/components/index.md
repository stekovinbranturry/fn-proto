---
nav:
  title: 组件
  order: 1
---

# 项目结构

<Tree>
<ul>
  <li>
    docs
    <ul>
      <li>
        about
        <ul>
          <li>contribute.md</li>
          <li>index.md</li>
        </ul>
      </li>
      <li>
        components
        <ul>
          <li>
            rax
            <ul>
              <li>
                Button
                <ul>
                  <li>index.$tab-guide.md</li>
                  <li>index.md</li>
                </ul>
              </li>
              <li>index.$tab-guide.md</li>
              <li>index.md</li>
            </ul>
          </li>
          <li>
            react
            <ul>
              <li>
                Button
                <ul>
                  <li>index.md</li>
                </ul>
              </li>
              <li>index.md</li>
            </ul>
          </li>
          <li>index.md</li>
        </ul>
      </li>
      <li>
        design
        <ul>
          <li>color.md</li>
          <li>index.md</li>
        </ul>
      </li>
      <li>
        material
        <ul>
          <li>index.md</li>
        </ul>
      </li>
      <li>index.md</li>
    </ul>
  </li>
  <li>
    packages
    <ul>
      <li>
        fliggy-design-rax
        <ul>
          <li>
            components
            <ul>
              <li>
                Button
                <ul>
                  <li>index.md</li>
                  <li>index.module.scss</li>
                  <li>index.test.tsx</li>
                  <li>index.tsx</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>index.ts</li>
        </ul>
      </li>
      <li>
        fliggy-design-react
        <ul>
          <li>
            components
            <ul>
              <li>
                Button
                <ul>
                  <li>index.md</li>
                  <li>index.module.scss</li>
                  <li>index.test.tsx</li>
                  <li>index.tsx</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>index.ts</li>
        </ul>
      </li>
      <li>
        dumi-theme-fliggy-design
        <ul>
          <li>index.ts</li>
        </ul>
      </li>
      <li>
        dumi-plugin-fliggy-design
        <ul>
          <li>index.ts</li>
        </ul>
      </li>
      <li>
        fliggy-design-theme
        <ul>
          <li>index.less</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    public
    <ul>
      <li>favicon.ico</li>
    </ul>
  </li>
  <li>.dumirc.ts</li>
  <li>.editorconfig</li>
  <li>.eslintrc.js</li>
  <li>.gitignore</li>
  <li>.prettierignore</li>
  <li>.prettierrc.js</li>
  <li>.stylelintrc</li>
  <li>LICENSE</li>
  <li>README.md</li>
  <li>package.json</li>
  <li>pnpm-lock.yaml</li>
  <li>tsconfig.json</li>
  <li>vite.config.ts</li>
</ul>

</Tree>

```js
fliggy-design
├── docs
│   ├── about
│   │   ├── contribute.md
│   │   └── index.md
│   ├── components
│   │   ├── rax
│   │   │   ├── Button
│   │   │   │   ├── index.$tab-guide.md
│   │   │   │   └── index.md
│   │   │   ├── index.$tab-guide.md
│   │   │   └── index.md
│   │   ├── react
│   │   │   ├── Button
│   │   │   │   └── index.md
│   │   │   └── index.md
│   │   └── index.md
│   ├── design
│   │   ├── color.md
│   │   └── index.md
│   ├── material
│   │   └── index.md
│   └── index.md
├── packages
│   ├── fliggy-design-rax
│   │   ├── components
│   │   │   └── Button
│   │   │       ├── index.md
│   │   │       ├── index.module.scss
│   │   │       ├── index.test.tsx
│   │   │       └── index.tsx
│   │   └── index.ts
│   ├── fliggy-design-dumi-theme
│   │   └── index.ts
│   ├── fliggy-design-dumi-plugin
│   │   └── index.ts
│   ├── fliggy-design-react
│   │   ├── components
│   │   │   └── Button
│   │   │       ├── index.md
│   │   │       ├── index.module.scss
│   │   │       ├── index.test.tsx
│   │   │       └── index.tsx
│   │   └── index.ts
│   └── fliggy-design-theme
│       └── index.less
├── public
│   └── favicon.ico
├── .dumirc.ts
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── .stylelintrc
├── LICENSE
├── README.md
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── vite.config.ts

```
