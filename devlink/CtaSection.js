import React from "react";
import * as _Builtin from "./_Builtin";

export function CtaSection({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="cta-section centered-accented"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className="container-9" tag="div">
        <_Builtin.Heading className="cta-heading inline-block" tag="h2">
          {"Jetzt eigenes Projekt umsetzen"}
        </_Builtin.Heading>
        <_Builtin.Link
          className="cta-dark"
          button={false}
          block=""
          options={{
            href: "/all-layouts",
          }}
        >
          {"Kontaktieren"}
        </_Builtin.Link>
      </_Builtin.Container>
    </_Component>
  );
}
