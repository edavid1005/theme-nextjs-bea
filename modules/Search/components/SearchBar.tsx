import { IconFilter } from '@prezly/icons';
import translations from '@prezly/themes-intl-messages';
import { Button } from '@prezly/themes-ui-components';
import classNames from 'classnames';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { AVAILABLE_FACET_ATTRIBUTES } from '../utils';

import Facet from './Facet';
import SearchInput from './SearchInput';

import styles from './SearchBar.module.scss';

function Sidebar() {
    const { formatMessage } = useIntl();
    const [isShown, setIsShown] = useState(false);

    function toggleFacets() {
        return setIsShown((s) => !s);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <SearchInput />
                    <Button
                        variation="secondary"
                        icon={IconFilter}
                        title={formatMessage(translations.actions.toggleFilters)}
                        onClick={toggleFacets}
                        className={styles.button}
                    />
                </div>
                <div className={classNames(styles.facets, { [styles.facetsOpen]: isShown })}>
                    <p className={styles.filters}>
                        <FormattedMessage {...translations.search.filters} />
                    </p>
                    {AVAILABLE_FACET_ATTRIBUTES.map((attribute) => (
                        <Facet key={attribute} attribute={attribute} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
