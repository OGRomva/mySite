import { FC, useEffect, useState } from 'react';
import styles from './Particles.module.scss';
import IParticlesProps from './types/IParticlesProps.interface';
import IParticle from './types/IParticle.interface';

const randomValue = (min: number, max: number): number => {
	return Math.random() * (max - min) + min;
};

const Particles: FC<IParticlesProps> = ({ count, sizes, lifeLengths }) => {
	return (
		<div className={styles.particlesBox}>
			{[...Array(count)].map((item, index) => {
				const size = randomValue(sizes[0], sizes[1]);
				const lifeLength = randomValue(lifeLengths[0], lifeLengths[1]);
				return (
					<Particle
						size={size}
						lifeLength={lifeLength}
						key={'particle' + index}
					/>
				);
			})}
		</div>
	);
};

const Particle: FC<IParticle> = ({ size, lifeLength }) => {
	const [cords, setCords] = useState([
		randomValue(5, 95),
		randomValue(5, 95),
	]);
	useEffect(() => {
		setTimeout(() => {
			setCords([randomValue(5, 95), randomValue(5, 95)]);
		}, lifeLength * 1000);
	}, [cords]);
	return (
		<div
			className={styles.particlePoint}
			style={{
				width: `${size}px`,
				height: `${size}px`,
				top: `${cords[0]}%`,
				left: `${cords[1]}%`,
				animationDuration: `${lifeLength}s`,
			}}
		/>
	);
};

export default Particles;
