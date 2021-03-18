import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.scss";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className="BuildControls">
    {controls.map((control) => (
      <BuildControl
        disabled={props.disabled[control.type]}
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
      />
    ))}
  </div>
);

export default BuildControls;
