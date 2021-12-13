import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Filter,
  FilterSettingsModel,
} from "@syncfusion/ej2-react-grids";

import "./App.css";
import data from "./dataSource.json";

function App() {
  const filterOptions: FilterSettingsModel = {
    ignoreAccent: true,
    type: "Menu",
    // type: "Checkbox",
    //type: "Excel"
  };

  return (
    <div className="App" style={{ margin: "10%", marginTop: "5%" }}>
      <GridComponent
        dataSource={data}
        allowFiltering={true}
        filterSettings={filterOptions}
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
            filter={{ type: "Excel" }}
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
            editType="numericedit"
          />
        </ColumnsDirective>
        <Inject services={[Filter]} />
      </GridComponent>
    </div>
  );
}

export default App;
