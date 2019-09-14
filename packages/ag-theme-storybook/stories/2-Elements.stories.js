import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine.scss";
import { AgGridReact } from "ag-grid-react";
import React from "react";

export default {
  title: "UI Elements (scratchpad for the components)"
};

export const filterPopup = () => {
  return (
    <div class="ag-theme-alpine">
      <div class="ag-menu ag-ltr" style={{ minWidth: "146px" }}>
        <div class="ag-filter">
          <div>
            <div class="ag-filter-body-wrapper">
              <select class="ag-filter-select">
                <option value="contains">Contains</option>
                <option value="notContains">Not contains</option>
                <option value="equals">Equals</option>
                <option value="notEqual">Not equal</option>
                <option value="startsWith">Starts with</option>
                <option value="endsWith">Ends with</option>
              </select>
              <div class="ag-filter-body" role="presentation">
                <div class="ag-input-wrapper" role="presentation">
                  <input
                    class="ag-filter-filter"
                    type="text"
                    placeholder="Filter..."
                  />
                </div>
              </div>
              <div class="ag-filter-condition">
                <label>
                  <input
                    type="radio"
                    class="and"
                    name="ag-simple-filter-and-or-159"
                    value="AND"
                    checked="checked"
                  />
                  AND
                </label>
                <label>
                  <input
                    type="radio"
                    class="or"
                    name="ag-simple-filter-and-or-159"
                    value="OR"
                  />
                  OR
                </label>
              </div>
              <select class="ag-filter-select">
                <option value="contains">Contains</option>
                <option value="notContains">Not contains</option>
                <option value="equals">Equals</option>
                <option value="notEqual">Not equal</option>
                <option value="startsWith">Starts with</option>
                <option value="endsWith">Ends with</option>
              </select>
              <div class="ag-filter-body" role="presentation">
                <div class="ag-input-wrapper" role="presentation">
                  <input
                    class="ag-filter-filter"
                    type="text"
                    placeholder="Filter..."
                  />
                </div>
              </div>
            </div>
            <div class="ag-filter-apply-panel">
              <button type="button">Clear Filter</button>
              <button type="button">Apply Filter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
