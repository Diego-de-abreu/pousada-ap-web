
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Anfitriao.css';

export default function Anfitriao() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };
return (
    <div id="cardBox" className="card-box">
      <div className="card-content">
        <div id="logo" className="logo">
          <span className="logo-title">ReservaFácil</span>
        </div>
        <div className="social-login-title">
          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-text"> Entre com seu login e senha:</span>
            <span className="divider-line"></span>
          </div>
        </div>
        <div className="boxLogin fade">
          <form className="login-form"  autoComplete="off">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                E-mail ou CPF <span className="required">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                // value={username}
                // onChange={e => setUsername(e.target.value)}
                className="form-input"
                style={{ height: '21px' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Senha <span className="required">*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Senha"
                // value={password}
                // onChange={e => setPassword(e.target.value)}
                className="form-input"
                style={{ height: '21px' }}
              />
            </div>
            <div className="form-links">
              <span className="form-link"  >Esqueci a senha</span>
            </div>
            {/* {messageError && <div className="login-error">{messageError}</div>} */}
            <Button variant="contained" type="submit" sx={{width:"100%"}}>Entrar</Button>
                       <Button variant="outlined" onClick={handleBack} sx={{width:"100%", marginTop: 2}}>Voltar</Button>
            {/* <Button variant="outlined"  sx={{width:"100%", marginTop: 2}}>Voltar</Button> */}
          </form>
        </div>
        <div className="notRegister">
          <span
            className="notRegister-link"
            // onClick={handleRegister}
            style={{ cursor: 'pointer' }}
          >
            Ainda não tenho cadastro
          </span>
        </div>
      </div>
    </div>
  );
}
// import React, { useContext, useState } from 'react';
// import './LoginPage.css';
// import CryptoJS from "crypto-js";
// import { login } from '../../services/AuthService';
// import { AuthContext } from '../../hooks/HookUseContext';
// import { LocalStorage } from '../../utils/LocalStorage';
// import { UserPermissions } from '../../hooks/PermissionContext';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material';

// const key = import.meta.env.VITE_API_KEY_CRYPTR;

// const LoginPage: React.FC = () => {

  // const { setAuthValue } = useContext(AuthContext);  
  // const { addPermissions } = useContext(UserPermissions);

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [messageError, setMessageError] = useState('');  
  // const navigate = useNavigate();

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   login({
  //     username: username,
  //     password: CryptoJS.AES.encrypt(password, key).toString()
  //   }).then((response) =>{
  //     LocalStorage.add(JSON.stringify(response?.access_token), 'app:vehicle:rental:data:token:key');
  //     setAuthValue(response?.access_token);  
  //     addPermissions(response?.access_token);
  //     navigate("/home", { replace: true });
  //   }).catch((err) => {
  //     setMessageError(err.message);
  //   });
  // };

  // const handleForgotPassword = () => {
  //   navigate("../password/recovery", { replace: true });    
  // };

  // const handleRegister = () => {
  //   navigate("../form", { replace: true });
  // };

  // const handleBack =() =>{
  //   navigate("../", { replace: true });
  // }

  // return (
  //   <div id="cardBox" className="card-box">
  //     <div className="card-content">
  //       <div id="logo" className="logo">
  //         <span className="logo-title">ALL VEÍCULOS</span>
  //       </div>
  //       <div className="social-login-title">
  //         <div className="divider">
  //           <span className="divider-line"></span>
  //           <span className="divider-text"> Entre com seu login e senha:</span>
  //           <span className="divider-line"></span>
  //         </div>
  //       </div>
  //       <div className="boxLogin fade">
  //         <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
  //           <div className="form-group">
  //             <label htmlFor="email" className="form-label">
  //               E-mail ou CPF <span className="required">*</span>
  //             </label>
  //             <input
  //               id="email"
  //               type="email"
  //               placeholder="E-mail"
  //               value={username}
  //               onChange={e => setUsername(e.target.value)}
  //               className="form-input"
  //               style={{ height: '21px' }}
  //             />
  //           </div>
  //           <div className="form-group">
  //             <label htmlFor="password" className="form-label">
  //               Senha <span className="required">*</span>
  //             </label>
  //             <input
  //               id="password"
  //               type="password"
  //               placeholder="Senha"
  //               value={password}
  //               onChange={e => setPassword(e.target.value)}
  //               className="form-input"
  //               style={{ height: '21px' }}
  //             />
  //           </div>
  //           <div className="form-links">
  //             <span className="form-link" onClick={handleForgotPassword} >Esqueci a senha</span>
  //           </div>
  //           {messageError && <div className="login-error">{messageError}</div>}
  //           <Button variant="contained" type="submit" sx={{width:"100%"}}>Entrar</Button>
  //           <Button variant="outlined" onClick={handleBack} sx={{width:"100%", marginTop: 2}}>Voltar</Button>
  //         </form>
  //       </div>
  //       <div className="notRegister">
  //         <span
  //           className="notRegister-link"
  //           onClick={handleRegister}
  //           style={{ cursor: 'pointer' }}
  //         >
  //           Ainda não tenho cadastro
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  // );
// }

// export default LoginPage;