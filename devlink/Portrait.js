import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Portrait.module.css";

export function Portrait({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "grid", "grey")}
      tag="section"
      id="portrait"
    >
      <_Builtin.Heading className={_utils.cx(_styles, "heading")} tag="h2">
        {"Die Farbdesignerin"}
      </_Builtin.Heading>
      <_Builtin.List
        className={_utils.cx(_styles, "unordered-list-2")}
        tag="ul"
        unstyled={false}
      />
      <_Builtin.Paragraph
        className={_utils.cx(_styles, "paragraph-left-aligned")}
      >
        {"Heidi Hefti-Sorg"}
        <br />
        {"Farbdesignerin mit eidg. Fachausweis STF"}
        <br />
        {"und langjähriger Erfahrung"}
        <_Builtin.Strong>
          <br />
        </_Builtin.Strong>
        <br />
        <br />
        <_Builtin.Strong>{"Lebenslauf"}</_Builtin.Strong>
        <br />
        {"Ausbildung zur dipl. Bodenberaterin Boden Schweiz"}
        <br />
        {"Ausbildung zur Farbdesignerin mit eidg. Fachausweis STF"}
        <br />
        {"Parkettbodenberaterin für Architekten und Bauherren und Office"}
        <br />
        <br />
        <_Builtin.Strong>{"Weitere Tätigkeiten"}</_Builtin.Strong>
        <_Builtin.Span>
          <br />
        </_Builtin.Span>
        {"Mitglied procolore - Schweizerische Vereinigung für die Farbe"}
        <br />
        {"Prüfungsexpertin für die Berufsprüfung Farbdesigner mit eidg. FA"}
      </_Builtin.Paragraph>
    </_Component>
  );
}
