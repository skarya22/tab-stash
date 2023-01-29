import React from "react";
import "material-symbols";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const FilterLabels = ({ labels, selectedLabel, changeResults }) => {
  return (
    <ToggleButtonGroup
      value={selectedLabel}
      exclusive
      onChange={(event, val) => {
        changeResults(val);
        console.log(selectedLabel);
      }}
      aria-label="text alignment"
    >
      {labels.map((label) => {
        return (
          <ToggleButton
            key={label.id}
            value={label.name}
            aria-label="left aligned"
            id="typeswitcher"
          >
            <div>{label.name}</div>
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

export default FilterLabels;
