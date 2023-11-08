import type { Category } from '@prezly/sdk';

// prettier-ignore
export type DisplayedCategory =
    Pick<Category, 'id'> &
    Pick<Category.Translation, 'name' | 'description'>
    & { href: string };

export type AlgoliaSettings = {
    appId: string;
    apiKey: string;
    index: string;
};