export const HandleCreateButton = (val , button) => {
    if (val.length > 3) {
        button.remove('ev-false')
        button.add('ev-true')
      } else {
        button.add('ev-false')
        button.remove('ev-true')
      }
}
