import React from 'react'
import { Text, View } from 'react-native'
import { InputIcon, TextButton } from '../../../components/ComponentUtils'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { authLoading, authReceived, authFailed } from '../redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
const LoginForm = ({ navigation }) => {
  const auth = useSelector((state) => state.auth)
  console.log(auth)
  const dispatch = useDispatch()
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Field is required').email("Well that's not an email"),
    password: Yup.string().required('Field is required').min(2, 'Pretty sure this will be hacked'),
  })
  const handleNavigation = () => {
    navigation.navigate('DrawerMenu')
  }
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        dispatch(authLoading(values))
        setTimeout(() => {
          dispatch(authReceived())
        }, 3)
        handleNavigation()
      }}
      validationSchema={validationSchema}
      style={{
        padding: 20,
      }}
    >
      {({ handleChange, handleBlur, values, touched, errors, handleSubmit }) => {
        return (
          <View>
            <InputIcon
              tintColor="#f77951"
              icon={require('../../../../assets/images/email-icon.png')}
              placeholder="Email"
              handleChange={handleChange('email')}
              value={values.email}
              underlineColorAndroid="transparent"
            />
            {errors.email && touched.email && (
              <Text style={{ marginLeft: 10, color: 'red' }}>{errors.email}</Text>
            )}
            <InputIcon
              tintColor="#f77951"
              icon={require('../../../../assets/images/password-icon.png')}
              placeholder="Password"
              handleChange={handleChange('password')}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text style={{ marginLeft: 10, color: 'red' }}>{errors.password}</Text>
            )}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Text
                style={{
                  color: 'black',
                }}
              >
                Forgot password?
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 30,
              }}
            >
              <TextButton disable={false} title={'Log in'} onPress={handleSubmit} />
            </View>
          </View>
        )
      }}
    </Formik>
  )
}

export default LoginForm
