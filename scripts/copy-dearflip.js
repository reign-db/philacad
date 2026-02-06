/**
 * Copy DearFlip dflip folder from node_modules to public.
 * Run after npm install so /dearflip/ is available when the app loads.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const src = path.join(__dirname, '../node_modules/@dearhive/dearflip-jquery-flipbook/dflip')
const dest = path.join(__dirname, '../public/dearflip')

if (!fs.existsSync(src)) {
  console.log('DearFlip not found in node_modules, skipping copy.')
  process.exit(0)
}

function copyRecursive(srcDir, destDir) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })
  for (const name of fs.readdirSync(srcDir)) {
    const srcPath = path.join(srcDir, name)
    const destPath = path.join(destDir, name)
    if (fs.statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

copyRecursive(src, dest)
console.log('DearFlip files copied to public/dearflip')
