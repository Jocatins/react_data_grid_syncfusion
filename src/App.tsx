import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Page,
  Column,
} from "@syncfusion/ej2-react-grids";
import "./App.css";
import data from "./dataSource.json";
import { getValue } from "@syncfusion/ej2-base";

function App() {
  const queryCellInfo = (args: any) => {
    if (args.data.OrderID === 10252 && args.column.field === "CustomerID") {
      args.rowSpan = 2;
    }
    if ((args.column as Column).field === "Freight" && args.data && args.cell) {
      if (getValue("Freight", args.data) > 100) {
        args.cell.classList.add("above-100");
      } else if (getValue("Freight", args.data) > 75) {
        args.cell.classList.add("above-75");
      } else if (getValue("Freight", args.data) > 50) {
        args.cell.classList.add("above-50");
      }
    }
  };
  const rowDataBound = (args: any) => {
    if (args.data.Freight > 50) {
      args.row.classList.add("above-50");
    }
  };

  return (
    <div className="App" style={{ margin: "10%", marginTop: "5%" }}>
      <GridComponent
        dataSource={data}
        allowPaging={true}
        queryCellInfo={queryCellInfo}
        //rowDataBound={rowDataBound}
      >
        <ColumnsDirective>
          <ColumnDirective type="checkbox" width="50" />
          <ColumnDirective
            field="OrderID"
            headerText="Invoice ID"
            textAlign="Left"
            width="100"
            isPrimaryKey={true}
          />
          <ColumnDirective
            field="CustomerID"
            headerText="Customer ID"
            width="150"
          />
          <ColumnDirective
            field="OrderDate"
            headerText="Order Date "
            width="100"
            type="Date"
            editType="datepickeredit"
            format="yMd"
          />
          <ColumnDirective
            field="ShippedDate"
            headerText="Shipped Date "
            width="100"
            editType="datepickeredit"
            format="yMd"
          />
          <ColumnDirective
            field="ShipName"
            headerText="Ship Name "
            width="100"
          />
          <ColumnDirective
            field="ShipAddress"
            headerText="Ship Address "
            width="100"
          />
          <ColumnDirective
            field="PhoneNumber"
            headerText="Phone Number "
            width="100"
          />
          <ColumnDirective
            field="Freight"
            headerText="Freight "
            format="C2"
            width="100"
          />
        </ColumnsDirective>

        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
}

export default App;
