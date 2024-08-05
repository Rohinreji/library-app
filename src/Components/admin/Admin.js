import React, { useState } from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom'
// import background from '../Assests/image.png' 

function Admin() {
  const [state, setState] = useState({ username: '', password: '' })
  function toSave(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()

  function saved(params) {
    params.preventDefault();
    if (state.password == "password" && state.username == "admin") {
      alert("Login sucessfully")
      navigate("/homePage")
    } else {
      alert("User not found / incorrect password or username")
    }
    console.log(state);
  }
  return (
    <div>
      <div className='main-content'>
        <div className='main-left'>
          <h1>Campus Library</h1>
          <p>A library is a place where many books are kept. Most libraries are public and let people take the books to use in their home. Most libraries let people borrow books for several weeks. Some belong to institutions, for example, companies, churches, schools, and universities. The people who work in libraries are librarians. Librarians are people who take care of the library.</p>
          <p>Other libraries keep famous or rare books. There are a few "Copyright libraries" which have a copy of every book which has been written in that country. Some libraries also have other things that people might like, such as magazines, music on CDs, or computers where people can use the Internet. In school they offer software to learn the alphabet and other details.</p>
          <div>
            <h3>"i have always imagined that paradise <br /> will be kind of a library"</h3>
            <h2>-jorge luis borges</h2>
          </div>
        </div>


        <div className='main-right'>
          <h1>Welcome to admin panel</h1>
          <form onSubmit={saved} >
            <div className='Login'>
              <h2>Login</h2>
              <div className='inner-box'>
                <div className='inputs'>
                  <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={toSave} name='username' />
                  </div>
                  <div className='inputs-2'>
                    <div>
                      <input type="password" placeholder='Password' id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" onChange={toSave} name='password' />
                      <div id="passwordHelpBlock" class="form-text">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#">forgetten passsword?</a>
              <div className='centre'>
                <button type="submit" value="submit" class="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div >
    </div>
  )
}

export default Admin