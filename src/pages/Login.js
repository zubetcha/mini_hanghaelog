import React from 'react'
import { Grid, Text } from '../elements/index'

import { actionCreators as userActions } from '../redux/modules/user'
import { useDispatch } from 'react-redux'

import { useState } from 'react'

import styled from 'styled-components'

const Login = (props) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailMessage, setEmailMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')

  const [isEmail, setIsEmail] = useState('false')
  const [isPassword, setIsPassword] = useState('false')

  const onChangeEmail = (e) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식을 확인해주세요.')
      setIsEmail(false)
    } else {
      setEmailMessage('올바른 이메일 형식이에요 : )')
      setIsEmail(true)
    }
  }

  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.')
      setIsPassword(false)
    } else {
      setPasswordMessage('올바른 비밀번호에요 : )')
      setIsPassword(true)
    }
  }

  const login = () => {
    if (email === '' || password === '') {
      window.alert('아이디, 비밀번호를 입력해주세요!')
      return
    }
    dispatch(userActions.logInDB({ email, password }))
  }

  return (
    <React.Fragment>
      <Grid maxWidth="400px" margin="auto">
        <Grid margin="150px 0px 0px 0px" border="2px solid #a496c7">
          <Grid padiing="50px">
            <Text size="36px" weight="700" align="center">
              Login
            </Text>
            <Grid maxWidth="350px" margin="auto">
              <Grid>
                <LInput placeholder="이메일 아이디" type="email" typeName="email" onChange={onChangeEmail}></LInput>
                {email.length > 0 && <Span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</Span>}
              </Grid>
            </Grid>

            <Grid maxWidth="350px" margin="auto">
              <Grid>
                <LInput type="password" placeholder="비밀번호" onChange={onChangePassword} passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)" title="비밀번호" typeTitle="password" />
                {password.length > 0 && <Span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</Span>}
              </Grid>
            </Grid>
            <Grid margin="40px 0px 25px 0px">
              <Btn type="submit" disabled={!(isEmail && isPassword)} onClick={login}>
                로그인
              </Btn>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const LInput = styled.input`
  width: 98%;
  height: 35px;
  margin: 8px 0px;
`

const Span = styled.span`
  font-size: 13px;
  color: #ffa07a;
`

const Btn = styled.button`
  margin: auto;
  display: block;
  align-items: center;
  border: none;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

export default Login
