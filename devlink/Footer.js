import React from "react";
import * as _Builtin from "./_Builtin";

export function Footer({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="footer accent"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Image
          className="image-6"
          width="201"
          height="auto"
          loading="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/5b43b13e3096f498cad89320/5bb124b8c110e406f480283f_Element%201.png"
        />
        <_Builtin.Block className="float-right" tag="div">
          <_Builtin.Link
            className="social-icon-link"
            button={false}
            block="inline"
            options={{
              href: "http://www.facebook.com/userid",
            }}
          >
            <_Builtin.Image
              image={{
                url: "https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg",
                fileName: "placeholder.svg",
                width: 150,
                height: 150,
              }}
              width="20"
              height="auto"
              loading="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/5b43b13e3096f498cad89320/5b43b13e3096f40379d89360_social-40.svg"
            />
          </_Builtin.Link>
          <_Builtin.Link
            className="social-icon-link"
            button={false}
            block="inline"
            options={{
              href: "http://www.twitter.com/userid",
            }}
          />
          <_Builtin.Link
            className="social-icon-link"
            button={false}
            block="inline"
            options={{
              href: "mailto:info@farbtraum.ch?subject=Anfrage%20f%C3%BCr%20Farbtraum",
            }}
          >
            <_Builtin.Image
              image={{
                url: "https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg",
                fileName: "placeholder.svg",
                width: 150,
                height: 150,
              }}
              width="20"
              height="auto"
              loading="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/5b43b13e3096f498cad89320/5b43b13e3096f4e4c1d89388_social-30.svg"
            />
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block className="div-block-5" tag="div" />
        <_Builtin.Block className="div-block-6" tag="div">
          <_Builtin.HtmlEmbed value="%3Cp%3E%20%C2%A9%0A%3Cscript%20type%3D%22text%2FJavaScript%22%3E%0Adocument.write(new%20Date().getFullYear())%3B%0A%3C%2Fscript%3E%0AFarbtraum.ch%20%3C%2Fp%3E" />
          <_Builtin.Block className="div-block-7" tag="div">
            <_Builtin.Link
              className="link-5"
              button={false}
              block=""
              options={{
                href: "/all-layouts",
              }}
            >
              {"Kontakt"}
            </_Builtin.Link>
            <_Builtin.Link
              className="link-5"
              button={false}
              block=""
              options={{
                href: "/impressum",
              }}
            >
              {"Impressum"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
