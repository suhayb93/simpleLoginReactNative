import {View, StyleSheet} from 'react-native';
import LoginForm from '../../Components/LoginFrom/LoginForm'
import {fakeApi} from '../../Utils/fakeApi';
import {style} from './LoginPageStyle';

const LoginPage = ({navigation}: any) => {
  const onFormSubmit = async (username: string, password: string) => {
    const resp:any =  await fakeApi(username, password);
    if (resp.Status === 200) {
      navigation.navigate('mainLayout', {
        username: username
      });
    }
    console.log('faild')
    return resp;
  }

  return (
    <View style={style.container}>
      <LoginForm
        onSubmit={onFormSubmit}
      />
    </View>
  )
}



export default LoginPage;
