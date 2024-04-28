import {StyledPage,ImageContainer,TextContainer,ContentContainer,Heading,Para} from "./HomeP2.styled.jsx"
const HomeP2 = () => {
  return (
    <StyledPage>
        <ContentContainer>

        <ImageContainer><img src="homep2img.svg"></img></ImageContainer>
        <TextContainer>
            <Heading>Create an invite-<br/> only place where<br/> you belong</Heading>
            <Para>Discord servers are organised into topic-<br/>
                based channels where you can collaborate, <br/>
                share and just talk about your day without<br/>
                 clogging up a group chat.</Para>
        </TextContainer>
        </ContentContainer>
    </StyledPage>
  )
}

export default HomeP2
