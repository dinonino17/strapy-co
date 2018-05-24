import React,{Component} from 'react'
import { HeadBar, Image, LogInButtons,Title, logContainer } from "./Head.styled";
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'


class Head extends Component{
    render(){
        // Todo poner condicionales para mostrar información del usuario en caso de cookies
        return(


            <HeadBar>
                        <Title><span>Strappy Co.</span></Title>
                        <logContainer>
                          <LogInButtons id="loginButton"><span>Login</span></LogInButtons>
                          <LogInButtons id="loginButton"><span>Crea una cuenta</span></LogInButtons>
                        </logContainer>
            </HeadBar>
            

        )
    }
    
}
export default Head;