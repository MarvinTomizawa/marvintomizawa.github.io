import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "styled-components";
import RouteModel from "../../models/RouteModel";
import UnderHoverEffect from "../Ui/UnderHoverEffects";
import { IColorPalette } from "../Ui/Variables";

import {
  HeaderTitle,
  HeaderWrapper,
  LinkList,
  LinkListItem,
} from "./HeaderStyles";

interface HeaderProps {
  routes: RouteModel[];
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const theme: IColorPalette = React.useContext<IColorPalette>(ThemeContext);

  const pathname =  useLocation().pathname;

  const mapLinks = (actualPath: string) => {
    return props.routes
      .filter((route) => route.show)
      .map((route, index) => (
        <LinkListItem key={index}>
          <UnderHoverEffect
            primaryColor={theme.primaryAccent}
            secondaryColor={theme.secondary}
            keepActive={route.path === actualPath}
          >
            <Link to={route.path}>{route.description}</Link>
          </UnderHoverEffect>
        </LinkListItem>
      ));
  };

  return (
    <HeaderWrapper>
      <HeaderTitle>Marvin Tomizawa</HeaderTitle>
      <nav>
        <LinkList>{mapLinks(pathname)}</LinkList>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
