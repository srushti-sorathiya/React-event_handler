export default function ValidLogin(input) {
  let error = {};

  const nameP = /^[a-zA-Z ]{2,30}$/;
  const emailP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  if (!nameP.test(input.uname)) {
    error.uname = "Enter Valid Name";
  }
  if (!emailP.test(input.email)) {
    error.email = "Enter a valid email address";
  }
  if (!passwordPattern.test(input.password)) {
    error.password =
      "Password must be at least 8 characters and contain one uppercase letter, one lowercase letter, one digit, and one special character.";
  } 


  return error;
}
