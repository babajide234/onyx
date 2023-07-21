import  { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import userStore from '../store/usserStore';

const Verify = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const verify = userStore((state)=> state.verifyToken)

    useEffect(() => {

        if(verify(id)){
            navigate('/login')
        }
    },[id, navigate, verify])

  return null
}

export default Verify