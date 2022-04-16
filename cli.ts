#!/usr/bin/env -S ts-node --files
import { Principal } from '@dfinity/principal';
import { Command } from 'commander';

import { principalToAddress } from './principal';
import { encodeTokenIdentifier, decodeTokenIdentifier } from './ext';

const program = new Command();

program
    .name('icy')
    .description('helpful tools for internet computer projects');

const ext = program
    .command('ext')
    .description('ext standard helpers');

ext
    .command('decode')
    .description('Decode canister id and token index from an EXT standard token identifier principal string')
    .argument('<string>', 'token identifier')
    .action((str : string) => console.log(decodeTokenIdentifier(str)));

ext
    .command('encode')
    .description('Encode canister id and token index into an EXT standard token identifier principal string')
    .argument('<string>', 'canister-id')
    .argument('<number>', 'token-index')
    .action((str : string, num : number) => console.log(encodeTokenIdentifier(str, num)));

const principal = program
    .command('principal')
    .description('principal helpers');

principal
    .command('address')
    .description('encode a principal to an address')
    .argument('<string>', 'principal')
    .argument('[number]', 'subaccount')
    .action((str : string, num? : number) => console.log(principalToAddress(Principal.fromText(str), num)));

program.parse();