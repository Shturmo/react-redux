export function thunk({ getState, dispatch }) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // console.log(action)
      if (typeof action === 'function') {
        action(dispatch, getState)
      } else {
        return next(action)
      }
    }
  }
}
