import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { hover, HOVER_TYPE } from 'styles/mixins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import LANG, { htmlLang } from 'lib/htmlLanguage';

const LockButtonContainer = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.GAP.MEDIUM};
`;

const ButtonStyles = css`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: ${props => props.theme.GAP.LARGE};
  padding: ${props => props.theme.GAP.MEDIUM};
  background-color: white;
  ${hover({ type: HOVER_TYPE.BACKGROUND_COLOR })};
  ${props =>
    props.active
      ? css`
          background-color: ${props.theme.COLOR.PRIMARY()};
          p,
          svg,
          span {
            color: white;
          }
        `
      : null}
`;

const LockOpenButton = styled.div`
  ${ButtonStyles}
`;

const LockButton = styled.div`
  ${ButtonStyles}
`;

const LockIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

const LockButtonTextContainer = styled.div``;

const LockButtonTitle = styled.p`
  font-size: 1.2rem;
`;

const LockButtonExplaion = styled.p`
  word-break: break-all;
  font-size: 0.8rem;
  margin-top: ${props => props.theme.GAP.SMALL};
`;

const LockButtonComponent = ({ isPublic, setIsPublic }) => (
  <LockButtonContainer>
    <LockOpenButton active={isPublic} onClick={() => setIsPublic(true)}>
      <LockIcon icon={faLockOpen} />
      <LockButtonTextContainer>
        <LockButtonTitle>{LANG.LOCK_OPEN[htmlLang]}</LockButtonTitle>
        <LockButtonExplaion>
          {LANG.LOCK_OPEN.EXPLAIN[htmlLang]}
        </LockButtonExplaion>
      </LockButtonTextContainer>
    </LockOpenButton>
    <LockButton active={!isPublic} onClick={() => setIsPublic(false)}>
      <LockIcon icon={faLock} />
      <LockButtonTextContainer>
        <LockButtonTitle>{LANG.LOCK[htmlLang]}</LockButtonTitle>
        <LockButtonExplaion>{LANG.LOCK.EXPLAIN[htmlLang]}</LockButtonExplaion>
      </LockButtonTextContainer>
    </LockButton>
  </LockButtonContainer>
);

LockButtonComponent.propTypes = {
  isPublic: PropTypes.bool.isRequired,
  setIsPublic: PropTypes.func.isRequired,
};

export default LockButtonComponent;
