/***
	Binary Search Tree

	A node is represented as:

	var node = {
		value: null,
		left: null,
		right: null
	}

	Methods:
		- add(value)
		- contains(value)
		- remove(value)
		- traverse()
		- toString()
		- toArray()		
***/

// constructor
function BinarySearchTree() {
	this.root = {
		value: null,
		left: null,
		right: null
	};
}

BinarySearchTree.prototype.constructor = BinarySearchTree;

BinarySearchTree.prototype.add = function (value) {
	var node = {
		value: value,
		left: null,
		right: null
	};

	var direction;

	function getDirection(current, node) {
		if(node.value < current.value) {
			return 'left';
		} else if (node.value > current.value) {
			return 'right';
		}		
	}

	function addNode(current, node) {
		direction = getDirection(current, node);

		console.log('iteration(c, n): ', current, node);
		console.log('current[direction]', current[direction]);
		if(current[direction] !== null) {
			addNode(current[direction], node);
		} else {
			current[direction] = node;
		}
	}

	// Edge case where BST has no root yet
	if(this.root.value === null) {
		this.root = node;
	} else {
		addNode(this.root, node);
	}
}

var bst = new BinarySearchTree();

bst.add(8);
bst.add(3);
bst.add(10);
bst.add(1);
bst.add(6);
bst.add(14);
bst.add(4);
bst.add(7);
bst.add(13);
console.log(bst);