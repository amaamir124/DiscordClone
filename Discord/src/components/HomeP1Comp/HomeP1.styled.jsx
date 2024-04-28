import styled from "styled-components";

export const StyledPage = styled.div`
    background-image: url('discord_bg.png');
    background-repeat:no-repeat;
    background-size:cover;
    margin:0;
    padding:0;
    overflow-x: hidden;
   
   height:80vh;
   width:100vw;
   align-content:center;


`


export const Title= styled.h1`
    font-family: sans-serif;
    color:white;
    font-weight:bold;
    font-weight: 800;
    font-size:56px;
`

export const ContentContainer= styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
`
export const ParaContainer= styled.div`
    display:flex;
    justify-content:center;
    align-self:center;
    max-width:40%;
`
export const TitleContainer= styled.div`
    display:flex;
    justify-content:center;
    align-self:center;
    //max-width:70%;
`

export const Para = styled.p`
    color:white;
    font-size:18px;
    font-family:sans-serif;
    line-height:1.4;
    text-align:center;

`
export const ButtonContainer = styled.div`
    display:flex;
    justify-content:center;
    padding:20px 20px;
    flex-wrap:wrap;
    gap:20px;

    


`