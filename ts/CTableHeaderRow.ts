/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CContainer } from "./CContainer";
import { CElement } from "./CElement";

export class CTableHeaderRow extends CContainer<"th"> {

	public constructor(child: CElement<any>) {
		super("th");
		this.addSubview(child);
	}

}
