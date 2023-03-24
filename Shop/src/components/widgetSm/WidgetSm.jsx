import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("user/?new=true");
        setUser(res.data);
        console.log(res)
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {user &&
          user.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={
                  user.img ||
                  "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
                {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
