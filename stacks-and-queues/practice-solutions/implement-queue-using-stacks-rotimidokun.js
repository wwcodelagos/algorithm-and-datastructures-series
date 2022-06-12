//Leetcode 232. 
//Solved using two stacks. 
//Solved using Javascript classes.
//Amortized Time complexity 0(1) - constant. Worst case - 0(n), but happens once during pop/peek operation.
//Space Complexity 0(n) - linear. As we add more inputs, we have to create more space. 

class MyQueue {
    constructor() {
        //create two stacks, one for pushing, one for popping.
        this.pushStack = []
        this.popStack = []
    }
    
    //push to the push stack
    push(val) {
        this.pushStack.push(val)
    }

    //if nothing in the pop stack and something in the pushstack, push into the empty pop stack what you pop from the push stack.
    pop() {
        if(!this.popStack.length) {
            while(this.pushStack.length){
                this.popStack.push(this.pushStack.pop())
            }
        }
        //pop from the pop stack which is no longer empty
        return this.popStack.pop()
    }

    //if nothing in the pop stack and something in the pushstack, push into the empty pop stack what you pop from the push stack.
    peek() {
        if(!this.popStack.length) {
            while(this.pushStack.length){
                this.popStack.push(this.pushStack.pop())
            }
        }
        //return the last item in the pop stack which is no longer empty
        return this.popStack[this.popStack.length - 1]
    }

    //if both stacks are empty, return true, else false
    empty() {
        if(!this.pushStack.length && !this.popStack.length) {
            return true
        }
        return false
    }

}
