import { FC } from 'react';
import styles from './MainPage.module.scss';
import HeroSection from './components/HeroSection/HeroSection';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {
	return (
		<div className={styles.MainPage}>
			<HeroSection></HeroSection>
		</div>
	);
};

export default MainPage;
