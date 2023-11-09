'use client';

import { translations } from '@prezly/theme-kit-intl';

import { PageTitle } from '@/components/PageTitle';
import { useIntl } from '@/theme-kit/intl/client';

import { useAlgoliaState } from './AlgoliaStateContext';

export function Title() {
    const { formatMessage } = useIntl();
    const { searchState } = useAlgoliaState();

    const { query: searchQuery } = searchState;

    return (
        <PageTitle
            title={
                searchQuery
                    ? formatMessage(translations.search.fullResultsTitle)
                    : formatMessage(translations.search.title)
            }
        />
    );
}
