import { useState } from "react";
import Button from "../../components/Button/Button";
import Page from "../../components/Page/Page";
import TextInput from "../../components/TextInput/TextInput";
import { Title, LoginBox } from "./Login.styledComponents";
import { useAppDispatch } from "../../hooks";
import { login } from "./loginSlice";
import { useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    return (
      <div>
        <Page>
          <Title>KapiWorld</Title>
        <LoginBox>
        <TextInput value={username} onChange={(e) => setUsername(e.target.value)} label='username'/>
          <TextInput type='password' value={password} onChange={(e) => setPassword(e.target.value)} label={'password'} />
          <Button text={'Login'} onClick={() => {
            dispatch(login());
            navigate('/overview');
          }} buttonType={'primary'} />
        </LoginBox>
        </Page>
      </div>
    )
  }

  export default Login