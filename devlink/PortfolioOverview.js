import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PortfolioOverview.module.css";

export function PortfolioOverview({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "accent")}
      grid={{
        type: "section",
      }}
      tag="section"
      id="portfolio"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "section-title-group")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "hero-heading")}
            tag="h1"
          >
            {"Portfolio"}
          </_Builtin.Heading>
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "paragraph-unten")}
            vis={{
              medium: true,
            }}
          >
            {"Eine kleine Selektion bereits umgesetzter Projekte"}
            <br />
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.Container>
    </_Component>
  );
}
