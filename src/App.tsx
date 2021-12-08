import React, { useEffect, useState } from "react";
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
import {
  createOrder,
  deleteOrder,
  getOrders,
  updateOrder,
} from "./orderService";
import "./App.css";

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

  const [data, setData] = useState();

  useEffect(() => {
    getOrders().then((data) => {
      setData(data);
    });
  });
  function dataSourceChanged(state: any) {
    if (state.action === "add") {
      createOrder(state.data);
    } else if (state.action === "edit") {
      updateOrder(state.data);
    } else if (state.requestType === "delete") {
      console.log(state.data);
      deleteOrder(state.data[0].OrderID);
    }
  }

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
        dataSourceChanged={dataSourceChanged}
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
