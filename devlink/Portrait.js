import React from "react";
import * as _Builtin from "./_Builtin";

export function Portrait({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="grid grey" tag="section" id="portrait">
      <_Builtin.Heading className="heading" tag="h2">
        {"Die Farbdesignerin"}
      </_Builtin.Heading>
      <_Builtin.List className="unordered-list-2" tag="ul" unstyled={false} />
      <_Builtin.Paragraph className="paragraph-left-aligned">
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
