/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CContainer } from "./CContainer";
import { CElement } from "./CElement";
import { CTarget } from "./enums";

export class CLink extends CContainer<"a"> {

	public constructor(url?: string, view?: CElement<any>) {
		super("a");
		if (view) this.addSubview(view);
		this.element.href = url || "";
	}

	public set url(value: string) {
		this.element.href = value;
	}

	public get url(): string {
		return this.element.href;
	}

	public set target(value: CTarget) {
		this.element.target = value;
	}

	public get target(): CTarget {
		return this.element.target as CTarget;
	}

}
