import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDarkMode } from "../../../Contexts/DarkModeContext";
import { Link } from "react-router-dom";
const StyledLi = styled.li`
  font-size: 1.7rem;

  &:not(:first-child),
  &:not(:nth-child(2)) {
    margin-left: 0.5rem;
  }

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    margin-left: 1.8rem;
  }

  &:nth-child(2) {
    margin-right: auto;
  }

  &:nth-child(7) {
    margin-left: 8rem;
  }
`;

const StyledLink = styled.a`
  border: none;
  color: var(--color-text);
  background-color: transparent;
  padding: 1rem 1.5rem;

  &:hover {
    color: var(--color-primary);
    transform: translateY(-2px);
    cursor: pointer;
  }

  &:active {
    transform: translateY(0);
  }
`;

const StyledLinkTo = styled(Link)`
  border: none;
  color: var(--color-text);
  background-color: transparent;
  padding: 1rem 1.5rem;

  &:hover {
    color: var(--color-primary);
    transform: translateY(-2px);
    cursor: pointer;
  }

  &:active {
    transform: translateY(0);
  }
`;
const StyledImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
`;

function NavItem() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <StyledLi>
        <StyledImg
          src={
            isDarkMode ? "../../img/logo-dark.png" : "../../img/logo-light.png"
          }
        />
      </StyledLi>
      <StyledLi>
        <StyledLink href="#home">Beka-Bank</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink href="#home">Home</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink href="#aboutUs">About Us</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink href="#ourServices">Our Services</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink href="#contact">Contact</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink onClick={toggleDarkMode}>
          {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLinkTo to="/login">
          <LoginIcon />
        </StyledLinkTo>
      </StyledLi>
    </>
  );
}

export default NavItem;