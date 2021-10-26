import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEFAULT_AVATAR, IMAGES_URL, LOGO } from "../../constants/constants";
import { useAppSelector } from "../../hooks";
import { CartButton } from "../UI/CartButton";
import { LoginButton } from "../UI/LoginButton";
import { LogoutButton } from "../UI/LogoutButton";

const logo = IMAGES_URL + LOGO;
type Props = {

};

export const Header: React.FC<Props> = (props) => {
  const { user } = useAppSelector((state) => state.user);
  const avatar = IMAGES_URL + (user ? user.avatarRef : DEFAULT_AVATAR);

  return (
    <StyledDiv>
      <div className="header">
        <div className="header_content">
          <Link to="/home">
            <img
              title="home"
              className="header_content__img"
              src={logo} alt="LOGO"
            />
          </Link>
          <div className="header_content__group">
            <CartButton width="45px"/>
            {user
              ? <div className="header_content__login">
                <Link to="/profile">
                  <img
                    title="profile"
                    className="header_content__avatar"
                    src={avatar} alt="avatar"
                  />
                </Link>
                <LogoutButton />
              </div>
              :
              <LoginButton />
            }
          </div>
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
      height: 50px;
      width: 50px;
      object-fit: cover; 
    }
    &__login {
      align-self: center;
      display: flex;
    }
    &__group {
      display: flex;
      align-items: center;
    }
  }
    .logout_button {
    width: 50px;
    height: 50px;
    align-self: center;
    text-align: center;
    color: #0059ff;;
    font-size: 14px;
    cursor: pointer;
    border: 0;
    background-color: white;
    &:hover{
      color: #00379e;
    }
  }
`;