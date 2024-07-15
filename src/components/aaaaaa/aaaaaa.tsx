import classNames from 'classnames';
import styles from './aaaaaa.module.scss';
import commonStyles from '@styles/common-styles.module.scss';

export interface AaaaaaProps {
    className?: string;
}

export const Aaaaaa = ({ className }: AaaaaaProps) => {
    return <div className={classNames(styles.ddd, styles.vbcvbvbv)}>Aaaaaa</div>;
};
