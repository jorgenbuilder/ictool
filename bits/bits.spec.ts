import {
    to32bits,
    from32bits,
    toHexString,
    fromHexString,
    fromUint8Array,
    arrayBufferEqual,
} from '.';

describe('array buffer equality', () => {
    it('true when comparing the same reference', () => {
        const a1 = new Uint8Array([0, 1, 2, 3, 4]);
        const a2 = a1;
        expect(arrayBufferEqual(a1, a2)).toBe(true);
    });

    it('false when comparing buffers of different size', () => {
        const a1 = new Uint8Array([0, 1, 2, 3, 4]).buffer;
        const a2 = new Uint8Array([0, 1]).buffer;
        expect(arrayBufferEqual(a1, a2)).toBe(false);
    });

    it('true when comparing buffers with the same values', () => {
        const a1 = new Uint8Array([0, 1, 2, 3, 4]).buffer;
        const a2 = new Uint8Array([0, 1, 2, 3, 4]).buffer;
        expect(arrayBufferEqual(a1, a2)).toBe(true);
    });

    it('false when comparing buffers with different values', () => {
        const a1 = new Uint8Array([0, 1, 2, 3, 4]).buffer;
        const a2 = new Uint8Array([6, 1, 4, 3, 4]).buffer;
        expect(arrayBufferEqual(a1, a2)).toBe(false);
    });

    it('encodes string to bits', () => {
        const result = fromHexString(
            '8d669304c2d9cdbeb2702da288cf24a24c2f2abe310c6884af28b42dcbcaaa59'
        );
        expect(result).toBeTruthy();
    });
});
