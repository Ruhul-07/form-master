import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSumbit = data => {
  //   console.log('signup form', data)
  // }
  // const handleUpdateProfile = data => {
  //   console.log('update profile', data)
  // }

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'SignUp Form'} handleSubmit={handleSignUpSumbit}>
        <div>
          <h2>SignUp</h2>
          <p>Please signUp right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitTextBtn={'Update'} handleSubmit={handleUpdateProfile}>
        <div>
            <h2>update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
      </ReusableForm> */}
    </>
  )
}

export default App
