// Create a binary search tree
var bst = new BinarySearchTree();

// Test `add` function
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

// Test `contains` function
console.log('contains 8?', bst.contains(8));   	//true
console.log('contains 1?', bst.contains(1));  	//true
console.log('contains 14?', bst.contains(14));  //true
console.log('contains 11?', bst.contains(11));	//false