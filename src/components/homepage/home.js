import React from "react";
import { Container, Header, Message } from "semantic-ui-react";

const Home = () => (

    <div className="App-header">
        <Message
            size='mini'
            header='Work in Progress'
            content='This website is still in the development stages.'
        />

        <Container text>
            <Header as="h1">Waldo Finder</Header>
        </Container>
    </div>
);

export default Home;
