export interface IOrderModel {
  OrderID?: number;
  CustomerID?: string;
  OrderDate?: Date;
  ShippedDate?: string;
  ShipName?: string;
  ShipAddress?: string;
  ShipCity?: string;
  PhoneNumber?: number;
  Freight?: number;
  isAdd?: boolean;
  Verified?: boolean;
}
