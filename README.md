# React Redux 前端研发品质实践

[![codebeat badge](https://codebeat.co/badges/7bd2dadc-c77b-4db9-9790-e8a5f83a8dc8)](https://codebeat.co/projects/github-com-tingge-defensor-automated-testing-master)	[![codecov](https://codecov.io/gh/TingGe/defensor-automated-testing/branch/master/graph/badge.svg)](https://codecov.io/gh/TingGe/defensor-automated-testing)	[![CircleCI](https://circleci.com/gh/TingGe/defensor-automated-testing.svg?style=svg)](https://circleci.com/gh/TingGe/defensor-automated-testing)

![](https://raw.githubusercontent.com/TingGe/defensor-automated-testing/master/assets/image/testing-structure.png)

> 最佳适用于 `TypeScript + Scss/Less + React + Redux +  React Dom + React Router + React Thunk` 技术栈的前端。
>
> 软件质量测量是对一系列可描述软件特性的属性值进行加权归一化的定量过程。

一个 React Redux 项目的模版项目。

- 采用 `TypeScript + Scss/Less + React + Redux +  React Dom + React Router + React Thunk` 技术栈；
- 代码静态审查：husky + lint-staged + tslint + prettier + stylelint + imagemin-lint-staged；
- 测试包括：单元测试、覆盖率测试、接入集成测试服务、e2e 测试和 watch 模式，husky + lint-staged + jest。

## Git 规范化注解

> #### Commit 规范作用
>
> 1.提供更多的信息，方便排查与回退
> 2.过滤关键字，迅速定位
> 3.方便生成文档

### 规范

```git
<type>(<scope>): <subject>
```

- type 用于说明 `commit` 类别，只允许使用下面7个标识。

  ```git
  feat：新功能（feature）
  fix：修补bug
  docs：文档（documentation）
  style： 格式（不影响代码运行的变动）
  refactor：重构（即不是新增功能，也不是修改bug的代码变动）
  test：增加测试
  chore：构建过程或辅助工具的变动
  ```

- scope 用于说明 `commit` 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

- subject 是 `commit` 目的的简短描述，不超过50个字符。

  ```git
  1.以动词开头，使用第一人称现在时，比如change，而不是changed或changes
  2.第一个字母小写
  3.结尾不加句号（.）
  ```

### 执行方式

- 校验 commit 规范：借助 [husky](https://github.com/typicode/husky) 在 commit 时自动校验。
- 生成 Change log：` npm version [patch|minor|major]` ，可自动更新 CHANGELOG.md

## 代码静态审查

1. Git hook：husky + lint-staged
2. ts 和 tsx 合规检查和修复：tslint + prettier
3. scss 和 css 合规检查和修复：stylelint
4. 图片和 svg 等压缩：imagemin-lint-staged

### prettier 执行方式

方式一：VS Code 的 [prettier-vscode 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)提示

方式二：借助 [husky](https://github.com/typicode/husky) 在代码 commit 时代码审查（自动修复和提示）

方式三：根目录执行以下命令（自动修复和提示）

```bash
npx prettier --write './src/**/*.{ts,tsx,js,scss}'
```

### tslint 执行方式

方式一：VS Code 的 [vscode-tslint 插件](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)提示

方式二：借助 [husky](https://github.com/typicode/husky) 在代码 commit 时代码审查（自动修复和提示）

方式三：根目录执行以下命令（自动修复和提示）

```bash
tslint -c tslint.json --fix './src/**/*.{js,ts,tsx}'
```

### stylelint 执行方式

方式一：VS Code 的 [stylelint 插件](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)提示

方式二：借助 [husky](https://github.com/typicode/husky) 在代码 commit 时代码审查（自动修复和提示）

方式三：根目录执行以下命令（自动修复和提示）

```Bash
npx stylelint -s scss --fix --stdin-filename ./(src|docs)/**/*.scss 
```

## 测试

### 关于是否需要自动化测试？

自动化测试的长远价值高于手工，所以如果自动化的性价比已经开始高于手工，就可以着手去做。项目后期和维护期，自动化介入为回归测试做准备，可以最大化自动化收益。

参考价值公式

- 自动化收益 = 迭代次数 * 全手动执行成本 - 首次自动化成本 - 维护次数 * 维护成本

本项目采用的自动化测试技术方案

1. React Redux 测试：Typescript + Jest + Enzyme 组合
2. 集成测试： [Defensor E2E Testing](https://github.com/TingGe/defensor-e2e-testing)


### 组件测试：Typescript + Jest + Enzyme 组合

1. 支持 watch 模式
2. actions 测试
3. reducer 测试
4. select 测试
5. React + Redux 测试
6. 覆盖率和输出报告

### E2E 测试：Defensor E2E Testing

> 可独立于项目代码。支持本地运行、手工触发、定时触发、发布流程触发四种方式，实现业务逻辑的持续测试。

1. 跨端（多浏览器兼容）自动化测试及报告： [UI Recorder](https://github.com/alibaba/uirecorder)、[F2etest](https://github.com/alibaba/f2etest) 
2. 测试脚本：测试代码的 Github 仓库
3. 用例、测试计划、任务分派和缺陷管理：Aone
4. 持续集成（CI）服务：Aone 实验室 CISE
5. 全球化（G11N）自动测试报告：ACGT
6. 测试简报、测试计划进度跟踪、待修复缺陷跟踪：OneShot 截屏服务/爬虫服务 + 钉钉群机器人
7. 容器化： Docker/Kubernetes 编排技术实现的 Selenium Grid
8. 徽章服务：Aone badge
9. 多环境管理和健康大盘Chrome扩展：[defensor-multi-environment-manager](https://github.com/TingGe/defensor-multi-environment-manager)
10. 线上巡检：（可配合线上监控系统和报告数据实现可视化）

## 其他辅助工具

1. 快速应用 CLI 工具：[defensor-cli](https://github.com/TingGe/defensor-cli)
2. 命令行工具，主要用于 Newsletter 等群发通知：[defensor-node-cli-broadcast](https://github.com/TingGe/defensor-node-cli-broadcast)

## 对比的一些工具

- Jest：[Create React App](https://github.com/facebookincubator/create-react-app) 、 [Microsoft/TypeScript-React-Starter](Microsoft/TypeScript-React-Starter) 和 [Ant Design](https://github.com/ant-design/ant-design-pro) 中推荐方案，内置断言、测试覆盖率工具，是个一体化方案、开箱即用。提供测试环境Dom API支持、合理的默认值、预处理代码和默认执行并行测试在内的特性；
- AVA： 相对于 Mocha 执行更快，测试环境隔离、支持原子测试，相对于 Jest 组合更加灵活但最佳实践的开发工具、生态链支持稍有欠缺；
- Mocha + Chai：相对较为成熟。



项目接入持续集成在多人开发同一个仓库时候能起到很大的用途，每次push都能自动触发测试，测试没过会发生告警。

如果需求采用 Issues+Merge Request 来管理，每个需求一个Issue + 一个分支，开发完成后提交 Merge Request ，由项目 Owner 负责合并，项目质量将更有保障。

GITHUB上的小工具，大概分成这么几类：代码质量、持续集成、依赖管理、本地化、监控、项目管理和安全等。

| 级别    | 类别                   | 作用                                                         | 选型                                                         | 同类                                                         |
| ------- | ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| -       | 静态代码审查           | 统一团队代码风格                                             | [Prettier](https://github.com/prettier/prettier)             | -                                                            |
| -       | 静态代码审查           | 现代 CSS 格式验证工具                                        | [Stylelint](https://github.com/stylelint/stylelint)          | -                                                            |
| -       | 静态代码审查           | TypeScript 格式验证工具                                      | [Tslint](https://palantir.github.io/tslint/)                 | -                                                            |
| -       | 静态代码审查           | 安全审计，依赖项跟踪                                         | npm audit fix                                                | [jj](https://github.com/greenkeeperio/greenkeeper), [Libraries.io](https://github.com/librariesio/libraries.io) |
| -       | 静态代码审查           | 可访问性、性能和安全的开源检查（Linting）工具                | -                                                            | [Webhint](https://github.com/webhintio/hint)                 |
| -       | 代码质量管理平台       | 集成不同的测试工具，代码分析工具，持续集成工具等。自动 Code Review  辅助 | [SonarQube](https://github.com/SonarSource/sonarqube) + [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode) | [CodeBeat](https://codebeat.co/), [Codacy](https://github.com/codacy), [Code Climat](https://github.com/codeclimate/codeclimate) |
| 单元    | 测试框架               | test runner, snapshots, display, and watch                   | [Jest](https://jestjs.io/) 内置的 Jasmine                    | [AVA](https://github.com/avajs/ava), Mocha, Wallaby.js,      |
| 单元    | 断言库                 | assertions functions                                         | [enzyme](https://github.com/airbnb/enzyme) + Jest 的 Matchers | [Unexpected](https://github.com/unexpectedjs/unexpected), Chai， |
| 单元    | Mock工具               | mocks, spies, and stubs                                      | Jest 的 Mock Functions                                       | [testdouble.js](https://github.com/testdouble/testdouble.js), [sinon](http://sinonjs.org/), |
| 单元    | 测试覆盖率工具         | code coverage                                                | Jest 内置的 Istanbul + [Codecov](https://codecov.io/)        | [Coveralls](https://coveralls.io/), [nyc](https://github.com/istanbuljs/nyc) |
| 单元    | 模拟工具               | 模拟浏览器 dom                                               | Jest 内置的 JSDOM                                            | [JsDom](https://github.com/jsdom/jsdom)                      |
| -       | Git 规范化注解向导工具 | Commit 规范，生成 Change log                                 | [commitlint](https://github.com/marionebl/commitlint) + [conventional-changelog](https://github.com/conventional-changelog) | [commitizen](https://github.com/commitizen/cz-cli), [semantic-release](https://github.com/semantic-release/semantic-release) |
| -       | -                      | 与 Storybook 集成                                            | -                                                            | -                                                            |
| -       | -                      | 持续集成服务                                                 | [CircleCI](https://circleci.com/)                            | [Jenkins](https://jenkins.io/), [Travis](https://travis-ci.org/), [Hound](https://houndci.com/) |
| 端到端  |                        | e2e                                                          | [Defensor E2E Testing](https://github.com/TingGe/defensor-e2e-testing) | [Cypress](https://www.cypress.io/), [Nightwatch](http://nightwatchjs.org/), [Protractor](http://www.protractortest.org/), [Casper](http://casperjs.org/), [testcafe](https://github.com/DevExpress/testcafe), [DalekJS](https://github.com/dalekjs), [testwise-recorder](https://github.com/testwisely/testwise-recorder),[Puppeteer Recorder](https://github.com/checkly/puppeteer-recorder) + [Puppeteer](https://github.com/GoogleChrome/puppeteer) |
| -       | -                      | -                                                            | -                                                            | -                                                            |
| ChatOps | 自动化运维             | 查看各项指标；自动发布；发布报告等                           | [钉钉机器人](https://open-doc.dingtalk.com/docs/doc.htm?treeId=257&articleId=105735&docType=1) | Lita,Err, [Hubot](https://hubot.github.com/)                 |
| -       | 合规审查               | 自动追踪开源代码的授权许可协议；开源代码合规化               | [Fossa](https://fossa.io/)                                   | -                                                            |

## 最佳实践

- 通过  `npm run test:createTests` ，批量自动化生成单元测试代码


## 踩过的坑

- package.json 中包依赖版本锁定管理：不要忽略 warning，关注 [Enzyme Working with React 16](http://airbnb.io/enzyme/docs/installation/react-16.html) 等配置文档
- ignore-styles 忽略样式和资源文件：需要 hook node 的 require， 因此将 setup.ts 改成 setup.js

### API Docs

- Enzyme:  https://github.com/airbnb/enzyme/tree/master/docs/api
- Sinon：http://sinonjs.org/releases/v4.1.2/

## 参考

- [Wings-让单元测试智能全自动生成](http://www.threadingtest.com/newstest/Wings%E5%8F%91%E5%B8%83-%E8%AE%A9%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E6%99%BA%E8%83%BD%E5%85%A8%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90.html)
- [议题解读《我的Web应用安全模糊测试之路》](https://www.anquanke.com/post/id/152729)
- [开发要不要自己做测试？怎么做？](https://mp.weixin.qq.com/s?__biz=MzIzNjUxMzk2NQ==&mid=2247489501&idx=2&sn=fb233a9dcedbecb385cc828f2117b657&chksm=e8d7e81fdfa061098b6d4ec40d6a8aa63395b25af681fcf0faf9f2519bfeed053dc4a80bb124&scene=27#wechat_redirect)


- [入门：前端自动化测试karma，Backstopjs，Selenium-webdriver，Moch](https://juejin.im/post/5b13526d6fb9a01e831461e6)

- [代码自动化扫描系统的建设](https://www.anquanke.com/post/id/158929)
- [你可能会忽略的 Git 提交规范](http://jartto.wang/2018/07/08/git-commit/)
- [使用Jest进行React单元测试](https://www.codetd.com/article/2675508)
- [聊聊前端开发的测试](https://www.diycode.cc/topics/716)
- [如何进行前端自动化测试？](https://www.zhihu.com/question/29922082/answer/46141819)
- [JavaScript 单元测试框架大乱斗：Jasmine、Mocha、AVA、Tape 以及 Jest](https://raygun.com/blog/javascript-unit-testing-frameworks/)
- [基于 JavaScript 的 Web 应用的端到端测试工具对比](https://mo.github.io/2017/07/20/javascript-e2e-integration-testing.html)
- [别再加端到端集成测试了，快换契约测试吧](http://insights.thoughtworks.cn/contract-test/)
- [从工程化角度讨论如何快速构建可靠React组件](https://github.com/lcxfs1991/blog/issues/18)
- [How to Test a React and Redux Application ](https://semaphoreci.com/community/tutorials/getting-started-with-create-react-app-and-ava)
- [How to prevent “Property '…' does not exist on type 'Global'” with jsdom and typescript?](https://stackoverflow.com/questions/40743131/how-to-prevent-property-does-not-exist-on-type-global-with-jsdom-and-t)
- [Using enzyme with JSDOM](http://airbnb.io/enzyme/docs/guides/jsdom.html)
- [Antd Pro UI Test](https://pro.ant.design/docs/ui-test#单元测试)
- [Automated React Component Testing with Jest](https://www.distelli.com/docs/tutorials/test-your-react-component-with-jest/)

## 重点解答

1. 常用组合和现在组合优缺点；
2. 各组合适用的应用场景；
3. 测试的开发体验。

## 未来的可能

1. 与测试团队整体测试的接入；
2. 对开发者更加友好，降低用例的创建和维护成本；
3. 从投入产出角度，减少人工干预环节。

## 许可 License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FTingGe%2Fdefensor-automated-testing.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FTingGe%2Fdefensor-automated-testing?ref=badge_large)
