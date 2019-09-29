import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine.scss";
import "ag-grid-community/src/styles/ag-theme-alpine-dark/sass/ag-theme-alpine-dark.scss";
import { AgGridReact } from "ag-grid-react";
import React from "react";
import { themeKnob } from "./knobs";

export default {
  title: "Tutorial Steps"
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
    field: "make"
  },
  {
    headerName: "Model",
    field: "model"
  },
  {
    headerName: "Price",
    field: "price"
  }
];

export const BasicConfig = () => (
  <div
    className={themeKnob()}
    style={{
      height: "500px",
      width: "600px"
    }}
  >
    <AgGridReact columnDefs={columnDefs} rowData={data}></AgGridReact>
  </div>
);

export const FilterEnabled = () => {
  return (
    <div
      className={themeKnob()}
      style={{
        height: "500px",
        width: "600px"
      }}
    >
      <AgGridReact
        columnDefs={columnDefs.map(def => ({
          ...def,
          sortable: true,
          filter: true,
          filterParams: {
            applyButton: true,
            clearButton: true
          }
        }))}
        rowData={data}
      ></AgGridReact>
    </div>
  );
};

export const SelectionEnabled = () => {
  return (
    <div
      className={themeKnob()}
      style={{
        height: "500px",
        width: "600px"
      }}
    >
      <AgGridReact
        columnDefs={columnDefs.map((def, index) => ({
          ...def,
          ...(index === 0
            ? { checkboxSelection: true, headerCheckboxSelection: true }
            : {}),
          sortable: true,
          filter: true,
          filterParams: {
            applyButton: true,
            clearButton: true
          }
        }))}
        rowSelection="multiple"
        rowData={data}
      ></AgGridReact>
    </div>
  );
};
