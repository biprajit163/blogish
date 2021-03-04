
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import EditorContext from '../../EditorContext.jsx';


const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 13px;
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`;


function EditorResult() {

    const {markdownTxt, setMarkdownTxt} = useContext(EditorContext);

    return (
        <div className="EditorResult">
            <Container>
                <Title>Blog Preview</Title>
                <ResultArea>
                    <ReactMarkdown source={markdownTxt}/>
                </ResultArea>
            </Container>
        </div>
    );
}

export default EditorResult;