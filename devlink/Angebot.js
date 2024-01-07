import React from "react";
import * as _Builtin from "./_Builtin";

export function Angebot({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section accent"
      grid={{
        type: "section",
      }}
      tag="div"
      id="angebot"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Heading className="hero-heading" tag="h1">
          {"Farb- und Raumberatung für "}
          <br />
          {"Wohn- und Arbeitsräume"}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className="paragraph-unten"
          vis={{
            medium: true,
          }}
        >
          {"Flexibel und passend auf Ihre Bedürfnisse zugeschnitten."}
          <br />
        </_Builtin.Paragraph>
        <_Builtin.Paragraph
          className="paragraph-unten-copy"
          vis={{
            medium: true,
          }}
        >
          {"Einrichtungsgestaltung"}
          <br />
          {"Farbkonzepte"}
          <br />
          {"Einkaufsbegleitung"}
          <br />
          {"Baubegleitung"}
          <br />
          {"Dekorationsgestaltung"}
          <br />
        </_Builtin.Paragraph>
      </_Builtin.Container>
      <_Builtin.Block className="div-block-18" tag="div" />
      <_Builtin.Container tag="div">
        <_Builtin.Heading className="hero-heading" tag="h2">
          {"Leistungen"}
        </_Builtin.Heading>
        <_Builtin.Block className="section-title-group" tag="div">
          <_Builtin.Block className="paragraph-centered" tag="div">
            {
              "Egal ob Sie bei der Möbelauswahl, der Farbwahl, den Materialien oder der Boden- und Wandgestaltung Unterstützung suchen – ich erstelle Ihnen ein persönliches Einrichtungskonzept, das individuell auf Ihre persönlichen Bedürfnisse und Ihr Budget zugeschnitten ist."
            }
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
