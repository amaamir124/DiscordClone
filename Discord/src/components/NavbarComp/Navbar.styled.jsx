import styled from "styled-components";

export const StyledNavbar= styled.div`
    display:flex;
    background-color:#5165F6;
    justify-content:space-between;
    align-items:center;
    padding:0;
    margin:0;
    overflow:hidden;
`
export const Navlist= styled.ul`
    display: flex;
    list-style:none;
    padding:0;
    margin:0;
    margin-right:90px;
    font-family:sans-serif;
    font-size:15px;
    @media (max-width: 990px) {
    display: none; /* Hide the nav links */
  }
`

export const Navitem= styled.li`
margin: 0 20px;
color:white;

&:hover{
    text-decoration:underline;
    cursor:pointer;
}

`
export const Logo= styled.img`
width:130px;
height:70px;


&:hover{
    cursor:pointer;
}

`
export const Button= styled.button`
 width:60px;
 height:40px;
 align-self:center;
 border-radius:20px;
 background-color:white;
 border:none;

 font-weight:bold;  
 
 
 &:hover{
    cursor:pointer;
    color:#5165F6;
}
`

export const LogoContainer= styled.div`
    display:flex;
    margin-left:11%;

`
export const ButtonContainer= styled.div`
display:flex;
margin-right:11%;

`

