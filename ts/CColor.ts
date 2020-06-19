/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export class CColor {

	private readonly hex: string;
	public static black: CColor = new CColor("#000");
	public static white: CColor = new CColor("#fff");

	private constructor(hex: string) {
		this.hex = hex;
	}

	public getHex(): string {
		return this.hex;
	}

	public static hex(value: string): CColor {
		return new CColor(value);
	}

}
