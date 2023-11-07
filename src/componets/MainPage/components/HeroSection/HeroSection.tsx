import { FC } from 'react';
import styles from './HeroSection.module.scss';
import Particles from '../../../Particles/Particles';
import Lines from './Lines/Lines';

interface IHeroSectionProps {}

const HeroSection: FC<IHeroSectionProps> = () => {
	return (
		<div className={styles.HeroSection}>
			<div className={styles.SkyBox}>
				<div className={styles.Sky}>
					<div className={styles.ParticlesContainer}>
						<Particles
							count={50}
							sizes={[2, 5]}
							lifeLengths={[2, 5]}
						/>
					</div>
					<div className={styles.TheSun} />
				</div>
			</div>

			<div className={styles.GroundBox}>
				<Lines count={31} countOfLinesBehind={0} />
			</div>
		</div>
	);
};

export default HeroSection;
