import {StyledPage,ImageContainer,TextContainer,ContentContainer,Heading,Para} from "./HomeP4.styled.jsx"
const HomeP4 = () => {
  return (
    <StyledPage>
        <ContentContainer>

        <ImageContainer><img src="homep4img.svg"></img></ImageContainer>
        <TextContainer>
            <Heading>From few to a<br/> fandom</Heading>
            <Para>  
                Get any community running with moderation<br/>
                tools and custom member access. Give<br/>
                members special powers, set up private<br/>
                channels and more.
            </Para>
        </TextContainer>
        </ContentContainer>
    </StyledPage>
  )
}

export default HomeP4
