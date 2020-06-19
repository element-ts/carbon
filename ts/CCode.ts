/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CText } from "./CText";

export class CCode extends CText<"code"> {

	public constructor(value?: string) {
		super("code");
		if (value) this.text = value;
	}

}