describe('Visual Engine', function() {

    describe('when trying to initialise engine without setting a canvas', function() {

        it('should throw an exception', function() {
            expect(Visual.VisualEngine.init).toThrow('Need Canvas loaded');
        });

    });

    describe('when I set a mocked canvas to Visual Engine', function() {

        var mockedCanvas = null;

        beforeEach(function() {
            mockedCanvas = {
                init: function() {},
                redraw: function() {}
            };
            Visual.VisualEngine.setCanvasLib(mockedCanvas);
        });

        describe('when initialising the Visual Engine', function() {
        
            it('should not throw an exception', function() {
                expect(Visual.VisualEngine.init).not.toThrow('Need Canvas loaded');
            })

        });

        describe('when requesting a redraw on the the Visual Engine', function() {

            it('should invoke redraw on mocked canvas', function() {
                spyOn(mockedCanvas, 'redraw');
                Visual.VisualEngine.redraw();
                expect(mockedCanvas.redraw).toHaveBeenCalled();
            });

        });

    });

});