/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    private newHead: ListNode | null = null;

    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (head === null) return null;
        if (head.next === null) return head;

        this.reverse(head, null);

        return this.newHead;
    }

    private reverse(node: ListNode | null, parent: ListNode | null) {
        if (node === null) return;
        
        this.reverse(node.next, node);

        if (this.newHead === null) this.newHead = node;

        if (parent === null)
            node.next = null;
        else
            node.next = parent;
    }
}
