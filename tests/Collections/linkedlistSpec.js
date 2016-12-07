// </// <reference path="src/Utilities/Collections/linkedList" />

describe('Test Linked List', function() {

    var linkedList;
    
    it('Should be in the Collections.LinkedList namespace', function() {
        expect(Utilities).toBeDefined();
        expect(Utilities.Collections).toBeDefined();
        expect(Utilities.Collections.LinkedList).toBeDefined();
    });

    beforeEach(function() {
        if (Utilities.Collections) {
            linkedList = new Utilities.Collections.LinkedList();
        }
    });

    describe('Add one item to list', function() {

        beforeEach(function(){
            if (linkedList) {
                linkedList.push(1);
            }
        });

        it('Should have an item in the head', function(){
            expect(linkedList.head).toBeDefined();
            expect(linkedList.head.item).toBeDefined();
            expect(linkedList.head.item).toEqual(1);
        });

    });

});