import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ContactSection.module.css";

export function ContactSection({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="section"
      id="contact-section"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "section-title-group")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "section-heading", "centered")}
            tag="h2"
          >
            {"Kontakt"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "section-subheading", "center")}
            tag="div"
          >
            {"Ob per Telefon oder E-Mail, ich freue mich vonIhnen zu hören."}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "link-7")}
          button={false}
          block=""
          options={{
            href: "mailto:info@farbtraum.ch?subject=Kontaktanfrage%20Farbberatung",
          }}
        >
          {"info@farbtraum.ch"}
        </_Builtin.Link>
        <_Builtin.Heading className={_utils.cx(_styles, "heading-4")} tag="h3">
          <_Builtin.Link
            className={_utils.cx(_styles, "link-8")}
            button={false}
            block=""
            options={{
              href: "tel:+41796012753",
            }}
          >
            {"+41796012753"}
          </_Builtin.Link>
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-block-4", "text")}
          tag="div"
        >
          <_Builtin.Strong>
            {"farbTRaum"}
            <br />
          </_Builtin.Strong>
          {"Fidmenstrasse 8"}
          <br />
          {"6442 Gersau"}
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
