import avatar from './assets/avatar-jessica.jpeg'

function AddProps(props){
  return(
    <>
    <p className=' testHeader'>
      {props.word}
    </p>
    </>
  )
}

function ProfileCard(props){
  return(
    <>
    <div id="card_details">
      <img src = {avatar} alt = "User avatar"/>
      <h2>{props.username}</h2>
      <p className="location">
        {props.location}
      </p>
      <p>{props.role}</p>
      <ul className="socialMedia">
        <li>{props.social1}</li>
        <li>{props.social2}</li>
        <li>{props.social3}</li>
        <li>{props.social4}</li>
        <li>{props.social5}</li>
      </ul>
    </div>
    </>
  )
}


function App() {
  return (
    <>
    <AddProps 
    word = "Social links profile"/>
    <ProfileCard
    username = "Jessica Randall"
    location = "London, United Kingdom"
    role ="' Front-end developer and avid reader'"
    social1 = "Github"
    social2 ="Frontend mentor"
    social3 = "Linkedin" 
    social4 ="Twitter"
    social5 ="Instagram"
    />
    
    </>
  )
}

export default App
