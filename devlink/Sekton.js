import React from "react";
import * as _Builtin from "./_Builtin";

export function Sekton({ as: _Component = _Builtin.Row }) {
  return (
    <_Component
      className="row-2"
      tag="div"
      columns={{
        main: "6|6",
        medium: "medium-stack",
      }}
    >
      <_Builtin.Column className="column-5" tag="div">
        <_Builtin.Image
          className="image-3"
          width="671"
          height="auto"
          loading="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/5b43b13e3096f498cad89320/5b6d6c554c381924d21794b0_anna-sullivan-635346-unsplash.jpg"
        />
      </_Builtin.Column>
      <_Builtin.Column tag="div">
        <_Builtin.Heading className="section-heading" tag="h2">
          {"Ihr Zuhause soll ihr Lieblingsort sein: "}
          <br />
          {"stilvoll, harmonisch und funktional"}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className="paragraph-left-aligned"
          vis={{
            medium: true,
          }}
        >
          {
            "Gerne erstelle ich für Ihre Inneneinrichtung ein Wohnkonzept mit Ideen und konkreten Vorschlägen zur Möbelauswahl, Farben, Materialien, Boden- und Wandgestaltung. Individuell auf Ihre persönlichen Bedürfnisse und auf Ihr Budget zugeschnitten. "
          }
          <br />
        </_Builtin.Paragraph>
        <_Builtin.Paragraph
          className="paragraph-left-aligned"
          vis={{
            medium: true,
          }}
        >
          <_Builtin.Strong>
            {"Dienstleistungen:"}
            <br />
          </_Builtin.Strong>
          {"- Neubau / Renovation"}
          <br />
          {"- Umzug (was kommt mit was wird ergänzt)"}
          <br />
          {"- Küchen- /Badumbau"}
          <br />
          {"- Ferienwohnungen"}
          <br />
          {"- Fassaden"}
          <br />
        </_Builtin.Paragraph>
      </_Builtin.Column>
    </_Component>
  );
}
