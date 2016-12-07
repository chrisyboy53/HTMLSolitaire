(function(collections) {

    collections.LinkedList = function() {

        /**
         * Internal class for creating a container round the item
         * @param {object} item The Item required to be wrapped
         * @param {_linkedListContainer} linkedTo The item connecting to
         */
        function _linkedListContainer(item, linkedTo) {
            this.item = item;
            this.previous = linkedTo;
            this.next = undefined;
        }

        this.Head = undefined; 
        this.tail = undefined;

        this.push = function(item) {
            if(!this.head) {
                this.head = new _linkedListContainer(item, undefined);
                this.tail = this.head;
            }
            else {
                var newItemContainer = new _linkedListContainer(item, this.tail);
                this.tail.next = newItemContainer;
                this.tail = newItemContainer;
            }
        };

        this.getEnumerator = function() {
            return {
                head: this.head,
                item: undefined,
                current: undefined,
                moveNext: function() {
                    /* 
                     * When we have nothing in the linked list
                     * then finish the enumeration
                     */
                    if (!this.current && !this.head) {
                        return false;
                    }

                    /*
                     * This is the first time the enumerator
                     * starts so set the current to head
                     * and return true.
                     */
                    if (!this.current) {
                        this.current = this.head;
                        this.item = this.current.item;
                        return true;
                    }

                    /*
                     * Iterate through until there is
                     * no next item.
                     */
                    if (this.current.next) {
                        this.current = this.current.next;
                        this.item = this.current.item;
                        return true;
                    }

                    /* No more items return false */
                    return false;
                }
            };
        };

    };

})(Utilities.Collections);
