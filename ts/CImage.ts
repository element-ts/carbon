/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CElement } from "./CElement";

export class CImage extends CElement<"img"> {

	public constructor(source?: string, alt?: string) {
		super("img");
		if (source) this.element.src = source;
		if (alt) this.element.alt = alt;
	}

	public set source(value: string) {
		this.element.src = value;
	}

	public get source(): string {
		return this.element.src;
	}

	public set alt(value: string) {
		this.element.alt = value;
	}

	public get alt(): string {
		return this.element.alt;
	}

}