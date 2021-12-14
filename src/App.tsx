import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Page,
  Toolbar,
  PdfExport,
  ExcelExport,
  Grid,
} from "@syncfusion/ej2-react-grids";
import "./App.css";
import data from "./dataSource.json";

function App() {
  let grid: Grid | null;
  const toolbarClick = (args: any) => {
    if (grid) {
      if (args.item.id.includes("pdfexport")) {
        grid.pdfExport({
          fileName: "titan_sync.pdf",
          exportType: "CurrentPage",
          theme: {
            header: {
              bold: true,
              fontColor: "#00ff00",
              fontName: "Georgia",
              fontSize: 12,
            },
            record: { fontColor: "#0000ff", fontName: "Georgia", fontSize: 8 },
          },
          header: {
            fromTop: 0,
            height: 120,
            contents: [
              {
                type: "Text",
                value: "Islanders",
                position: { x: 0, y: 50 },
                style: { textBrushColor: "#111111", fontSize: 12 },
              },
            ],
          },
          footer: {
            contents: [
              {
                type: "Text",
                value: "Have a great day",
                position: { x: 0, y: 50 },
                style: { textBrushColor: "#000000", fontSize: 12 },
              },
            ],
            fromBottom: 130,
            height: 120,
          },
        });
      } else if (args.item.id.includes("excelexport")) {
        grid.excelExport({
          fileName: "sphinx.xlsx",
          exportType: "CurrentPage",
          header: {
            headerRows: 2,
            rows: [
              {
                cells: [
                  {
                    colSpan: 4,
                    value: "Titans Exploit",
                    style: {
                      fontColor: "#C67878",
                      fontSize: 12,
                      hAlign: "Center",
                      bold: true,
                    },
                  },
                ],
              },
            ],
          },
        });
      }
    }
  };
  return (
    <div className="App" style={{ margin: "10%", marginTop: "5%" }}>
      <GridComponent
        dataSource={data}
        ref={(grids) => (grid = grids)}
        allowPaging={true}
        toolbar={["PdfExport", "ExcelExport"]}
        allowPdfExport={true}
        allowExcelExport
        toolbarClick={toolbarClick}
      >
        <ColumnsDirective>
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
            editType="numericedit"
          />
        </ColumnsDirective>

        <Inject services={[Page, Toolbar, PdfExport, ExcelExport]} />
      </GridComponent>
    </div>
  );
}

export default App;
