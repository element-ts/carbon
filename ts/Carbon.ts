/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CStack } from "./CStack";

export class Carbon {

	public readonly view: CStack;

	public constructor(id: string) {
		const element = document.getElementById(id);
		if (element === null) throw Error("Element does not exist.");
		if (element.appendChild === undefined) throw Error("Element provided cannot have children.");
		this.view = new CStack();
		element.appendChild(this.view.rawElement());

	}
}