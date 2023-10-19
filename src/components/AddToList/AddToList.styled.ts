import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { AddToListButton } from '../MovieBannerContent/MovieBannerContent.styled';

export const AddToListInput = styled(TextField)`
  display: flex;
  flex-grow: 1;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  .MuiInputBase-input {
    padding: 7px;
  }
  .MuiInputBase-formControl {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const CreateListButton = styled(AddToListButton)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  text-transform: capitalize;
`;

export const ModalBoxStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
