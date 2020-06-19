/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { Carbon } from "./Carbon";
import { CViewOrientation, CViewPrimaryAxisPosition, CViewSecondaryAxisPosition, CDisplayType, CTarget } from "./enums";
import { CStack } from "./CStack";
import { CLabel } from "./CLabel";
import { CButton } from "./CButton";
import { CListItem } from "./CListItem";
import { CList } from "./CList";
import { CLink } from "./CLink";
import { CTableRow } from "./CTableRow";
import { CTableHeaderRow } from "./CTableHeaderRow";
import { CTable } from "./CTable";
import { CTableDataRow } from "./CTableDataRow";
import { CCode } from "./CCode";
import { CImage } from "./CImage";



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