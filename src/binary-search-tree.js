const {
  NotImplementedError
} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}
module.exports = class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }
  root() {
    return this.rootTree;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.rootTree) {
      this.rootTree = newNode;
    } else {
      addNode(this.rootTree, newNode);
    }

    function addNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          addNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          addNode(node.right, newNode);
        }
      }
    }
  }

  has(data) {
    return hasData(this.rootTree, data);

    function hasData(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (node.data > data) {
        return hasData(node.left, data)
      } else return hasData(node.right, data);
    }
  }

  find(data) {
    return findData(this.rootTree, data);

    function findData(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      if (node.data > data) {
        return findData(node.left, data)
      } else return findData(node.right, data);
    }
  }

  remove(data) {
    return removeData(this.rootTree, data);
    function minData(node) {
      if (node.left === null) return node;
      else return minData(node.left);
    }
    function removeData(node, data) {
      if (!node) return null;
      else if (data < node.data) {
        node.left = removeData(node.left, data)
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.right && !node.left) {
          node = null;
          return node;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        } else {
          let newNode = minData(node.right);
          node.data = newNode.data;
          node.right = removeData(node.right, newNode.data);
          return node;
        }
      }
    }
  }

  min() {
    return  minData(this.rootTree).data;
    function minData(node) {
      if (node.left === null) return node;
      else return minData(node.left);
    }
  }
  
  max() {
    return maxData(this.rootTree);

    function maxData(node) {
      if (node.right === null) return node.data;
      else return maxData(node.right);
    }
  }

}