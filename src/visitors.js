const formatClassName = (className) => {
  const formatClassName = className
    .split('')
    .map((char, index, arr) => {
      if(char === '-') {
        arr[index+1] = arr[index+1].toUpperCase()
        return undefined
      }
      return char
    })
  return formatClassName.join('')
}

function styleVisitor(path, state) {
  const styles = state.styles
  const style = path.node.props.style // { width: 100px, height: 50px }

  Object.keys(style).forEach((key) => {
    if(key === 'backgroundImage') {
      const value = style[key]
      const src = value.match(/\(.*\)/)[0].slice(1,-1)
      style[key] = `\`url(\${img${state.imports.length}})\``
      state.imports.push(src)
    }
    if(/px/.test(style[key])){
      style[key]= Number(style[key].slice(0, -2)/state.rootWidth).toFixed(5) + 'vw'
      console.log(style[key])
    }
  })

  const className = path.node.props.className
  path.node.props.className = formatClassName(className)
  styles[formatClassName(className)] = style
}

function importVisitor(path, state) {
  const src = path.node.artboardImg || path.node.props.src
  path.node.props.src = `img${state.imports.length}`
  state.imports.push(src)
}

const visitors = {
    Block(path, state) {
      state.imports = []
      state.styles = {}
      state.rootWidth = path.node.rect.width

      importVisitor(path, state)
      styleVisitor(path, state)

      path.traverse({
        Image(path) {
          importVisitor(path, state)
          styleVisitor(path, state)
        },
        Div(path) {
          styleVisitor(path, state)
        },
      })

      path.node.imports = state.imports.map((src, index) => ({
        name: `img${index}`,
        src,
      }))
      path.node.styles = state.styles
    },
}

module.exports = visitors