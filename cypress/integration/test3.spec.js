describe('test3', function () {
    beforeEach(() => {
        // fail in the hook
        expect(1).to.eq(2);
    });

    it('should pass', function () {
        expect(1).to.eq(1);
    });
});
