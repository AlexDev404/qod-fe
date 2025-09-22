import path from 'path';

const SRC_DIR = path.resolve(__dirname, './src');
const ENV_DIR = path.resolve(__dirname, './');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './www');
export default async () => {
	const { svelte } = await import('@sveltejs/vite-plugin-svelte');
	return {
		plugins: [
			svelte({
				configFile: path.resolve(ENV_DIR, './svelte.config.mjs')
				// compilerOptions: {
				//   compatibility: {
				//     componentApi: 4
				//   }
				// }
			})
		],
		root: SRC_DIR,
		base: '',
		publicDir: PUBLIC_DIR,
		build: {
			outDir: BUILD_DIR,
			assetsInlineLimit: 0,
			emptyOutDir: true,
			rollupOptions: {
				treeshake: false
			}
		},
		envDir: ENV_DIR,
		resolve: {
			alias: {
				'@': SRC_DIR,
				$root: SRC_DIR
			}
		},
		server: {
			host: true
		}
	};
};
