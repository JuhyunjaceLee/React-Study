import "./App.css";
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";

function AppProfile() {
  const handleClick = (e) => {
    console.log(e);
    alert("버튼이 클릭!");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        img="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        isNew={true}
      />
      <Profile
        img="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        name="James Kim"
        title="프론트엔드 개발자"
        isNew={false}
      />
      <Profile
        img="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        name="Mike Park"
        title="백엔드 개발자"
        isNew={false}
      />
      <Profile
        img="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        name="Tom Lee"
        title="풀스택 개발자"
      />
    </>
  );
}

export default AppProfile;
