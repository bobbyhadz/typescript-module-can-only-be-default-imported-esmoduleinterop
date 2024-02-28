import path from 'path';

export const num = 42;

// ✅ "/home/borislav/Desktop/typescript/src/another-file.ts"
console.log(path.join(__dirname, './another-file.ts'));
