import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { faTrashAlt, faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Common/Button';
import { HOVER_TYPE } from 'styles/mixins';

const EditContainer = styled.div`
  ${props => props.styles};
  ${props =>
    props.csstype === 'toDo'
      ? css`
          margin-left: 0.2rem;
        `
      : css`
          margin-left: ${props.theme.GAP.MEDIUM};
        `}
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const buttonStyles = css`
  height: 100%;
  padding: 0 ${props => props.theme.GAP.MEDIUM};
`;

const EditMenu = ({
  textChangeMode,
  setTextChangeMode,
  handleDelete,
  isEditMode,
  isMultiMode,
  csstype,
}) => {
  return isEditMode && !isMultiMode ? (
    <EditContainer csstype={csstype}>
      <Button
        icon={textChangeMode ? faTimes : faPen}
        hoverType={HOVER_TYPE.BACKGROUND_COLOR}
        onClick={
          textChangeMode
            ? () => setTextChangeMode(false)
            : () => setTextChangeMode(true)
        }
        styles={buttonStyles}
      />
      <Button
        icon={faTrashAlt}
        hoverType={HOVER_TYPE.BACKGROUND_COLOR}
        onClick={handleDelete}
        styles={buttonStyles}
      />
    </EditContainer>
  ) : null;
};
EditMenu.propTypes = {
  textChangeMode: PropTypes.bool.isRequired,
  setTextChangeMode: PropTypes.func.isRequired,
  handleDelete: PropTypes.func,
  isEditMode: PropTypes.bool.isRequired,
  isMultiMode: PropTypes.bool.isRequired,
  csstype: PropTypes.string,
};
EditMenu.defaultProps = {
  handleDelete: undefined,
  csstype: undefined,
};
export default EditMenu;
