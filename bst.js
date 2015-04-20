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

BinarySearchTree.prototype.contains = function(value) {

	function findValue(node, value) {
		if(value === node.value) {
			return true;
		} else if(value < node.value) {
			return node.left === null ? false : findValue(node.left, value);
		} else if(value > node.value) {
			return node.right === null ? false : findValue(node.right, value);
		}
	}

	// Start at the root
	return findValue(this.root, value);
}

BinarySearchTree.prototype.traverse = function(callback) {

	// In-order traversal where left subtree is visited first, 
	// then the node then its right subtree
	function inOrder(node) {
		if(node.left !== null) {
			// keep going left
			inOrder(node.left);
		}

		callback(node);

		if(node.right !== null) {
			// keep going right
			inOrder(node.right);
		}
	}

	// start at the root
	inOrder(this.root);
}

BinarySearchTree.prototype.toString = function() {	
	var buffer = '';

	this.traverse(function(node) {
		buffer += node.value;
	});

	return buffer;
}

BinarySearchTree.prototype.toArray = function() {
	var arr = [];

	this.traverse(function(node) {
		arr.push(node.value);
	});

	return arr;
}