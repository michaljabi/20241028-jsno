import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export function makeDirname(url = '') {
    return dirname(fileURLToPath(url))
} 