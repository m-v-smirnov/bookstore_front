import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { getLogsFromAwsS3, S3LogsReqOptions } from "../../api/awsApi";
import { StyledButton, StyledInput } from "../StyledComponents";

type Props = {};

export const S3LogRequestForm: React.FC<Props> = (props) => {
  const { register, handleSubmit,
    // formState: { errors }
  } = useForm<S3LogsReqOptions>();
  const onSubmit: SubmitHandler<S3LogsReqOptions> = async (data) => {
    const options : S3LogsReqOptions = data;
    try {
      await getLogsFromAwsS3(options);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <StyledDiv>
      <form
        className="s3_req__form"
        id='aws-logs-form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>AWS S3 request parameters</h3>
        <label
          htmlFor="userId"
        >
          User ID
        </label>
        <StyledInput
          className="s3_req__input"
          type="text"
          id="userId"
          {...register("userId")}
        />
        <label
          htmlFor="method"
        >
          Method
        </label>
        <StyledInput
          className="s3_req__input"
          type="text"
          id="method"
          {...register("method")}
        />
        <label
          htmlFor="path"
        >
          Path
        </label>
        <StyledInput
          className="s3_req__input"
          type="text"
          id="path"
          {...register("path")}
        />
        <label
          htmlFor="startDate"
        >
          Start date 
        </label>
        <StyledInput
          className="s3_req__input"
          type="date"
          id="startDate"
          {...register("startDate")}
        />
        <label
          htmlFor="endDate"
        >
          End date 
        </label>
        <StyledInput
          className="s3_req__input"
          type="date"
          id="endDate"
          {...register("endDate")}
        />
        <StyledButton
          className='s3_req__submit'
          form='aws-logs-form'
          type="submit"
        >
          Request logs from s3
        </StyledButton>
      </form>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
    width: 600px;
    margin: 40px auto;
    .s3_req {
      &__form {
        display: flex;
        flex-direction: column;
      }
      &__input {
        margin-bottom: 20px;
      }
      &__submit {
        width: 200px;
      }
    }
`;