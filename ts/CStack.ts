/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { CContainer } from "./CContainer";
import { CFlexDirection, CFlexPrimaryAxisPosition, CFlexSecondaryAxisPosition } from "./enums";

export class CStack extends CContainer<"div"> {

	public constructor() {
		super("div");
		this.element.style.display = "flex";
		this.orientation = CFlexDirection.column;
	}

	public set orientation(value: CFlexDirection) {
		this.element.style.flexDirection = value;
	}

	public set primaryAxisPositioning(value: CFlexPrimaryAxisPosition) {
		this.element.style.justifyContent = value;
	}

	public get primaryAxisPositioning(): CFlexPrimaryAxisPosition {
		return this.element.style.justifyContent as CFlexPrimaryAxisPosition;
	}

	public set secondaryAxisPositioning(value: CFlexSecondaryAxisPosition) {
		this.element.style.alignItems = value;
	}

	public get secondaryAxisPositioning(): CFlexSecondaryAxisPosition {
		return this.element.style.alignItems as CFlexSecondaryAxisPosition;
	}

}