/* @flow */

import * as nodeOps from 'web/runtime/node-ops' // DOM 操作方法
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index' // ref, directives 钩子函数
import platformModules from 'web/runtime/modules/index' // class, attr, style 等操作方法

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

export const patch: Function = createPatchFunction({ nodeOps, modules })
