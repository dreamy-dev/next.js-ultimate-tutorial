import React from "react";
import * as _Builtin from "./_Builtin";

export function PortfolioOverview({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section accent"
      grid={{
        type: "section",
      }}
      tag="section"
      id="portfolio"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Block className="section-title-group" tag="div">
          <_Builtin.Heading className="hero-heading" tag="h1">
            {"Portfolio"}
          </_Builtin.Heading>
          <_Builtin.Paragraph
            className="paragraph-unten"
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
