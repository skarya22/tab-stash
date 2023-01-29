import React from "react";
import "material-symbols";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Tooltip } from "@mui/material";

const ToggleTypes = ({ discludeType, changeTypeOfResults }) => {
  return (
    <>
      <ToggleButtonGroup
        value={discludeType}
        exclusive
        onChange={changeTypeOfResults}
        aria-label="text alignment"
      >
        <ToggleButton
          value="summary"
          aria-label="left aligned"
          id="typeswitcher"
        >
          <Tooltip title="Summaries">
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "50px",
                color: "#f33535",
              }}
            >
              summarize
            </span>
          </Tooltip>
        </ToggleButton>

        <ToggleButton value="qna" aria-label="centered">
          <Tooltip title="Question & Answers">
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "50px",
                color: "#f33535",
              }}
            >
              unknown_document
            </span>
          </Tooltip>
        </ToggleButton>

        <ToggleButton value="subsection" aria-label="right aligned">
          <Tooltip title="subsection">
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "50px",
                color: "#f33535",
              }}
            >
              format_ink_highlighter
            </span>
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default ToggleTypes;
