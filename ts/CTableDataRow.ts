/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CElement } from "./CElement";
import { CContainer } from "./CContainer";

export class CTableDataRow extends CContainer<"td"> {

	public constructor(child: CElement<any>) {
		super("td");
		this.addSubview(child);
	}

}