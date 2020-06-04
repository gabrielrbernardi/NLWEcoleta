import React from 'react';
import {Link} from 'react-router-dom';
import {FiCheckCircle} from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import './styles.css';

const SuccessPage = () => {
    return (
        <div className="overlay">
            <Link to='/'>
                <div className="divSuccess">
                    <span className="iconSuccess">
                        <FiCheckCircle size={64}/>
                    </span>
                    <a className="text"><br/>Ponto de coleta criado com sucesso</a>
                </div>
            </Link>
            {/* <h1 className="text">teste</h1> */}
        </div>
    );
}

export default SuccessPage;