import { useState ,useEffect} from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const SingIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const admin = useSelector((state) => state?.user?.currentUser?.isAdmin);
  const handleclick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    console.log(admin)
  };
  const history = useHistory()
  useEffect(() => {
   if(admin){
    history.push('/')
   }
  },[history,admin])

  return (
    <div
      style={{
        height:"100vh",
        display: "flex",
        flexDirection:'column',
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <input
      style={{padding:10,marginBottom:20}}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      style={{padding:10,marginBottom:20}}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleclick} style={{padding:10,width:'100px'}}>Login</button>
    </div>
  );
};

export default SingIn;
