export const checkValidData = (email, password, fullName) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

  if(fullName === '' && email === '' && password === '') return "Please fill all fields";
  if(fullName == '') return "Please enter full name";
  if(email === '' && password === '') return "Please enter email and password";
  if(email === '') return "Please enter email";
  if(password === '') return "Please enter Password";
  if(!isEmailValid && !isPasswordValid) return "Email and Password not valid";
  if(!isEmailValid) return "Email ID is not valid";
  if(!isPasswordValid) return "Password is not valid";

  return null;
}