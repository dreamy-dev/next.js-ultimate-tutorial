import React from "react";
import * as _Builtin from "./_Builtin";

export function Navigation1({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className="navigation-bar"
      tag="div"
      data-collapse="small"
      data-animation="default"
      data-duration="400"
      config={{
        animation: "default",
        easing2: "ease",
        easing: "ease",
        _collapse: 2,
        collapse: "small",
        noScroll: false,
        duration: 400,
        docHeight: false,
      }}
    >
      <_Builtin.NavbarContainer tag="div">
        <_Builtin.NavbarBrand
          className="brand-link on-top"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Heading className="brand-text" tag="h1">
            {"Acme Inc"}
          </_Builtin.Heading>
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className="navigation-menu on-bottom"
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className="navigation-link"
            options={{
              href: "#",
            }}
          >
            {"Home"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="navigation-link"
            options={{
              href: "#",
            }}
          >
            {"About"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="navigation-link"
            options={{
              href: "#",
            }}
          >
            {"Contact"}
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton className="hamburger-button" tag="div">
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
