import classNames from 'classnames';
import styles from './new-component.module.scss';
import commonStylesStyles from '../../styles/common-styles.module.scss';

export interface NewComponent2Props {
    className?: string;
}

export const NewComponent2 = ({ className }: NewComponent2Props) => {
    return (
        <div
            className={classNames(
                styles.lo,
                styles.mllml,
                styles.hhhjj,
                commonStylesStyles.numberInput,
                styles['new-component'],
            )}
        >
            NewComponent2
        </div>
    );
};
