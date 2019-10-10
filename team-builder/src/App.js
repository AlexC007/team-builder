import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import MemberForm from './components/form.js'
import Members from './components/memberCard';

function App() {
  const [members, setMembers] = useState([{
      
    name:'Charles Alexander',
    email:'charlesalexanderthegreat@gmail.com',
    role:'Backend Developer',

  }
]);
  
  const addMember = member => {
    const newMember ={
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
    };
      setMembers([...members, newMember]);
  };
  
  
  
  return (
    <div className= "App-List">
    <h1> Member List </h1>
    <MemberForm addMemberFn={addMember}/>
    <Members memberList ={members}/>
    </div>
  );
}

export default App;
