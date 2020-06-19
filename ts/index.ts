/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

class CColor {

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

class Carbon {

	public readonly view: CStack;

	public constructor(id: string) {
		const element = document.getElementById(id);
		if (element === null) throw Error("Element does not exist.");
		if (element.appendChild === undefined) throw Error("Element provided cannot have children.");
		this.view = new CStack();
		element.appendChild(this.view.rawElement());

	}
}

enum CDisplayType {
	block = "block",
	none = "none",
	flex = "flex",
	inline = "inline"
}

enum CViewPosition {
	static = "static",
	relative = "relative",
	fixed = "fixed",
	absolute = "absolute",
	sticky = "sticky"
}

enum CBoxSizing {
	contentBox = "content-box",
	borderBox = "border-box",
	initial = "initial",
	inherit = "inherit"
}

abstract class CElement<N extends keyof HTMLElementTagNameMap> {

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

enum CViewOrientation {
	row = "row",
	column = "column"
}

enum CViewPrimaryAxisPosition {
	center = "center"
}

enum CViewSecondaryAxisPosition {
	center = "center"
}

abstract class CContainer<T extends keyof HTMLElementTagNameMap, S extends CElement<any> = CElement<any>> extends CElement<T> {

	public addSubview(view: S) {
		super.addSubview(view);
	}

	public addSubviews(...views: S[]) {
		super.addSubviews(...views);
	}

}

class CStack extends CContainer<"div"> {

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

class CView extends CContainer<"div"> {

	public constructor() {
		super("div");
	}

}

class CList extends CContainer<"ul", CListItem> {

	public constructor(...listItems: CListItem[]) {
		super("ul");
		this.addSubviews(...listItems);
	}
}

class CListItem<T extends CElement<any> = CElement<any>> extends CContainer<"li"> {

	public constructor(value: T) {
		super("li");
		this.addSubview(value);
	}

}

enum CFontWeight {
	bold = "bold",
	normal = "normal"
}

enum CFontStyle {
	normal = "normal",
	oblique = "oblique",
	italic = "italic"
}

abstract class CText<T extends keyof HTMLElementTagNameMap> extends CElement<T> {

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

enum CTarget {
	self = "_self",
	blank = "_blank",
	parent = "_parent",
	top = "_top"
}

class CLink extends CContainer<"a"> {

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

class CLabel extends CText<"span"> {

	public constructor(value?: string) {
		super("span", value);
	}

}

class CButton extends CText<"button"> {
	public constructor() {
		super("button");
	}
}

class CImage extends CElement<"img"> {

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

class CTableHeaderRow extends CContainer<"th"> {

	public constructor(child: CElement<any>) {
		super("th");
		this.addSubview(child);
	}

}

class CTableDataRow extends CContainer<"td"> {

	public constructor(child: CElement<any>) {
		super("td");
		this.addSubview(child);
	}

}

class CTableRow extends CContainer<"tr", CTableDataRow | CTableHeaderRow> {

	public constructor(...children: (CTableDataRow | CTableHeaderRow)[]) {
		super("tr");
		this.addSubviews(...children);
	}

}

class CTable extends CContainer<"table", CTableRow> {

	public constructor() {
		super("table");
	}

}

class CCode extends CText<"code"> {

	public constructor(value?: string) {
		super("code");
		if (value) this.text = value;
	}

}

const carbon = new Carbon("root");
carbon.view.orientation = CViewOrientation.row;
carbon.view.primaryAxisPositioning = CViewPrimaryAxisPosition.center;
carbon.view.secondaryAxisPositioning = CViewSecondaryAxisPosition.center;

const sub1 = new CStack();

sub1.orientation = CViewOrientation.column;
sub1.primaryAxisPositioning = CViewPrimaryAxisPosition.center;
sub1.secondaryAxisPositioning = CViewSecondaryAxisPosition.center;

const sub2 = new CStack();

carbon.view.addSubviews(sub1, sub2);

const label1 = new CLabel("1");
label1.display = CDisplayType.none;
sub1.addSubview(label1);
const button = new CButton();
button.text = "Click me!";
button.onClick = () => {
	label1.display = CDisplayType.block;
	label1.text = "WOW YOU CLICKED ME!";
};
sub1.addSubview(button);

const listItem1 = new CListItem(new CLabel("1"));
const listItem2 = new CListItem(new CLabel("2"));
const listItem3 = new CListItem(new CLabel("3"));
const listItem4 = new CListItem(new CLabel("4"));
const listItem5 = new CListItem(new CLabel("5"));
const listItem6 = new CListItem(new CLabel("6"));
const listItem7 = new CListItem(
	new CList(
		new CListItem(new CLabel("7a")),
				new CListItem(new CLabel("7b"))
	)
);
const listItem8 = new CListItem(new CLabel("8"));
const listItem9 = new CListItem(new CLabel("9"));

const list = new CList(listItem1, listItem2, listItem3, listItem4, listItem5, listItem6, listItem7, listItem8, listItem9);
sub2.addSubview(list);

const link = new CLink();
link.target = CTarget.blank;
link.url = "https://google.com";
link.addSubview(new CLabel("Click for google!"));
carbon.view.addSubview(link);

const img = new CImage("https://www.w3schools.com/images/colorpicker.gif", "an image");
carbon.view.addSubview(img);

const table = new CTable();
const row1 = new CTableRow();
row1.addSubviews(
	new CTableHeaderRow(new CLabel("Name")),
	new CTableHeaderRow(new CLabel("Age")),
	new CTableHeaderRow(new CLabel("Email"))
);
const row2 = new CTableRow();
row2.addSubviews(
	new CTableDataRow(new CLabel("Elijah")),
	new CTableDataRow(new CLabel("21")),
	new CTableDataRow(new CLabel("elijah@elijahcobb.com"))
);
table.addSubviews(row1, row2);
sub1.addSubview(table);

sub1.addSubview(new CCode("let x = 1;"));