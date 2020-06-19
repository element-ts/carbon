/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CDisplayType } from "./enums";
import { CColor } from "./CColor";

export abstract class CElement<N extends keyof HTMLElementTagNameMap> {

	protected element: HTMLElementTagNameMap[N];

	protected constructor(name: N) {

		this.element = document.createElement(name);

	}

	public addSubview(view: CElement<any>): void {

		this.element.appendChild(view.element);

	}

	public addSubviews(...views: CElement<any>[]): void {

		for (const view of views) this.addSubview(view);

	}

	public hasSubview(view: CElement<any>): boolean {

		return this.element.contains(view.element);

	}

	public rawElement(): HTMLElementTagNameMap[N] {

		return this.element;

	}

	public set onClick(handler: () => void) {
		this.element.onclick = handler;
	}

	public set background(color: CColor) {
		this.element.style.background = color.getHex();
	}

	public get background(): CColor {
		return CColor.hex(this.element.style.background);
	}

	public set display(value: CDisplayType) {
		this.element.style.display = value;
	}

	public get display(): CDisplayType {
		return this.element.style.display as CDisplayType;
	}

}