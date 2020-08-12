import styled from 'styled-components'

export const Button = styled.button`
display: block;
padding: 10px 20px;
background-color: red;
color: white;
font-weight: bold;
border-radius: 10px;
margin: 5px;
cursor: pointer;
border: .5px solid transparent;
transition: .3s ease-in;
outline: none;
&:hover{
    background: white;
    color: red;
    border: .5px solid red;
}
`