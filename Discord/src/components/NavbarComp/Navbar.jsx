import { StyledNavbar,Navlist,Navitem,Logo,LogoContainer,ButtonContainer} from "./Navbar.styled"
import {Button} from "../ButtonComp/Button.styled.jsx"
const Navbar = () => {
  return (
    <StyledNavbar>   
      <LogoContainer>
        <Logo src="discord_logo.png" alt="logo" />
      </LogoContainer>
        <Navlist>
          <Navitem>Download</Navitem>
          <Navitem>Nitro</Navitem>
          <Navitem>Discover</Navitem>
          <Navitem>Safety</Navitem>
          <Navitem>Support</Navitem>
          <Navitem>Blog</Navitem>
          <Navitem>Careers</Navitem>
        </Navlist>
        <ButtonContainer>
          <Button bg="white" text_color="black" fs="13px" fw="bold">Login</Button>
        </ButtonContainer>
    </StyledNavbar>
  )
}

export default Navbar

