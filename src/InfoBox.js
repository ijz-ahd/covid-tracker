import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./infobox.css";

function InfoBox({ title, cases, active, total, ...props }) {
  return (
    <Card
      className={`infobox ${active && "infobox--selected"}`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography color="textSecondary" className="infobox_title">
          {title}
        </Typography>
        <h2 className="infobox_cases">{cases}</h2>
        <Typography color="textSecondary" className="infobox_total">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
