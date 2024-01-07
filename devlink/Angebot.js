import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Angebot.module.css";

export function Angebot({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "accent")}
      grid={{
        type: "section",
      }}
      tag="div"
      id="angebot"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "hero-heading")}
          tag="h1"
        >
          {"Farb- und Raumberatung für "}
          <br />
          {"Wohn- und Arbeitsräume"}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph-unten")}
          vis={{
            medium: true,
          }}
        >
          {"Flexibel und passend auf Ihre Bedürfnisse zugeschnitten."}
          <br />
        </_Builtin.Paragraph>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph-unten-copy")}
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
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-18")}
        tag="div"
      />
      <_Builtin.Container tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "hero-heading")}
          tag="h2"
        >
          {"Leistungen"}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "section-title-group")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "paragraph-centered")}
            tag="div"
          >
            {
              "Egal ob Sie bei der Möbelauswahl, der Farbwahl, den Materialien oder der Boden- und Wandgestaltung Unterstützung suchen – ich erstelle Ihnen ein persönliches Einrichtungskonzept, das individuell auf Ihre persönlichen Bedürfnisse und Ihr Budget zugeschnitten ist."
            }
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
