import 'server-only';

import { match, route } from '@/theme-kit';

export default function router(path: string | string[]) {
    return match(path, [
        route('/', () => import('./homepage')),
        route('/[locale]', () => import('./homepage')),
        route('/[slug]', () => import('./story')),
        route('/s/[uuid]', () => import('./story')),
        route('/media', () => import('./gallery')),
        route('/[locale]/media', () => import('./gallery')),
        route('/media/album/[uuid]', () => import('./gallery-album')),
        route('/[locale]/media/album/[uuid]', () => import('./gallery-album')),
        route('/search', () => import('./search')),
        route('/[locale]/search', () => import('./search')),
    ]);
}
