import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'components/Common/Button';
import LANG, { htmlLang } from 'lib/htmlLanguage';
import Message from 'components/Common/Message';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.SMALL}) {
    align-items: flex-start;
  }
`;

const Center = styled.div`
  border: 1px solid ${props => props.theme.COLOR.NOT_FOCUSED.BORDER()};
  border-radius: ${props => props.theme.RADIUS};
  overflow: hidden;
  background: white;
  width: 80%;
  max-width: 600px;
  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.SMALL}) {
    width: 100%;
  }
`;

const Padding = styled.div`
  padding: ${props => props.theme.GAP.ONE};
  display: grid;
  grid-gap: 3rem;
`;

const Form = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${props => props.theme.GAP.MEDIUM};
`;

const Label = styled.label`
  text-indent: ${props => props.theme.GAP.MEDIUM};
`;

const Input = styled.input`
  padding: ${props => props.theme.GAP.ONE};
  border-radius: ${props => props.theme.RADIUS};
  border: 1px solid ${props => props.theme.COLOR.NOT_FOCUSED.BORDER()};
`;

const BtnContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.theme.GAP.MEDIUM};
  justify-content: center;
  align-items: center;
`;

const SocialLogInContainer = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.GAP.SMALL};
`;

const SocialBtnStyles = css`
  p {
    color: white;
  }
  padding: ${props => props.theme.GAP.LARGE};
`;

const NaverStyles = css`
  ${SocialBtnStyles}
  background-color: #1ec800;
`;
const FacebookStyles = css`
  ${SocialBtnStyles}
  background-color: #3b5998;
`;
const GoogleStyles = css`
  ${SocialBtnStyles}
  background-color: #db4437;
`;

const SignTemplate = ({
  getErrorMessage,
  handleConfirm,
  handleChange,
  handleHistory,
  userData: { email, nick, password },
  register,
}) => (
  <Container>
    <Center>
      <Message>{getErrorMessage()}</Message>
      <Padding>
        <Form>
          {register ? (
            <>
              <Label htmlFor="nick">{LANG.NICK[htmlLang]}</Label>
              <Input
                autoFocus={register}
                id="nick"
                type="text"
                onChange={handleChange({ type: 'nick' })}
              />
            </>
          ) : null}
          <Label htmlFor="email">{LANG.EMAIL[htmlLang]}</Label>
          <Input
            autoFocus={!register}
            id="email"
            type="email"
            onChange={handleChange({ type: 'email' })}
          />
          <Label htmlFor="password">{LANG.PASSWORD[htmlLang]}</Label>
          <Input
            id="password"
            type="password"
            onChange={handleChange({ type: 'password' })}
            onKeyUp={e => {
              if (e.keyCode === 13) {
                handleConfirm();
              }
            }}
          />
          <BtnContainer>
            <Button
              disabled={email === '' && nick === '' && password === ''}
              onClick={handleConfirm}
            >
              {register ? LANG.CONFIRM[htmlLang] : LANG.SIGN_IN[htmlLang]}
            </Button>
            <Button onClick={handleHistory}>
              {register ? LANG.CANCEL[htmlLang] : LANG.REGISTER[htmlLang]}
            </Button>
          </BtnContainer>
        </Form>
        <SocialLogInContainer>
          <Button styles={NaverStyles}>naver</Button>
          <Button styles={FacebookStyles}>facebook</Button>
          <Button styles={GoogleStyles}>google</Button>
        </SocialLogInContainer>
      </Padding>
    </Center>
  </Container>
);

SignTemplate.propTypes = {
  handleConfirm: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleHistory: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    nick: PropTypes.string.isRequired,
  }).isRequired,
  getErrorMessage: PropTypes.func.isRequired,
  register: PropTypes.bool.isRequired,
};
export default SignTemplate;
