describe('test', function() {
    it('should pass', function() {
        expect(1).to.eq(1);
    });
    it('should skip', function() {
        if (1 === 1) {
            this.skip();
        }
    });
    it('should fail', function() {
        expect(1).to.eq(2);
    });
});
