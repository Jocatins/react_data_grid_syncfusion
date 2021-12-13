import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Filter,
  Grid,
} from "@syncfusion/ej2-react-grids";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import "./App.css";
import data from "./dataSource.json";
import { DataUtil } from "@syncfusion/ej2-data";

function App() {
  const shipNames = DataUtil.distinct(data, "ShipName") as string[];
  function filterTemplate(props: any) {
    return <DropDownListComponent dataSource={shipNames} change={onChange} />;
  }
  let grid: Grid | null = null;
  function onChange(args: any) {
    grid && grid.filterByColumn("ShipName", "equal", args.value);
  }

  return (
    <div className="App" style={{ margin: "10%", marginTop: "5%" }}>
      <GridComponent
        dataSource={data}
        allowFiltering={true}
        ref={(g) => (grid = g)}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="OrderID"
            headerText="Invoice ID"
            textAlign="Left"
            width="100"
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
            filterTemplate={filterTemplate}
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
            editType="numericedit"
          />
        </ColumnsDirective>
        <Inject services={[Filter]} />
      </GridComponent>
    </div>
  );
}

export default App;
