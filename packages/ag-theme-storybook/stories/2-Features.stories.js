import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine.scss";
import { AgGridReact } from "ag-grid-react";
import React from "react";

export default {
  title: "Basic Features"
};

const data = [
  {
    make: "Toyota",
    model: "Celica",
    price: 35000
  },
  {
    make: "Ford",
    model: "Mondeo",
    price: 32000
  },
  {
    make: "Porsche",
    model: "Boxter",
    price: 72000
  },
  {
    make: "Toyota",
    model: "Celica",
    price: 35000
  },
  {
    make: "Ford",
    model: "Mondeo",
    price: 32000
  },
  {
    make: "Porsche",
    model: "Boxter",
    price: 72000
  },
  {
    make: "Toyota",
    model: "Celica",
    price: 35000
  },
  {
    make: "Ford",
    model: "Mondeo",
    price: 32000
  },
  {
    make: "Porsche",
    model: "Boxter",
    price: 72000
  }
];

const columnDefs = [
  {
    headerName: "Make",
    field: "make",
    headerTooltip: "The Make of the car"
  },
  {
    headerName: "Model",
    field: "model",
    headerTooltip: "The model of the car, very long!"
  },
  {
    headerName: "Price",
    field: "price",
    headerTooltip: "Price"
  }
];

export const HeaderTooltip = () => (
  <div
    className="ag-theme-alpine"
    style={{
      height: "500px",
      width: "600px"
    }}
  >
    <AgGridReact columnDefs={columnDefs} rowData={data}></AgGridReact>
  </div>
);

const columnGroupDefs = [
  {
    headerName: "Make and Model",
    children: [
      {
        headerName: "Make",
        field: "make",
        headerTooltip: "The Make of the car"
      },
      {
        headerName: "Model",
        field: "model",
        headerTooltip: "The model of the car, very long!",
        columnGroupShow: "closed"
      }
    ]
  },
  {
    headerName: "Price",
    field: "price",
    headerTooltip: "Price"
  }
];

export const ColumnGroups = () => (
  <div
    className="ag-theme-alpine"
    style={{
      height: "500px",
      width: "600px"
    }}
  >
    <AgGridReact columnDefs={columnGroupDefs} rowData={data}></AgGridReact>
  </div>
);

export const ResizableColumnGroups = () => (
  <div
    className="ag-theme-alpine"
    style={{
      height: "500px",
      width: "600px"
    }}
  >
    <AgGridReact
      defaultColDef={{ resizable: true }}
      columnDefs={columnGroupDefs}
      rowData={data}
    ></AgGridReact>
  </div>
);

const pinnedColumnDefs = [
  {
    headerName: "Make",
    field: "make",
    pinned: "left"
  },
  {
    headerName: "Model",
    field: "model"
  },
  {
    headerName: "Price",
    field: "price"
  },
  {
    headerName: "Make",
    field: "make"
  },
  {
    headerName: "Model",
    field: "model"
  },
  {
    headerName: "Price",
    field: "price",
    pinned: "right"
  }
];

export const PinnedColumns = () => (
  <div
    className="ag-theme-alpine"
    style={{
      height: "500px",
      width: "700px"
    }}
  >
    <AgGridReact
      defaultColDef={{ resizable: true }}
      columnDefs={pinnedColumnDefs}
      rowData={data}
    ></AgGridReact>
  </div>
);
