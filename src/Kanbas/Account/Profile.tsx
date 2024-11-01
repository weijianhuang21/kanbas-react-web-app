import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch }
  from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector(
        
      (state: any) => state.accountReducer);
      const fetchProfile = () => {
        if (!currentUser)
          return navigate("/Kanbas/Account/Signin");
        setProfile(currentUser);
      };
      const signout = () => {
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
      };
      useEffect(() => { fetchProfile(); }, []);
    
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            {profile && (
        <div>

<input defaultValue={profile.username}
                 onChange={(e) => setProfile({
                   ...profile, username:  e.target.value })}/>
          <input defaultValue={profile.password}
                 onChange={(e) => setProfile({
                   ...profile, password:  e.target.value })}/>
          <input defaultValue={profile.firstName}
                 onChange={(e) => setProfile({
                   ...profile, firstName: e.target.value })}/>
          <input defaultValue={profile.lastName}
                 onChange={(e) => setProfile({
                   ...profile, lastName:  e.target.value })}/>
          <input defaultValue={profile.dob}
                 onChange={(e) => setProfile({
                   ...profile, dob: e.target.value })} type="date"/>
          <input defaultValue={profile.email} id="wd-email"
                 onChange={ (e) => setProfile({
                   ...profile, email: e.target.value })}/>
          <select onChange={(e) => setProfile({
                    ...profile, role:  e.target.value })}
                 className="form-control mb-2" id="wd-role">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <button onClick={signout}>
            Sign out
          </button>
        </div>
      )}
</div>);}