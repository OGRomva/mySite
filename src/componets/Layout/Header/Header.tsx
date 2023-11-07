import { FC } from 'react';
import styles from './Header.module.scss';

interface IHeaderProps {
}

const Header: FC<IHeaderProps> = () => {
  return <header className={styles.header}></header>
};

export default Header;
