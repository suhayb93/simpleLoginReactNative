import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {propsType} from './loginFormTypes';
import {style} from './LoginFromStyle';
import {bgSecondery} from '../../Style/GenralStyle'

const LoginForm = ({onSubmit}: propsType) => {
    const [username, setUsername] = React.useState('');
    const [password, setPasswordChanged] = React.useState('');
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const onUsernameChanged = (username: any) => {
      setUsername(username.target.value);
    }

    const onPasswordChanged = (password: any) => {
      setPasswordChanged(password.target.value);
    }

    const login = async () => {
      if (onSubmit) {
        setButtonDisabled(true)
        await onSubmit(username, password);
        setButtonDisabled(false)
      }

    }

    return (
        <View>
          <View>
            <TextInput
               placeholder={'Username'}
               value={username}
               onChange={onUsernameChanged}
               style={style.textInput}
             />
          </View>
          <View>
            <TextInput
               placeholder={'Password'}
               value={password}
               onChange={onPasswordChanged}
               style={style.textInput}
               secureTextEntry={true}
             />
          </View>
          <Button
           title={'Log in'}
           onPress={login}
           color={bgSecondery}
           disabled={buttonDisabled}
           />
        </View>
    )
}

export default LoginForm;
