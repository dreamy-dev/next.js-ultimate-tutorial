import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionDouble.module.css";

export function SectionDouble({ as: _Component = _Builtin.Row }) {
  return (
    <_Component
      className={_utils.cx(_styles, "row-2")}
      tag="div"
      columns={{
        main: "6|6",
        medium: "medium-stack",
      }}
    >
      <_Builtin.Column className={_utils.cx(_styles, "column-5")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "image-3")}
          width="671"
          height="auto"
          loading="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/5b43b13e3096f498cad89320/5b6d6c554c381924d21794b0_anna-sullivan-635346-unsplash.jpg"
        />
      </_Builtin.Column>
      <_Builtin.Column tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "heading")} tag="h2">
          {"Was ist Farbtraum?"}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph-left-aligned")}
          vis={{
            medium: true,
          }}
        >
          {
            "Oft sind es kleine Dinge, die Grosses bewirken: harmonische Möbelstile bringen Ruhe, passende Farben die gewünschte Atmosphäre, spannende Accessoires das gewisse Etwas. Gerne unterstütze ich Sie dabei, Ihr Zuhause in eine stilvolle Wohnoase zu verwandeln oder ein attraktives Einrichtungskonzept für Ihre Businessräume zu erstellen."
          }
          <br />
          <br />
        </_Builtin.Paragraph>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph-left-aligned")}
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "link-9")}
            button={false}
            block=""
            options={{
              href: "/uber",
            }}
          >
            {"Mehr über FarbTraum "}
          </_Builtin.Link>
          <br />
        </_Builtin.Paragraph>
      </_Builtin.Column>
    </_Component>
  );
}
