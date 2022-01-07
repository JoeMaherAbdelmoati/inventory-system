import { listItems } from "@/types";

export interface inventoryManagementSystem {
  list: listItems[],
  addItem: (itemName: string, quantity: number, value: number) => void;
  removeItem: (itemName: string, quantity: number) => void;
  returnItem: (itemName: string, quantity: number, value: number) => void;
}
