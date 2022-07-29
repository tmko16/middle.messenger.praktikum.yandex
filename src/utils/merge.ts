import {Indexed} from '../types';

export  default function merge(lhs: Indexed, rhs: Indexed): Indexed {
	for (const p in rhs) {
		// eslint-disable-next-line no-prototype-builtins
		if (!rhs.hasOwnProperty(p)) {
			continue;
		}

		try {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (rhs[p].constructor === Object) {
				rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
			} else {
				lhs[p] = rhs[p];
			}
		} catch(e) {
			lhs[p] = rhs[p];
		}
	}

	return lhs;
}