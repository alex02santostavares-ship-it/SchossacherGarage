#!/usr/bin/env node
import { execSync } from 'child_process';

console.log('⚡ Cloudflare build interceptor: Running astro build...');
try {
  execSync('npx astro build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
  process.exit(0);
} catch (err) {
  console.error('❌ Build error:', err);
  process.exit(1);
}
