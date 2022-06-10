export function to32bits(num: number): number[] {
    let b = new ArrayBuffer(4);
    new DataView(b).setUint32(0, num);
    return Array.from(new Uint8Array(b));
}

export function from32bits(bytes: number[]): number {
    let value;
    for (let i = 0; i < 4; i++) {
        // @ts-ignore
        value = (value << 8) | bytes[i];
    }
    if (value === undefined) {
        throw new Error(
            `Could not decode number from bytes: ${bytes.join(' ')}`
        );
    }
    return value;
}

export function toHexString(bytes: number[]): string {
    return Array.from(bytes, function (byte) {
        return ('0' + (byte & 0xff).toString(16)).slice(-2);
    }).join('');
}

export function fromHexString(hex: string): number[] {
    if (hex.length % 2 !== 0) {
        throw 'Must have an even number of hex digits to convert to bytes';
    }
    var numBytes = hex.length / 2;
    var byteArray = new Uint8Array(numBytes);
    for (var i = 0; i < numBytes; i++) {
        byteArray[i] = parseInt(hex.substr(i * 2, 2), 16);
    }
    return Array.from(byteArray);
}

export function fromUint8Array(arr: Uint8Array): Blob {
    return new Blob([arr]);
}

export function arrayBufferEqual(a1: ArrayBuffer, a2: ArrayBuffer): boolean {
    if (a1 === a2) {
        return true;
    }

    if (a1.byteLength !== a2.byteLength) {
        return false;
    }

    return (
        JSON.stringify(Array.from(new Uint8Array(a1))) ===
        JSON.stringify(Array.from(new Uint8Array(a2)))
    );
}
