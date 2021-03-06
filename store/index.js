
import { createStore, combineReducers } from 'redux'

// 通用
import common from './common'
import header from './header'

import navigation from './navigation'

// 每个期刊一个目录
import journalOne from './journalOne'
import issues from './issues'

const appReducer = combineReducers({
  common,
  header,
  navigation,
  journalOne,
  issues
})


const store = createStore(
  appReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default store
