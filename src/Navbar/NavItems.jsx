import styled from "styled-components";
import { HiArrowRightOnRectangle, HiOutlineSun } from "react-icons/hi2";
import { HiOutlineMoon } from "react-icons/hi2";
import { useDarkMode } from "../Contexts/DarkModeContext";

const StyledLi = styled.li`
    font-size: 1.7rem;

    &:not(:first-child) {
        margin-left: 1rem;
    }

    &:first-child {
        margin-right: auto;
    }
`;

const StyledLink = styled.button`
    border: none;
    color: var(--color-text);
    background-color: transparent;
    padding: 1rem 2rem;

    &:hover {
        color: var(--color-primary);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`;

function NavItem() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <>
            <StyledLi>
                <StyledLink>Beka-Bank</StyledLink>
            </StyledLi>
            <StyledLi>
                <StyledLink>Home</StyledLink>
            </StyledLi>
            <StyledLi>
                <StyledLink>About Us</StyledLink>
            </StyledLi>
            <StyledLi>
                <StyledLink>Contact</StyledLink>
            </StyledLi>
            <StyledLi>
                <StyledLink onClick={toggleDarkMode}>
                    {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
                </StyledLink>
            </StyledLi>
            <StyledLi>
                <StyledLink>
                    <HiArrowRightOnRectangle />
                </StyledLink>
            </StyledLi>
        </>
    );
}

export default NavItem;
