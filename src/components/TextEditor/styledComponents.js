import styled from 'styled-components'

export const TextEditorSubContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 1200px;
  height: 650px;
`
export const HeadingAndImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  
`
export const Heading = styled.h1`
  color: #f8fafc;
  margin-bottom: 100px;
`
export const TextEditorImage = styled.img`
  width: 400px;
`
export const TextEditorArea = styled.div`
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 15px;
  width: 650px;
  height: 600px;
  margin-left: 30px
`
export const EditorButtonList = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0;
  list-style-type: none;
  border-bottom: 1px solid #334155;
  padding-bottom: 15px;
  padding-top: 5px;
  padding-left: 20px;
`
export const CustomEditorItem = styled.li``
export const BoldButton = styled.button`
  color: ${props => props.boldButtonColor};
  background-color: transparent;
  border: none;
  margin: 5px;
  cursor: pointer;
`
export const ItalicButton = styled.button`
  color: ${props => props.italicButtonColor};
  background-color: transparent;
  border: none;
  margin: 5px;
  cursor: pointer;
`
export const UnderlineButton = styled.button`
  color: ${props => props.underlineButtonColor};
  background-color: transparent;
  border: none;
  margin: 5px;
  cursor: pointer;
`
export const TextInputArea = styled.textarea`
  font-weight: ${props => props.textBold};
  font-style: ${props => props.textStyle};
  text-decoration: ${props => props.textUnderline};
  background-color: transparent;
  border: none;
  outline: none;
  color: #f1f5f9;
  width: 650px;
  height: 500px;
  font-size: 15px;
  padding-left: 20px;
  line-height: 1.5;
`
