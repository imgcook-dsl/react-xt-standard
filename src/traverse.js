function traverse(node, visitors, parent, parentPath, key, listKey) {
  const defination = astDefinationsMap.get(node.componentName); // imgcook schema 使用了componentName来做唯一类型标注

  let visitorFuncs = visitors[node.componentName] || {};

  if(typeof visitorFuncs === 'function') {
      visitorFuncs = {
          enter: visitorFuncs
      }
  }
  const path = new NodePath(node, parent, parentPath, key, listKey);

  visitorFuncs.enter && visitorFuncs.enter(path, {});

  if(node.__shouldSkip) {
      delete node.__shouldSkip;
      return;
  }

  if (defination && defination.visitor) {
      defination.visitor.forEach(key => {
          const prop = node[key];
          if (Array.isArray(prop)) { // 如果该属性是数组
              prop.forEach((childNode, index) => {
                  traverse(childNode, visitors, node, path, key, index);
              })
          } else {
              traverse(prop, visitors, node, path);
          }
      })
  }
  visitorFuncs.exit && visitorFuncs.exit(path, {});
}

const astDefinationsMap = new Map();

astDefinationsMap.set('Block', {
    visitor: ['children']
});
astDefinationsMap.set('Div', {
    visitor: ['children']
});

class NodePath {
  constructor(node, parent, parentPath, key, listKey) {
      this.node = node;
      this.parent = parent;
      this.parentPath = parentPath;
      this.key = key;
      this.listKey = listKey;
  }

  findParent(callback) {
    let curPath = this.parentPath;
    while (curPath && !callback(curPath)) {
        curPath = curPath.parentPath; 
    }
    return curPath;
  }

  find(callback) {
    let curPath = this;
    while (curPath && !callback(curPath)) {
      curPath = curPath.parentPath; 
    }
    return curPath;
  }

  remove () {
    if (this.listKey != undefined) {
        this.parent[this.key].splice(this.listKey, 1);
    } else {
        this.parent[this.key] = null;
    }
  }

  replaceWith(node) {
    if (this.listKey != undefined) {
        this.parent[this.key].splice(this.listKey, 1, node);
    } else {
        this.parent[this.key] = node
    }
  }

  skip() {
      this.node.__shouldSkip = true;
  }

  traverse(visitors) {
    const defination = astDefinationsMap.get(this.node.componentName); // imgcook schema 使用了componentName来做唯一类型标注

    if (defination.visitor) {
        defination.visitor.forEach(key => {
            const prop = this.node[key];
            if (Array.isArray(prop)) { // 如果该属性是数组
                prop.forEach((childNode, index) => {
                  traverse(childNode, visitors, this.node, this);
                })
            } else {
              traverse(prop, visitors, this.node, this);
            }
        })
    }
  }
}

module.exports = traverse