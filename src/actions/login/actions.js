import axios from 'axios';
import consts from '../../consts';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

export function login(values) {
  return submit(values, `${consts.API_URL}/login`);
}
export function signup(values) {
  return submit(values, `${consts.API_URL}/signup`);
}

function submit(values, url) {
  return (dispatch) => {
    // AUTH FAKE

    const { login, senha } = values;

    if (login === 'admin' && senha === 'admin@123') {
      dispatch([{ type: 'USER_FETCHED', payload: { login: 'admin', name: 'Admin', token: 'jhshJHJs&yyHwelkl212kksm'} }]);
    } else {
      toast.error('Login ou senha não confere!');
    }


    //  FLUXO NORMAL
    // axios
    //   .post(url, values)
    //   .then((resp) => {
    //     let token = resp.headers.authorization;
    //     token = token.replace('Bearer ', '');
    //     let decoded = jwtDecode(token);
    //     decoded = { ...decoded, token: token };
    //     dispatch([{ type: 'USER_FETCHED', payload: decoded }]);
    //   })
    //   .catch((e) => {
    //     let status = e.response ? e.response.status : null;
    //     if (status === 403) {
    //       toast.error('Login ou senha não confere!');
    //     } else {
    //       toast.error('Login não realizado, o serviço está indisponível!');
    //     }
    //   });
  };
}

export function logout() {
  return dispatch => {
    dispatch({ type: 'TOKEN_VALIDATED', payload: false });
  }
}

export async function validateToken(token) {
  return (dispatch) => {
    if (token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      // VALIDAÇÃO FAKE

      dispatch({ type: 'TOKEN_VALIDATED', payload: { login: 'admin', name: 'Admin', token: 'jhshJHJs&yyHwelkl212kksm'} });

      // new Promise((resolve, reject) => {
      //   axios
      //     .post(`${consts.API_URL}/auth/validateToken`, null, config)
      //     .then((resp) => {
      //       dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data });
      //     })
      //     .catch((e) => dispatch({ type: 'TOKEN_VALIDATED', payload: false }));
      // });
    } else {
      dispatch({ type: 'TOKEN_VALIDATED', payload: false });
    }
  };
}
