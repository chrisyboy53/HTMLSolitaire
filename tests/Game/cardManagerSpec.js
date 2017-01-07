
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
            
            
    });
        

});
    