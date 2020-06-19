/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CElement } from "./CElement";
import { CFontStyle, CFontWeight } from "./enums";
import { CColor } from "./CColor";

export abstract class CText<T extends keyof HTMLElementTagNameMap> extends CElement<T> {

	protected constructor(name: T, value?: string) {
		super(name);
		this.element.innerText = value || "";
	}

	public set text(value: string) {
		this.element.innerText = value;
	}

	public get text(): string {
		return this.element.innerText;
	}

	public set fontWeight(value: CFontWeight) {
		this.element.style.fontWeight = value;
	}

	public get fontWeight(): CFontWeight {
		return this.element.style.fontWeight as CFontWeight;
	}

	public set fontStyle(value: CFontStyle) {
		this.element.style.fontStyle = value;
	}

	public set color(value: CColor) {
		this.element.style.color = value.getHex();
	}

	public get color(): CColor {
		return CColor.hex(this.element.style.color);
	}

}