import { FC } from 'react';
import styles from './Lines.module.scss';

interface ILinesProps {
	count: number;
	countOfLinesBehind: number;
}

function test(gaps: number[]) {
	let buf = 0;
	for (let i = 0; i < gaps.length; i++) {
		buf = buf + gaps[i];
	}
	console.log(buf, gaps);
}

function fillGaps(
	count: number,
	firstGap: number,
	countOfLinesBehind: number,
	q: number
): Array<number> {
	const sizeOfArr = count + countOfLinesBehind - 1;
	const gaps = new Array<number>(sizeOfArr);

	console.log(q);
	if (count % 2 === 1) {
		gaps[Math.round(sizeOfArr / 2) - 1] = firstGap;
		gaps[Math.round(sizeOfArr / 2)] = firstGap;

		for (let i = Math.round(sizeOfArr / 2) - 2; i >= 0; i = i - 1) {
			gaps[i] = Math.round(gaps[i + 1] * q * 10000) / 10000;
			gaps[sizeOfArr - i - 1] = gaps[i];
		}
	}
	return gaps;
}

function setGap(gaps: number[], index: number, gap: number): number {
	if (index == 0) {
		return 0;
	} else {
		return (gap = gap + gaps[index - 1]);
	}
}

function setDeg(buf: number): number {
	buf = Math.round(buf * 1000) / 1000;

	console.log(buf, Math.atan((50 - buf) / 100));
	return Math.atan((50 - buf) / 50);
}

const Lines: FC<ILinesProps> = ({ count, countOfLinesBehind }) => {
	const q = 9 / 10;
	const firstGap = (50 * (q - 1)) / (q ** Math.round((count - 1) / 2) - 1);

	const gaps = fillGaps(count, firstGap, countOfLinesBehind, q);
	let buf: number = 0;

	return (
		<div className={styles.Lines}>
			{[...Array(count)].map((item, index) => {
				buf = setGap(gaps, index, buf);
				return (
					<div
						className={styles.LineBox}
						style={{
							transform: `translateX(${buf}cqw)`,
						}}
					>
						<div
							className={styles.Line}
							style={{
								position: 'absolute',
								height: '200%',
								top: `-100%`,
								transformOrigin: `left bottom`,
								rotate: `${setDeg(buf)}rad`,
							}}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Lines;
