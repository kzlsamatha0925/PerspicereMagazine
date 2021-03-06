
import navigationConfig from './config'

const initialState = {
  modules: navigationConfig,
  show: false,

}

// reducers
export default (state = initialState, action) => {
  console.log('navigation reducer')
  switch (action.type) {

    case 'NAVIGATION.SHOW':
      return {
        ...state,
        show: true,
      }
    case 'NAVIGATION.HIDE':
      return {
        ...state,
        show: false,
      }
    default:
      return state
  }
}
