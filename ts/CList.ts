/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CContainer } from "./CContainer";
import { CListItem } from "./CListItem";

export class CList extends CContainer<"ul", CListItem> {

	public constructor(...listItems: CListItem[]) {
		super("ul");
		this.addSubviews(...listItems);
	}
}