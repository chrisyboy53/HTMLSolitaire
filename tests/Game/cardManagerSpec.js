
describe('cardManager', function() {
    
    
    describe('when requesting for pack of cards', function() {
        var packOfCards = null;
        
        beforeEach(function() {
            packOfCards = Game.CardManager.getCardPack();
        });

        it('should be 52 cards', function() {
            expect(packOfCards.length).toBe(52);
        });
        
        it('should have 13 cards of each suit', function() {
            for (var suit=0, sLen = 4; suit < sLen; suit++) {
                for(var i = 1, len=13; i <= 13; i++) {
                    var cardIndex = (len * suit + i) - 1;

                    expect(packOfCards[cardIndex].cardNo).toBe(i);
                    expect(packOfCards[cardIndex].cardSuit).toBe(suit);
                }
            }
        });
        
        describe('when I shuffle the cards', function() {
            var shuffledPack = null;

            beforeEach(function() {
                shuffledPack = Game.CardManager.shuffleCards(packOfCards);
            });

            it('should be in a random order', function() {
                // TODO: need to look into how volatile the change
                // is in the pack.
                var numOfSameIndex = 0,
                    volatilityMargin = 5;
                
                for (var i = 0, len = packOfCards.length; i < len; i++) {
                    var card = packOfCards[i];

                    var cardIndex = shuffledPack.indexOf(card);

                    if (cardIndex === i) {
                        numOfSameIndex++;
                    }

                }
                expect(numOfSameIndex).not.toBeGreaterThan(volatilityMargin);
            });

            function _find (arr, callback) {
                var foundItems = [];
                for (var i = 0, len = arr.length; i < len; i++) {
                    if (callback(arr[i])) {
                        foundItems.push( arr[i] );
                    }
                }
                return foundItems;
            }

            it('should not have duplicates', function() {
                var foundDuplicate = false;

                for (var i = 0, len = shuffledPack.length; i < len; i++) {
                    var results = _find(shuffledPack, function(obj) {
                        return shuffledPack[i] === obj;
                    } );
                    if (results.length > 1) {
                        foundDuplicate = true;
                        break;
                    }

                }

                expect(foundDuplicate).toBe(false);
            });

        });
            
    });
        

});
    