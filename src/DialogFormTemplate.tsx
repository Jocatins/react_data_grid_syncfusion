import { DataUtil } from "@syncfusion/ej2-data";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  NumericTextBoxComponent,
  TextBoxComponent,
} from "@syncfusion/ej2-react-inputs";
import * as React from "react";

const DialogFormTemplate: React.FC = (props: any) => {
  const shipNameData: any = DataUtil(orderData, "ShipName", true);
  return (
    <div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <TextBoxComponent
            id="OrderID"
            value={props.OrderID}
            enabled={props.isAdd}
            placeholder="Order ID"
            floatLabelType="Auto"
          />
        </div>
        <div className="form-group col-md-6">
          <TextBoxComponent
            id="CustomerID"
            value={props.CustomerID}
            placeholder="Order ID"
            floatLabelType="Auto"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <NumericTextBoxComponent
            id="Freight"
            value={props.Freight}
            format="C2"
            floatLabelType="Always"
            placeholder="Freight"
          />
        </div>
        <div className="form-group col-md-6">
          <DropDownListComponent
            id="ShipName"
            value={props.ShipName}
            dataSource={shipNameData}
            fields={{ text: "ShipName", value: "ShipName" }}
            format="C2"
            floatLabelType="Always"
            placeholder="Ship Name"
            popupHeight="300px"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <TextBoxComponent
            id="ShipAddress"
            value={props.ShipAddress}
            placeholder="Ship Address"
            floatLabelType="Auto"
            multiline={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DialogFormTemplate;
