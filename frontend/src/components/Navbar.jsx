import logo from '../assets/icons/logo.svg';
import { Icon } from '../utils/utils';
import {Link} from 'react-router-dom';

const NavItem = ({styles, label, to, isEnabled=false}) => {

    return (
        <div className={`p-3 uppercase ${isEnabled ? 'cursor-pointer' : 'cursor-default'} font-semibold ${styles}`}>
            {!isEnabled && label}
            {isEnabled && <Link to={to}>{label}</Link>}
        </div>
    );
}

const Navbar = ({styles}) => {
  return (
    <div className={`w-full flex justify-center ${styles}`}>
        <div className='w-full max-w-7xl flex justify-between items-center'>
                <NavItem label={'Home'} to={'/'} isEnabled={true} />
                <NavItem label={'Market'}  />
                <Icon icon={logo} alt={'logo'} isLink={true} to={'/'} />
                <NavItem label={'Contact'}  />
                <NavItem label={'About'} />
        </div>
    </div>
  )
}

export default Navbar