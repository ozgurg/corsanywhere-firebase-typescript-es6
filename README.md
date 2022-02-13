# cors-anywhere & Firebase Functions & TypeScript & ES6 modules
Example usage of cors-anywhere & Firebase Functions & TypeScript & ES6 modules.

See `functions/src/index.ts`

## Usage
1) Install dependencies
``` sh
npm install
cd functions && npm install
```

2) Edit project name in `.firebaserc`

3) Deploy the function
``` sh
cd functions && npm run deploy
```

4) Now you can access cors-anywhere when you enter: https://{FIREBASE_REGION}-{PROJECT_NAME}.cloudfunctions.net/cors

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/ozgurg/corsanywhere-firebase-typescript/blob/master/LICENSE)
