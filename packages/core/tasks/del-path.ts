import fs from 'node:fs';
import { resolve } from 'node:path';

export async function delPath(path: string): Promise<void> {
  try {
    if (fs.existsSync(path)) {
      const files = fs.readdirSync(path);
      for (const file of files) {
        const curPath = resolve(path, file);
        const isDirectory = fs.statSync(curPath).isDirectory();
        if (isDirectory) {
          await delPath(curPath); // remove child directory
        }
        else {
          fs.unlinkSync(curPath);
        }
      }
      // when empty, remove current directory
      fs.rmdirSync(path);
    }
  }
  catch (error) {
    console.error(`Error deleting path ${path}:`, error);
  }
}
