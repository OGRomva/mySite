import styles from './App.module.scss';
import Layout from './componets/Layout/Layout';
import MainPage from './componets/MainPage/MainPage';

const App = () => {
	return (
		<main className={styles.mainContainer}>
			<Layout>
				<MainPage />
			</Layout>
		</main>
	);
};

export default App;
