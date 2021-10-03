// import React, { PropsWithChildren, useEffect, useState } from 'react';
// import styled from 'styled-components';

// type Props = {
//   children?: React.ReactNode;
//   type: string;
//   count: number
// };

// const Main: React.FC<Props> = (props) => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(thunk())
//   }, [])
//   const [state, setState] = useState(false);
//   const {type} = props;
//   return (
//     <StyledWrapper isBlack={state}>
//       <div className="container__header">
//           <p className="common__text">Headr</p>
//       </div>
//     </StyledWrapper>
//   )
// }


// const thunk = (args) => {
//   return async (dispatch) => {
//     try {
//       dispatch(startLoading());
//       const response = await getUserApi();
//       dispatch(setData(response.data))
//     } catch (e) { 
//       dispatch(setError())
//     } finally {
//       dispatch(stopLoading())
//     }
//   }
// }

// type StylesProps = {
//   isBlack: boolean;
// }

// const StyledWrapper = styled.div<StylesProps>`
//   background-color: tomato;

//   .container {

//     &__header {

//       &--black {
//         color: ${props => props.isBlack ? 'black' : 'transparent'}
//       }
//     }
//   }

//   .common {
//     &__text {
//       font-size: 12
//     }
//   }
// `

export const Main = () => {}