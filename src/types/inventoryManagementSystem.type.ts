export type listItems = {
  itemName: string,
  quantity: number,
  value: number,
}
export type addItemObjType = {
  list:listItems[];
  itemName:string;
  value:number;
  quantity:number;
}

export type mapItemsObj = {
  list: listItems[];
  itemName: string;
  value: number;
  quantity: number;
  operation: (a: number, b: number) => number;
}
