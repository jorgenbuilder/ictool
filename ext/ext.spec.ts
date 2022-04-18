import {
    encodeTokenIdentifier,
    decodeTokenIdentifier,
} from '.';

describe('ext tool', () => {

    it('encodes token identifiers', () => {
        expect(encodeTokenIdentifier('nges7-giaaa-aaaaj-qaiya-cai', 0))
            .toEqual('spj3g-4ikor-uwiaa-aaaaa-cmacg-aaqca-aaaaa-a');
    });

    it('decodes token identifiers', () => {
        let { canister, index } = decodeTokenIdentifier('spj3g-4ikor-uwiaa-aaaaa-cmacg-aaqca-aaaaa-a');
        expect(canister).toEqual('nges7-giaaa-aaaaj-qaiya-cai');
        expect(index).toEqual(0);

        expect(
            decodeTokenIdentifier(
                encodeTokenIdentifier('nges7-giaaa-aaaaj-qaiya-cai', 1000)
            )
        ).toEqual({ canister: 'nges7-giaaa-aaaaj-qaiya-cai', index: 1000 })
    });
});