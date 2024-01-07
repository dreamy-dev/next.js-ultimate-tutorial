import React from "react";
import * as _Builtin from "./_Builtin";

export function HeaderNew({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className="navigation-bar dark"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      config={{
        collapse: "medium",
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
      }}
    >
      <_Builtin.Block className="grid-header" tag="div">
        <_Builtin.NavbarBrand
          className="brand-link left-spacing"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className="image"
            width="198"
            height="auto"
            loading="auto"
            alt="farbTRaum Logo"
            src="https://uploads-ssl.webflow.com/5b43b13e3096f498cad89320/5c2d4ad3d038d9fad9e52222_Logo_monochrom.png"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarButton className="hamburger-button white" tag="div">
          <_Builtin.Icon
            className="icon"
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
        <_Builtin.NavbarMenu
          className="navigation-menu"
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className="navigation-link white"
            options={{
              href: "#",
            }}
          >
            {"HOME"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="navigation-link white"
            options={{
              href: "#",
            }}
          >
            {"PORTFOLIO"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="navigation-link white"
            options={{
              href: "#",
            }}
          >
            {"ANGEBOT"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="navigation-link white"
            options={{
              href: "#",
            }}
          >
            {"PORTRAIT"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="navigation-link white"
            options={{
              href: "#",
            }}
          >
            {"KONTAKT"}
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
      </_Builtin.Block>
    </_Component>
  );
}
