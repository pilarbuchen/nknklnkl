import classNames from 'classnames';
import styles from './new-componentd.module.scss';
import commonStyles from '@styles/common-styles.module.scss';

export interface NewComponentdProps {
    className?: string;
}

export const NewComponentd = ({ className }: NewComponentdProps) => {
    return <div className={classNames(styles.root, className)}>NewComponentd</div>;
};
