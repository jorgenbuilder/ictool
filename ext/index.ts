import { Principal } from '@dfinity/principal';
import { from32bits, to32bits, toHexString } from '../bits';


export function encodeTokenIdentifier(
    canister : string,
    index    : number,
) : string {
    const padding = Buffer.from("\x0Atid");
    const array = new Uint8Array([
        ...padding,
        ...Principal.fromText(canister).toUint8Array(),
        ...to32bits(index),
    ]);
    return Principal.fromUint8Array(array).toText();
};

export function decodeTokenIdentifier(
    tid: string,
) : { index : number, canister : string } {
    const bytes = Principal.fromText(tid).toUint8Array();
    const arr = Array.from(bytes);
    const padding = arr.splice(0, 4);
    if (toHexString(padding) !== toHexString(Array.from(Buffer.from("\x0Atid")))) {
        return {
            index: 0,
            canister: tid,
        };
    } else {
        return {
            index: from32bits(arr.splice(-4)),
            canister: Principal.fromUint8Array(bytes.subarray(4, -4)).toText(),
        };
    }
};
