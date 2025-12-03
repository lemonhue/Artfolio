import "./MyGoogleButton.scss";
import { useGoogleLogin } from "@react-oauth/google";

function MyGoogleButton() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: () => console.log("Login Failed"),
  });

  return (
    <button className="google-btn" onClick={() => login()}>
      Sign in with Google
    </button>
  );
}

export default MyGoogleButton;
