/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CElement } from "./CElement";

export abstract class CContainer<T extends keyof HTMLElementTagNameMap, S extends CElement<any> = CElement<any>> extends CElement<T> {

	public addSubview(view: S) {
		super.addSubview(view);
	}

	public addSubviews(...views: S[]) {
		super.addSubviews(...views);
	}

}