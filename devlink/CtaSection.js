import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CtaSection.module.css";

export function CtaSection({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "cta-section", "centered-accented")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-9")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "cta-heading", "inline-block")}
          tag="h2"
        >
          {"Jetzt eigenes Projekt umsetzen"}
        </_Builtin.Heading>
        <_Builtin.Link
          className={_utils.cx(_styles, "cta-dark")}
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
