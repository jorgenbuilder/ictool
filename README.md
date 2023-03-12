# IC Tool

A toolbelt for the CLI, node apps, and the browser.

## Tools

-   EXT Standard
    -   Encode token identifiers
    -   Decode token identifiers
-   Principals
    -   Convert to address

## Setup

### CLI

```sh
npm i -g ictool
ict
```

### Nodejs / Browser

```sh
npm i -S ictool
```

```typescript
import {
    decodeTokenIdentifier,
    encodeTokenIdentifier,
    principalToAddress,
} from 'ictool';
```

## TODO

-   [ ] Key generatation / storage for testing
-   [ ] Browser app testing

## Releasing

1. Bump version in package.json
2. Create a new github release with the new version
