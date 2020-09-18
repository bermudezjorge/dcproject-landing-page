import styled, { css } from "styled-components";

const formControl = css`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  margin-top: 5px;
  padding: 0.375rem 0.75rem;
  font-size: 15px;
  font-family: "Cabin";
  font-variation-settings: "wdth" 100, "wght" 500;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  border-radius: 7px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  &:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: 0 0 1px 2px #0476d09e;
  }
`;

const ContactDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ContactData = styled.p`
  font-size: 16px;
  font-family: "Cabin";
  font-variation-settings: "wdth" 100, "wght" 400;
  color: #000;
  margin: 0;
  ${({ important }) =>
    important &&
    css`
      color: #0476d0;
    `}
`;

const StyledForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  background: #f8f7f9;
  padding: 1rem;
  margin: 3rem auto 5rem auto;
  border-radius: 7px;
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
  text-align: left;
  font-size: 14px;
  color: gray;
  font-family: "Cabin";
  font-variation-settings: "wdth" 100, "wght" 400;
  &:first-of-type {
    margin-top: 0;
  }
`;

const StyledInput = styled.input`
  ${formControl}
`;

const StyledTextarea = styled.textarea`
  ${formControl}
  min-height: 100px;
  resize: none;
`;

export {
  ContactDataContainer,
  ContactData,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextarea,
};
