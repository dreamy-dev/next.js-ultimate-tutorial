import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Intro.module.css";

export function Intro({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-6")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "grid")}
          id={_utils.cx(
            _styles,
            "w-node-cae82e8e-1eb3-aabd-221d-44c249335097-49335095"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-12")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-8")}
              tag="h2"
            >
              {"Was ist FarbTRaum?"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph-left-aligned-2")}
            >
              {
                "Oft sind es kleine Dinge, die Grosses bewirken: harmonische Möbelstile bringen Ruhe, passende Farben die gewünschte Atmosphäre, spannende Accessoires das gewisse Etwas. "
              }
              <br />
              <br />
              {
                "Gerne unterstütze ich Sie dabei, Ihr Zuhause in eine stilvolle Wohnoase zu verwandeln oder ein attraktives Einrichtungskonzept für Ihre Businessräume zu erstellen."
              }
            </_Builtin.Paragraph>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph-left-aligned-2")}
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "link-10")}
                button={false}
                block=""
                options={{
                  href: "/angebot",
                }}
              >
                {"Mehr über FarbTRaum "}
              </_Builtin.Link>
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
