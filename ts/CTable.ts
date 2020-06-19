/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CContainer } from "./CContainer";
import { CTableRow } from "./CTableRow";

export class CTable extends CContainer<"table", CTableRow> {

	public constructor() {
		super("table");
	}

}