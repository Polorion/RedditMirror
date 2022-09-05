import React, {useEffect, useRef, useState} from 'react';
import styles from './DropdownComponent.module.css';
import ReactDOM from 'react-dom';

const DropdownComponent = ({button, list, isOpen, clickOpenOrCloced}) => {

  const [cordinat, setSordinats] = useState('');

  const ref = useRef(null);

  return (
      <div ref={ref} className={styles.bodyDropdown}>
        <div onClick={() => {
          setSordinats(ref.current.getBoundingClientRect());
          clickOpenOrCloced(!isOpen);
        }}>
          {button}
        </div>
        {isOpen && <List list={list}
                         clickOpenOrCloced={clickOpenOrCloced}
                         cordinat={cordinat}/>
        }

      </div>
  );

};

export default DropdownComponent;

const List = (props) => {

  //
  const ref = useRef(null);

  useEffect(() => {
    if ( ref.current !== null )
      ref.current.style.top = props.cordinat.y + 20 + window.scrollY + 'px';
    ref.current.style.left = props.cordinat.x - 130 + 'px';
    ref.current.style.display = 'block';
  }, []);

  return ReactDOM.createPortal((
      props.cordinat && <div ref={ref} className={styles.containerListDropdown}>
        <div
            onClick={() => {
              props.clickOpenOrCloced(false);
            }}
            className={styles.listDropdown}>
          {props.list}
        </div>
      </div>
  ), document.querySelector(('#dropdown_root')));
};
