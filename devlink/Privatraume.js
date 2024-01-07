import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Privatraume.module.css";

export function Privatraume({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-5")}
      grid={{
        type: "section",
      }}
      tag="aside"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "section-heading-h3", "centered")}
        tag="h3"
      >
        {"Privaträume"}
      </_Builtin.Heading>
      <_Builtin.Block
        className={_utils.cx(_styles, "paragraph-centered")}
        tag="div"
      >
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
