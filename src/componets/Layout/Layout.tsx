import { FC, PropsWithChildren } from 'react';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface ILayoutProps {
}

const Layout: FC<PropsWithChildren<ILayoutProps>> = ({children}) => {
  return <div className={styles.layout}>
	<Header/>
          <div className={styles.innerBox}>
            {
				children
			}
          </div>
    <Footer/>
  </div>
};

export default Layout;
