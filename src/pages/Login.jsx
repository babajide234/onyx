
import GOOGLE from '../assets/google.svg'
import APPLE from '../assets/apple.svg'
import Button from '../components/common/Buttons'
import LoginForm from '../components/forms/LoginForm'
import AuthContainer from '../components/common/AuthContainer'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <AuthContainer head={"Sign in"} subhead={'Good to have you back! please enter your details.'}>
            <div className="">
                <LoginForm/>
            </div>
            <div className=" text-center mb-5">
                <h2 className="">or</h2>
            </div>
            <div className="mb-5 flex flex-col gap-5">
                <Button typpe="btn" varient="empty" size="full" > <img src={GOOGLE} alt="" className=" mr-3" /> Sign in with Google </Button>
                <Button typpe="btn" varient="empty" size="full" > <img src={APPLE} alt="" className=" mr-3" /> Sign in with Apple </Button>
            </div>
            <div className=" w-full flex justify-center  ">
                <p className="">Don’t have an account? 
                    <Link to="/register" className='text-primary font-bold '>Create</Link>
                </p>
            </div>
    </AuthContainer>
  )
}

export default Login