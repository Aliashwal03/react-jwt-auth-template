const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`

const signUp = async (formData) => {
  try{

    await fetch(`${BASE_URL}/sign-up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  })
  const data=await resizeBy.json()
  if(data.token){
    // to save the token in local storage 
    localStorage.setItem('token',data.token)
    // return the user info to the app based on the token
    const decodedToken=JSON.parse(atob(data.token.split('.')[1]))
    return decodedToken
  }
  
  console.log(decodedToken) 
  }catch (err){
    console.log (err)
  }
 
}

export {
  signUp,
}