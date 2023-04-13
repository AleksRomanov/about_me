import React, {useState} from 'react';
import {HeaderStyles} from './Header.styles.tw';
import Logo from "../../../assets/svg/WR.svg"
import {Button, Drawer} from 'antd';

function Header() {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  return (
    <HeaderStyles className="header">
      <img className={'header-background'} src={Logo} alt=""/>
      <Drawer width={300} title="Basic Drawer" placement="left" onClose={onClose} open={open}>
        {/*<HeaderNav />*/}
      </Drawer>
      <Button className={'header__burger-button'} type="primary" onClick={showDrawer}>
        MENU
      </Button>
    </HeaderStyles>
  );
}

export default Header;
