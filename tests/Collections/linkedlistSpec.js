// </// <reference path="src/Utilities/Collections/linkedList" />

describe('Linked List', function() {

    var linkedList;
    
    it('should be in the Utilities.Collections.LinkedList namespace', function() {
        expect(Utilities).toBeDefined();
        expect(Utilities.Collections).toBeDefined();
        expect(Utilities.Collections.LinkedList).toBeDefined();
    });

    beforeEach(function() {
        if (Utilities.Collections) {
            linkedList = new Utilities.Collections.LinkedList();
        }
    });

    describe('when enumerating through an empty list', function() {
        it('should return false when I try to move next', function() {
            var enumerator = linkedList.getEnumerator();

            expect(enumerator.moveNext()).toBe(false);
        })
    });

    describe('when adding one item to list', function() {

        beforeEach(function() {
            if (linkedList) {
                linkedList.push(1);
            }
        });

        it('should have an item in the head', function(){
            expect(linkedList.head).toBeDefined();
            expect(linkedList.head.item).toBeDefined();
            expect(linkedList.head.item).toEqual(1);
        });

        describe('when adding a second item', function() {
            beforeEach(function() {
                if (linkedList) {
                    linkedList.push(3);
                }
            });

            it('should have a tail', function(){
                expect(linkedList.tail).toBeDefined();
                expect(linkedList.tail.item).toBeDefined()
                expect(linkedList.tail.item).toEqual(3);
            });

            it('should have a head', function(){
                expect(linkedList.head).toBeDefined();
                expect(linkedList.head.item).toBeDefined()
                expect(linkedList.head.item).toEqual(1);
            });

            describe('when enumerating through the list', function() {
                var results = [];

                beforeEach(function(){
                    var listEnum = linkedList.getEnumerator();

                    while(listEnum.moveNext()) {
                        results.push(listEnum.current.item);
                    }

                });

                it('Should have 2 items returned', function() {
                    expect(results.length).toBe(2);
                });

            });

        });

    });

});