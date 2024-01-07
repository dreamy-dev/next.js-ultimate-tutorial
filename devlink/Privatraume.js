import React from "react";
import * as _Builtin from "./_Builtin";

export function Privatraume({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section-5"
      grid={{
        type: "section",
      }}
      tag="aside"
    >
      <_Builtin.Heading className="section-heading-h3 centered" tag="h3">
        {"Privaträume"}
      </_Builtin.Heading>
      <_Builtin.Block className="paragraph-centered" tag="div">
        {"Neubau / Renovation"}
        <br />
        {"Umzug (was kommt mit, was wird ergänzt)"}
        <br />
        {"Küchen- / Badumbau"}
        <br />
        {"Ferienwohnungen"}
        <br />
        {"Fassaden"}
      </_Builtin.Block>
    </_Component>
  );
}
