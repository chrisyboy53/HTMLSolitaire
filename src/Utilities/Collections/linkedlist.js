(function(collections) {

    collections.LinkedList = function() {

        function _linkedListContainer(item, linkedTo) {
            this.item = item;
            this.previous = linkedTo;
            this.next = undefined;
        }

        this.head = undefined;
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
                    if (!this.current && !this.head) {
                        return false;
                    }

                    if (!this.current) {
                        this.current = this.head;
                        this.item = this.current.item;
                        return true;
                    }

                    if (this.current.next) {
                        this.current = this.current.next;
                        this.item = this.current.item;
                        return true;
                    }
                    return false;
                }
            };
        }

    };

})(Utilities.Collections)