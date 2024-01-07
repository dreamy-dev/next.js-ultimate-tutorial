import React from "react";
import * as _Builtin from "./_Builtin";

export function Office({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section-6"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Heading className="section-heading-h3 centered" tag="h3">
        {"Geschäftsräume"}
      </_Builtin.Heading>
      <_Builtin.Block className="paragraph-centered" tag="div">
        {"Büros, Arztpraxen, Verkaufslokale, Empfang,"}
        <br />
        {"Ausstellungsräume und vieles mehr "}
        <br />
        {"Farbgestaltung von Produkten und Gegenständen"}
        <br />
        {
          "Kollektionen im richtigen Farbklang wie auch in Optik und Material erstellen"
        }
      </_Builtin.Block>
    </_Component>
  );
}
