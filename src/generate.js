const tagTypeMap = {
  Block: {
    react: 'div',
    'react-native': 'View'
  },
  Div: {
    react: 'div',
    'react-native': 'View'
  },
  Image: {
    react: 'img',
    'react-native': 'Image'
  },
};

class Printer {
  constructor (type) {
    this.type = type;
    this.buf = '' //储存jsx 源码
    this.styles = '' // 储存css
  }

  space() {
      this.buf += ' '
  }

  nextLine() {
      this.buf += '\n'
  }

  printProps(node) {
    Object.keys(node.props).forEach((key) => {
      this.space()
      if(key === 'style') {
        this.print(`${key}={{ `)
        const style = node.props[key]
        Object.keys(style).forEach((key) => {
          if(key === 'backgroundImage') {
            this.print(`${key}: ${style[key]},`)
          } else if(/vw/.test(style[key]) && this.type === 'react-native') {
            console.log(style[key])
            this.print(`${key}: ${style[key].slice(0,-2)},`)
          } else{
            this.print(`${key}: '${style[key]}',`)
          }
        })
        this.print('}}')
      } else if(key === 'src'){
        this.print(`${key}={${node.props[key]}}`)
      } else if(key === 'className'){

      } else {
        this.print(`${key}={${JSON.stringify(node.props[key])}}`)
      }
    })
  }

  printChildren(node) {
    if(node.children) {
      node.children.forEach(item => {
        this[item.componentName](item)
      });
    }
  }

  printTag(node) {
    const tagName = tagTypeMap[node.componentName][this.type]
    this.print(`<${tagName}`)
    this.printProps(node)
    this.print('>')
    if(node.children) {
      this.printChildren(node)
    }
    this.print('</' + tagName + '>')
  }

  printImports(node) {
    node.imports.forEach(({ name, src }) => {
      this.print(`import ${name} from '${src}'\n`)
    })
  }

  print(text) {
    this.buf += text
  }

  printStyle(text) {
    this.styles += text
  }

  printStyles(node) {
    const styles = node.styles
    if(styles) {
      Object.keys(styles).forEach((key) => {
        const style = styles[key]
        this.printStyle(`.${key} {`)
        Object.keys(style).map((key) => {
          key!== 'backgroundImage' && this.printStyle(`${key}: ${style[key]};`)
        })
        this.printStyle('}')
      })
    }
  }

  Div (node) {
    this.printTag(node)
  }

  Image (node) {
    this.printTag(node)
  }

  Block (node) { // 根元素
    this.printImports(node)
    this.nextLine()
    this.print('const Index = () => {')
    this.nextLine()
    this.print('  ')
    this.print('return (')
    this.nextLine()
    this.print('  ')
    this.printTag(node)
    this.print(')}')
    this.nextLine()
    this.nextLine()
    this.print('export default Index')

    this.printStyles(node)
  }
}

class Generator extends Printer{

  constructor(type) {
      super(type)
  }

  generate(node) {
    this[node.componentName](node)

    return {
      code: this.buf,
      styles: this.styles
    }
  }
}

function generate (node, type = 'react-native', options = {}) {
  return new Generator(type).generate(node)
}

module.exports = generate