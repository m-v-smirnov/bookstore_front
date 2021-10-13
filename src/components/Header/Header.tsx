import styled from "styled-components";
import { DEFAULT_AVATAR, IMAGES_URL } from "../../constants/constants";
import {  useAppSelector } from "../../hooks";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

const logo = IMAGES_URL + "bookstore.png"



type Props = {

};

export const Header: React.FC<Props> = (props) => {
  //const dispatch: any = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const avatar = IMAGES_URL + (user ? user.avatarRef : DEFAULT_AVATAR);

  return (
    <StyledDiv>
      <div className="header">
        <div className="header_content">
          <a href="/home">
          <img className="header_content__img" src={logo} alt="LOGO" />
            </a>
          {user
            ? <div className="header_content__div">
              <a href="/profile">
                <img className="header_content__avatar" src={avatar} alt="avatar" />
              </a>
              <LogoutButton />
            </div>
            :
            <LoginButton />
          }
        </div>
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  .header {
    border-bottom: 1px solid lightgrey;
  }
  .header_content {
    margin: 0 auto;
    width: 1100px;
    display: flex;
    justify-content: space-between;
    
    &__img {
      width : 220px;
    }
    &__avatar {
      margin : 0 10px;
      border-radius: 100%;
      width: 40px;
      
    }
    &__div {
      align-self: center;
      display: flex;
    }
  }
  .logout_button {
    width: 80px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
    align-self: center;
    text-align: center;
    text-decoration: none;
    color: black;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
    vertical-align: middle;
  }
`;