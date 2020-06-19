/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CContainer } from "./CContainer";
import { CElement } from "./CElement";

export class CListItem<T extends CElement<any> = CElement<any>> extends CContainer<"li"> {

	public constructor(value: T) {
		super("li");
		this.addSubview(value);
	}

}