import { Principal } from '@dfinity/principal';
import {
    principalToAddress,
} from '.';

describe('principal tool', () => {

    it('encodes principal to addresses', () => {
        expect(principalToAddress(Principal.fromText('nges7-giaaa-aaaaj-qaiya-cai')))
            .toEqual('39385700a813375477ca0d044b65593272283650d23c0ac0acbc6e48cad5e6fc');
        
        expect(principalToAddress(Principal.fromText('nges7-giaaa-aaaaj-qaiya-cai'), 10))
            .toEqual('4308851253fa7652da0a8050ed72ca3427baf0d9a3b8ccb1370f669f954d6412');
   })
})