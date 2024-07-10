import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

export default defineConfig({
	input: './src/index.ts',
	plugins: [typescript()],
	external: ['superstruct'],
	output: [
		{
			file: './dist/index.mjs',
			format: 'esm',
			sourcemap: true,
		},
		{
			file: './dist/index.cjs',
			format: 'umd',
			name: 'Superstruct Fender',
			sourcemap: true,
		},
	],
});
