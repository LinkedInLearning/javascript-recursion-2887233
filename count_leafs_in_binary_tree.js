/**
 * Get all the nodes in a Binary Tree
 * @param {BinaryTreeNode} root 
 * @returns {Numbers} array
 */
function count_nodes_solution(root) {
    let nodes = [];

    flow(root);

    function flow(root) {
        if (root === null) {
            return nodes;
        } else {
            nodes.push(root.val);
            flow(root.left);
            flow(root.right);
        }
    };
    return nodes;
};

/**
 * Get all the leafs in a Binary Tree
 * @param {BinaryTreeNode} root 
 * @returns {Numbers} array
 */
function count_leafs_solution(root) {
    let leafs = [];

    flow(root);

    function flow(root) {
        if (root === null) {
            return leafs;
        } else {
            if (root.left === null && root.right === null) {
                leafs.push(root.val);
            }
            flow(root.left);
            flow(root.right);
        }
    };
    return result;
};
