import { StyledPage,Title,ContentContainer,Para,ParaContainer,TitleContainer } from './HomeP1.styled'
import {Button} from '../ButtonComp/Button.styled.jsx';
import { ButtonContainer } from './HomeP1.styled.jsx';
const HomeP1 = () => {
  return (
    
    <StyledPage>
      <ContentContainer>
        <TitleContainer>
          <Title>IMAGINE A PLACE...</Title>
        </TitleContainer>
        <ParaContainer>
          <Para>...where you can belong to a school club, a gaming group or a worldwide art community. 
            Where just you and a handful of friends can spend time together.
            A place that makes it easy to talk every day and hang out more often.</Para>
        </ParaContainer>

        <ButtonContainer>
          <Button bg="white" text_color="black" fs="18px" fw="normal">Download for Windows</Button>
          <Button bg="black" text_color="white" fs="18px" fw="normal">Download Discord to talk,chat and hang out</Button>
        </ButtonContainer>
      
      </ContentContainer>
    </StyledPage>
  )
}

export default HomeP1
