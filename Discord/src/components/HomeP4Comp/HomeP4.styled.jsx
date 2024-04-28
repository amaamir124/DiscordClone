import styled from "styled-components";

export const StyledPage = styled.div`
    /* background-image: url('discord_bg.png'); */
    background-repeat:no-repeat;
    background-size:cover;
    margin:0;
    padding:0;
    overflow-x: hidden;
    height:85vh;
    width:100vw;
    align-content:center;
    display:flex;
    justify-content:center;
   


`
export const ContentContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:80px;

    @media (max-width: 990px) {
    flex-direction:column;
    }
    `

export const ImageContainer = styled.div`
    margin-right:20px;

`

export const TextContainer = styled.div`
    margin-right:20px;

`
export const Heading = styled.h1`
    font-family: Poppins;
    color:Black;
    line-height:1.1;
    font-weight:bold;
    font-weight: 700;
    font-size:40px;
    padding: 20px;

`

export const Para= styled.p`
    color:gray;
    font-size:18px;
    font-family:Poppins;
    line-height:1.4;
    text-align:center;
    padding:20px 20px;
    text-align:left;

`