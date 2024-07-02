import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  TextEditorSubContainer,
  HeadingAndImgContainer,
  Heading,
  TextEditorImage,
  TextEditorArea,
  EditorButtonList,
  CustomEditorItem,
  TextInputArea,
  BoldButton,
  ItalicButton,
  UnderlineButton,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBoldText: false, isItalicText: false, isUnderlineText: false}

  onClickBoldButton = () => {
    this.setState(prev => ({isBoldText: !prev.isBoldText}))
  }

  onClickItalicButton = () => {
    this.setState(prev => ({isItalicText: !prev.isItalicText}))
  }

  onClickUnderlineButton = () => {
    this.setState(prev => ({isUnderlineText: !prev.isUnderlineText}))
  }

  render() {
    const {isBoldText, isItalicText, isUnderlineText} = this.state

    const boldButtonColor = isBoldText ? '#faff00' : '#f1f5f9'
    const italicButtonColor = isItalicText ? '#faff00' : '#f1f5f9'
    const underlineButtonColor = isUnderlineText ? '#faff00' : '#f1f5f9'

    const textBold = isBoldText ? 'bold' : 'normal'
    const textStyle = isItalicText ? 'italic' : 'normal'
    const textUnderline = isUnderlineText ? 'underline' : 'normal'

    return (
      <TextEditorSubContainer>
        <HeadingAndImgContainer>
          <Heading>Text Editor</Heading>
          <TextEditorImage
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </HeadingAndImgContainer>
        <TextEditorArea>
          <EditorButtonList>
            <CustomEditorItem>
              <BoldButton
                data-testid="bold"
                type="button"
                onClick={this.onClickBoldButton}
                boldButtonColor={boldButtonColor}
              >
                <VscBold size={25} />
              </BoldButton>
            </CustomEditorItem>

            <CustomEditorItem>
              <ItalicButton
                data-testid="italic"
                type="button"
                onClick={this.onClickItalicButton}
                italicButtonColor={italicButtonColor}
              >
                <GoItalic size={25} />
              </ItalicButton>
            </CustomEditorItem>

            <CustomEditorItem>
              <UnderlineButton
                data-testid="underline"
                type="button"
                onClick={this.onClickUnderlineButton}
                underlineButtonColor={underlineButtonColor}
              >
                <AiOutlineUnderline size={25} />
              </UnderlineButton>
            </CustomEditorItem>
          </EditorButtonList>

          <TextInputArea
            textBold={textBold}
            textStyle={textStyle}
            textUnderline={textUnderline}
            rows="25"
            cols="50"
          />
        </TextEditorArea>
      </TextEditorSubContainer>
    )
  }
}
export default TextEditor
