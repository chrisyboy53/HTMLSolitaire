var Utilities = Utilities || {};
Utilities.Collections = Utilities.Collections || {};

(function(collections) {

    /**
     * @class LinkedList
     * @classdesc Linked List designed to be a list but with linking logic
     * @constructor
     * @memberof Utilities.module:Collections
     * 
     */
    collections.LinkedList = function() {

        /**
         * Internal class for creating a container round the item
         * @class _linkedListContainer
         * @memberof Utilities.module:Collections.LinkedList
         * @constructor
         * @param {object} item The Item required to be wrapped
         * @param {Utilities.Collections.LinkedList._linkedListContainer} linkedTo The item connecting to
         */
        function _linkedListContainer(item, linkedTo) {
            /**
             * Containing item to hold
             * @name item
             * @memberof Utilities.module:Collections.LinkedList._linkedListContainer
             * @type {Object}
             */
            this.item = item;
            
            /**
             * Previous item connected in the list
             * @name previous
             * @memberof Utilities.module:Collections.LinkedList._linkedListContainer
             * @type {Utilities.Collections.LinkedList._linkedListContainer}
             */
            this.previous = linkedTo;
            
            /**
             * Next item connected in the list
             * @name previous
             * @memberof Utilities.module:Collections.LinkedList._linkedListContainer
             * @type {Utilities.Collections.LinkedList._linkedListContainer}
             */
            this.next = undefined;
        }

        /**
         * Points to the top of the list
         * @name head
         * @readonly
         * @memberof Utilities.module:Collections.LinkedList
         * @type {Utilities.Collections.LinkedList._linkedListContainer}
         */
        this.head = undefined;
        
        /**
         * Points to the bottom of the list
         * @name tail
         * @readonly
         * @memberof Utilities.module:Collections.LinkedList
         * @type {Utilities.Collections.LinkedList._linkedListContainer}
         */
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
