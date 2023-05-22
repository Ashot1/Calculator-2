import { VitePWAOptions } from 'vite-plugin-pwa'

export const manifestForPlugin: Partial<VitePWAOptions> = {
	registerType: 'autoUpdate',
	includeAssets: ["favicon.ico", "apple-touch-icon"],
	devOptions: {
		enabled: true
	},
	manifest: {
		'short_name': 'V-Calculator',
		'name': 'Vietnam Calculator 2',
		'icons': [
			{
				'src': 'src/assets/icons/icon-72x72.png',
				'sizes': '72x72',
				'type': 'image/png',
				'purpose': 'maskable any'
			},
			{
				'src': 'src/assets/icons/icon-96x96.png',
				'sizes': '96x96',
				'type': 'image/png',
				'purpose': 'maskable any'
			},
			{
				'src': 'src/assets/icons/icon-128x128.png',
				'sizes': '128x128',
				'type': 'image/png',
				'purpose': 'maskable any'
			},
			{
				'src': 'src/assets/icons/icon-144x144.png',
				'sizes': '144x144',
				'type': 'image/png',
				'purpose': 'maskable any'
			},
			{
				'src': 'src/assets/icons/icon-152x152.png',
				'sizes': '152x152',
				'type': 'image/png',
				'purpose': 'maskable any'
			},
			{
				'src': 'src/assets/icons/icon-192x192.png',
				'sizes': '192x192',
				'type': 'image/png',
				'purpose': 'maskable any'
			},
			{
				'src': 'src/assets/icons/icon-384x384.png',
				'sizes': '384x384',
				'type': 'image/png',
				'purpose': 'maskable any'
			},
			{
				'src': 'src/assets/icons/icon-512x512.png',
				'sizes': '512x512',
				'type': 'image/png',
				'purpose': 'maskable any'
			}
		],
		'scope': './',
		'start_url': './',
		'display': 'standalone',
		'theme_color': '#4F1975',
		'background_color': '#4a00e0'
	}
}