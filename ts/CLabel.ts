/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CText } from "./CText";

export class CLabel extends CText<"span"> {

	public constructor(value?: string) {
		super("span", value);
	}

}