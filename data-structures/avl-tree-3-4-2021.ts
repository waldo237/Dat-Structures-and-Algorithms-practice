
enum BalanceFactor {
  UNBALANCED_RIGHT = 1,
  SLIGHTLY_UNBALANCED_RIGHT = 2,
  BALANCED = 3,
  SLIGHTLY_UNBALANCED_LEFT = 4,
  UNBALANCED_LEFT = 5,

}

class AVLNode<K>{
  left: AVLNode<K> | null;
  right: AVLNode<K> | null;
  constructor(public key: K) {
    this.left = null;
    this.right = null;
  }
}

class AVLTree<T>{
  protected root: AVLNode<T> | null;

  constructor() {
    this.root = null;
  }

  private getNodeHeight(node: AVLNode<T> | null): number {
    if (node === null) {
      return -1;
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right))
  }

  private rotationLL(node: AVLNode<T> | null) {
    const temp = node!.left;
    node!.left = temp!.right;
    temp!.right = node;
    return temp;
  }
  private rotationRR(node: AVLNode<T> | null) {
    const temp = node!.right;
    node!.right = temp!.left;
    temp!.left = node;
    return temp;
  }
  private rotationLR(node: AVLNode<T> | null) {
    node!.left = this.rotationRR(node!.left);
    return this.rotationLL(node);
  }
  private rotationRL(node: AVLNode<T> | null) {
    node!.right = this.rotationRR(node!.right);
    return this.rotationRR(node);
  }

  private getBalanceFactor(node: AVLNode<T> | null) {
    const heightDifference = this.getNodeHeight(node!.left) - this.getNodeHeight(node!.right);

    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }
  insert(key: T) {
    this.root = this.insertNode(this.root, key);
  }
  insertNode(node: AVLNode<T> | null, key: T): AVLNode<T> | null {
    if (node === null) {
      return new AVLNode(key);
    } else if (key < node.key) {
      node.left = this.insertNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; //duplicate
    }
    // verify if tree is balanced
    const balanceState = this.getBalanceFactor(node);
    if (balanceState === BalanceFactor.UNBALANCED_LEFT) {
      if (key < node.left!.key) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }
    if (balanceState === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
      if (key > node!.right!.key) {
        node = this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }
    return node;
  }

  protected removeNode(node: AVLNode<T> | null, key: T): AVLNode<T> | null {

    if (node === null) return null;

    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
    } else {
      // node is the node to be deleted
      if(node.left === null && node.right === null){
        node = null;
      }else if(node.left == null && node.right != null){
        node = node.right;
      }else if(node.left != null && node.right == null){
        node = node.left;
      }else{
        // node has 2 children, get the in-order successor
        const inOrderSuccessor = this.minNode(node.right);
        node.key = inOrderSuccessor!.key;
        node.right = this.removeNode(node.right, inOrderSuccessor!.key);

      }
      if(node === null){
        return node;
      }
      const balanceState = this.getBalanceFactor(node);

      if(balanceState === BalanceFactor.UNBALANCED_LEFT){
        if(
          this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
          this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
        ){
          return this.rotationLL(node);
        }
        if(this.getBalanceFactor(node.left)=== BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
          return this.rotationLR(node.left);
        }
      }
      if(balanceState === BalanceFactor.UNBALANCED_RIGHT){
        if(
          this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
          this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
        ){
          return this.rotationRR(node);
        }
        if(this.getBalanceFactor(node.right)=== BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
          return this.rotationRL(node.right);
        }
      }
      return node;
    }

  }
  minNode(node: AVLNode<T> | null) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }
}
