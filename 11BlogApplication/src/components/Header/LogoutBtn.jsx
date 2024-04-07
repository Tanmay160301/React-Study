import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {LogoutReducer} from '../../store/AuthSlice/authSlice'


function LogoutBtn() {
  //logout cha button dabla ki store madhla state update vhyla pahije
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout()
    .then(() => {
      dispatch(LogoutReducer())
    })
  }

  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' 
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn;