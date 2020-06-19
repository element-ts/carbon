/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CTableDataRow } from "./CTableDataRow";
import { CTableHeaderRow } from "./CTableHeaderRow";
import { CContainer } from "./CContainer";

export class CTableRow extends CContainer<"tr", CTableDataRow | CTableHeaderRow> {

	public constructor(...children: (CTableDataRow | CTableHeaderRow)[]) {
		super("tr");
		this.addSubviews(...children);
	}

}