import React, { createContext, useState, useContext, useEffect } from 'react';
import styles from './modal.module.scss'

import { IconX } from '@tabler/icons-react';
import PropTypes from 'prop-types';

const ModalContext = createContext();



    

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalConfig, setModalConfig] = useState({
    width:'500px',
    title:'',
    btnsEnd:''
  });

  const showModal = ({title, content, width='500px', btnsEnd=''}) => {
    setModalConfig({title, width, btnsEnd});
    setModalContent(content);
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    
  };
  /* useEffect(() => {
    
  
    console.log('estos es el contend',modalConfig, modalContent)
  }, [modalConfig]); */

  function BtnEnd ({onClick=()=>hideModal(), children, color=false, customColor='#51029B', className=''}) {

    color = (color === 'cyan')? '#00868E' :(color==='red')? '#9B0202':(color==false)? customColor: '#51029B' // por defecto defecto el color es morado 
    const estilo = styles.btn + ' ' + styles.btnCustom
    return(
      <button type='button' className={`${estilo} ${className}`} onClick={onClick} style={{ backgroundColor : color, color: 'white' }}>
        {children}
      </button>
    )
  }
  // Definición de PropTypes
  BtnEnd.propTypes = {
    onClick: PropTypes.func, // onClick debe ser una función
    children: PropTypes.node, // children puede ser cualquier nodo React
    color: PropTypes.oneOf(['cyan', 'red', false]), // color debe ser uno de estos valores
    customColor: PropTypes.string, // customColor debe ser una cadena de texto
  };

 /*  // Definición de valores por defecto para las props
  BtnEnd.defaultProps = {
    onClick: () => hideModal(), // función por defecto para onClick
    color: false, // color por defecto
    customColor: '#51029B', // color personalizado por defecto
  }; */







  return (
    <ModalContext.Provider value={{ showModal, hideModal, BtnEnd }}>
      {children}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={`${styles.modalContent} bg-gray-900`} style={{ maxWidth: modalConfig.width }}>
          <button type='button' className={`${styles.esc}`} onClick={hideModal}><IconX stroke={2} /></button>
            <h2 className='text-white text-4xl'>{modalConfig.title}</h2>
            <div className={styles.body}>{modalContent}</div>
            
            <section className={styles.btnsFinal}>
              {/* <button type='button' className={styles.btn} onClick={hideModal}>Cancelar  </button> */}
              {modalConfig.btnsEnd}
            </section>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export function useModal () {
  return useContext(ModalContext);
}

// documentacion
/* 
antes de usar 

import { useModal } from './context/ModalContext';
const { showModal, hideModal, BtnEnd } = useModal(); 


ejemplo de uso:
<button type='button' onClick={() =>
          showModal({
            title:"Confirmación",
            width:'500px',
            btnsEnd: <BtnEnd > Confirmar </BtnEnd> ,
            content:
            <div>
            <p>¿Estás seguro de que deseas continuar?</p>
            
            </div>

          })
        } className={styles.delete}><IconTrash stroke={2} /> Borrar</button>




*/
