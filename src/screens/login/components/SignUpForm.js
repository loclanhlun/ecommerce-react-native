import React from 'react'
import { Text, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { InputIcon, TextButton } from '../../../components/ComponentUtils'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { withNextInputAutoFocusForm } from 'react-native-formik'
const Form = withNextInputAutoFocusForm(View)
const SignUpForm = ({ navigation }) => {
  const initialValue = {
    name: '',
    email: '',
    password: '',
    isSelected: false,
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Field is required'),
    email: Yup.string().required('Field is required').email("Well that's not an email"),
    password: Yup.string().required('Field is required').min(2, 'Pretty sure this will be hacked'),
  })
  //   const handleNavigation = () => {
  //     navigation.navigate('DrawerMenu')
  //   }
  return (
    <Formik
      onSubmit={(values) => {
        console.log(values)
        handleNavigation()
      }}
      initialValues={initialValue}
      validationSchema={validationSchema}
      style={{
        padding: 20,
      }}
      render={({ handleChange, handleBlur, values, touched, errors, handleSubmit }) => {
        return (
          <Form>
            <InputIcon
              tintColor="#f77951"
              placeholder="Name"
              handleChange={handleChange('name')}
              value={values.name}
              icon={require('../../../../assets/images/user-icon.png')}
            />
            {errors.name && touched.name && (
              <Text style={{ marginLeft: 10, color: 'red' }}>{errors.name}</Text>
            )}
            <InputIcon
              tintColor="#f77951"
              icon={require('../../../../assets/images/email-icon.png')}
              placeholder="Email"
              handleChange={handleChange('email')}
              value={values.email}
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
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <CheckBox value={values.isSelected} onValueChange={handleChange('isSelected')} />
              <Text>
                I accept all this <Text style={{ color: 'black' }}>Term & Conditions</Text>
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 30,
              }}
            >
              <TextButton disable={!values.isSelected} title={'Sign Up'} onPress={handleSubmit} />
            </View>
          </Form>
        )
      }}
    />
  )
}

export default SignUpForm
