import React from "react";
import Card from "@mui/material/Card";

import { Tooltip, Typography } from "@mui/material";

export default function RecipeReviewCard({
  text,
  url,
  stash_type,
  question,
  labels,
}) {
  console.log("labels: ", labels[0]);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ margin: "10px", padding: "20px" }}>
      {stash_type === "summary" || stash_type === "subsection" ? (
        <>
          <Tooltip
            title={
              stash_type === "summary"
                ? "This is a saved summary"
                : "This saved highlighted text"
            }
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "25px",
                color: "#f33535",
              }}
            >
              {stash_type === "summary" && "summarize"}
              {stash_type === "subsection" && "format_ink_highlighter"}
            </span>
          </Tooltip>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {url}
          </Typography>
          {labels && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Labels:{" "}
              {labels.map((label) => {
                if (label === labels[labels.length - 1]) {
                  return "and " + label;
                } else {
                  return label + ", ";
                }
              })}
            </Typography>
          )}
          <div id="collapsable-card-content-extended">
            <div
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxHeight: expanded ? "100%" : "25px",
              }}
              id="collapsable-card-content"
            >
              {text}
            </div>
            <span
              onClick={handleExpandClick}
              className="material-symbols-outlined"
              style={{
                fontSize: "50px",
                color: "#f33535",
                marginLeft: "auto",
                transform: !expanded ? "rotate(0deg)" : "rotate(180deg)",
              }}
            >
              expand_more
            </span>
          </div>
        </>
      ) : (
        <>
          <Tooltip title={"This is a saved Question & Answer"}>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "25px",
                color: "#f33535",
              }}
            >
              unknown_document
            </span>
          </Tooltip>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {url}
          </Typography>
          {labels && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Labels:{" "}
              {labels.map((label) => {
                console.log(labels);
                if (label === labels[labels.length - 1]) {
                  return "and " + label;
                } else {
                  return label + ", ";
                }
              })}
            </Typography>
          )}
          <div id="collapsable-card-content-extended">
            <div>
              <div id="collapsable-card-content">{question}</div>
              <div
                hidden={!expanded}
                style={{
                  marginTop: "10px",
                }}
                id="collapsable-card-content"
              >
                {text}
              </div>
            </div>
            <span
              onClick={handleExpandClick}
              className="material-symbols-outlined"
              style={{
                fontSize: "50px",
                color: "#f33535",
                marginLeft: "auto",
                transform: !expanded ? "rotate(0deg)" : "rotate(180deg)",
              }}
            >
              expand_more
            </span>
          </div>
        </>
      )}
    </Card>
  );
}
