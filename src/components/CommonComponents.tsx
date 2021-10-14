import styled from "styled-components";
import { Path, UseFormRegister,  } from "react-hook-form";

type IFormValue = {
  email : string,
}

type CommonInputProps = {
  label: string,
  labelClass?: string,
  inputClass?: string,
  register: UseFormRegister<IFormValue>,
  formValue: Path<IFormValue>,
  inputType?: string 
};

export const CommonInput: React.FC<CommonInputProps> = (props) => {
  return (
    <StyledInput>
      <div>
        <label
          className={`common-input__label ${props.labelClass}`}
          htmlFor={`input-${props.label}`}
        >
          {props.label}
        </label>

        <input
          className={`common-input__label ${props.inputClass}`}
          id={`input-${props.label}`}
          type={props.inputType? props.inputType : "text"}
          {...props.register(props.formValue)}
        />
      </div>
    </StyledInput>
  )
};

const StyledInput = styled.div`

`;