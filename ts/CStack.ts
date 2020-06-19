/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CContainer } from "./CContainer";
import { CViewOrientation, CViewPrimaryAxisPosition, CViewSecondaryAxisPosition } from "./enums";

export class CStack extends CContainer<"div"> {

	public constructor() {
		super("div");
		this.element.style.display = "flex";
		this.orientation = CViewOrientation.column;
	}

	public set orientation(value: CViewOrientation) {
		this.element.style.flexDirection = value;
	}

	public set primaryAxisPositioning(value: CViewPrimaryAxisPosition) {
		this.element.style.justifyContent = value;
	}

	public get primaryAxisPositioning(): CViewPrimaryAxisPosition {
		return this.element.style.justifyContent as CViewPrimaryAxisPosition;
	}

	public set secondaryAxisPositioning(value: CViewSecondaryAxisPosition) {
		this.element.style.alignItems = value;
	}

	public get secondaryAxisPositioning(): CViewSecondaryAxisPosition {
		return this.element.style.alignItems as CViewSecondaryAxisPosition;
	}

}