import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Edit,
  EditSettingsModel,
  Toolbar,
  ToolbarItems,
} from "@syncfusion/ej2-react-grids";
import { MaskedTextBoxComponent } from "@syncfusion/ej2-react-inputs";

import "./App.css";

import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";

function App() {
  const editOptions: EditSettingsModel = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: "Dialog",
  };
  const toolbarOptions: ToolbarItems[] = ["Add", "Edit", "Delete"];
  function editTemplate(args: any) {
    return (
      <MaskedTextBoxComponent
        value={args.PhoneNumber}
        mask="000-000-000"
        id="PhoneNumber"
      />
    );
  }

  const baseUrl: string = "http://localhost:7500";
  const data: DataManager = new DataManager({
    adaptor: new UrlAdaptor(),
    insertUrl: baseUrl + "/orders/insert",
    removeUrl: baseUrl + "/orders/delete",
    updateUrl: baseUrl + "/orders/update",
    url: baseUrl + "/orders",
  });
  return (
    <div className="App" style={{ margin: "10%", marginTop: "5%" }}>
      <GridComponent
        dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 5 }}
        allowFiltering={true}
        allowGrouping={true}
        editSettings={editOptions}
        toolbar={toolbarOptions}
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
            editTemplate={editTemplate}
          />
          <ColumnDirective
            field="Freight"
            headerText="Freight "
            format="C2"
            width="100"
            editType="numericedit"
          />
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar]} />
      </GridComponent>
    </div>
  );
}

export default App;
