// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
 //param A : head node of linked list
 //return the head node in the linked list
    deleteDuplicates : function(A){
        var head=A
        var prev=A
        var curr=A.next
        while(curr!=null && prev!=null){
            while(curr!=null && prev.data==curr.data){
                curr=curr.next
                prev.next=curr
            }

            prev=prev.next
            if(curr!=null)
                curr=curr.next
        }
        return head
    },
    reverseList : function(A){
        if(!A.next) return A;
        var curr = A, prvs = null, next = null;
        while(curr){
           next = curr.next;
           curr.next = prvs;
           prvs = curr;
           curr = next;
        }
        return prvs;
    }
};
