import {StyledPage,ImageContainer,TextContainer,ContentContainer,Heading,Para,Img} from "./HomeP3.styled.jsx"
const HomeP3 = () => {
  return (
    <StyledPage>
        <ContentContainer>

        
        <TextContainer>
            <Heading>Where hanging <br/>out is easy </Heading>
            <Para>Grab a seat in a voice channel when you’re-<br/>
                free. Friends in your server can see you’re <br/>
                around and instantly pop in to talk without<br/>
                having to call.
            </Para>
        </TextContainer>
        <ImageContainer><Img src="homep3img.svg"></Img></ImageContainer>
        </ContentContainer>
    </StyledPage>
  )
}

export default HomeP3
