import { useState, useCallback } from "react";
import SignUpForm from "../../../components/SignUpForm";
import useWindowDimension from "../../../hooks/useWindowDimension";
import { signUp } from '../../api'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../../store/ContextProvider";

export default function SignUp() {
  const [signUpStep, setSignUpStep] = useState(1);
  const [username, setUser] = useState('')
  const windowWidth = useWindowDimension()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleInitialStep = useCallback((e) => {
    e.preventDefault();
    setUser(e.target[0].value)
    setSignUpStep(2)
  }, []);
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const password = e.target[0].value
    const result = await signUp(username, password)
    dispatch(setAccessToken(result.token))
    navigate('/dashboard', { state: { accessToken: result.token } })
  }, [username])
  return (
    <div className="sm:pt-[101px] pt-[41px] sm:px-[95px] px-[35px] sm:pb-[99px] pb-[66px]">
      <div className=" rounded-[50px] flex w-[200%] gap-3">
        <SignUpForm
          key={'signup_step_1'}
          step={1}
          leftTitle="Enter your email address to continue"
          leftAbout="Log in to your account. If you don’t have one, you will be prompted to create one."
          inputPlaceholder="Email"
          buttonText="Continue"
          handleSubmit={handleInitialStep}
          inputType={'text'}
          inputName={'email'}
          className={signUpStep === 1 ? 'step-1' : 'remove-step-1'}
          formText={windowWidth < 640 ? 'Have an account?' : undefined}
          windowWidth={windowWidth}
        />
        <SignUpForm
          key={'signup_step_2'}
          className={signUpStep === 2 ? 'step-2' : 'invisible'}
          step={2}
          leftTitle="Create an account to continue"
          leftAbout="You’ll be able to log in to Dingoo with this email address and password."
          inputLabel={'Enter a password to create your account with '}
          formText={'Use a minimum of 6 characters (case sensitive) with at least one number or special character.'}
          inputPlaceholder="Choose a password"
          buttonText={windowWidth < 640 ? 'Continue' : 'Agree & Continue'}
          handleSubmit={handleSubmit}
          inputType={'password'}
          inputName={'password'}
          footer={'Dingoo will use your data to personalise and improve your Dingoo experience and to send you information about Dingoo. You can change your communication preferences anytime. We may use your data as described in our Privacy Policy, including sharing it with The Test of Companies. By clicking "Agree & Continue", you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.'}
          windowWidth={windowWidth}
        />
      </div>
    </div>
  );
}
