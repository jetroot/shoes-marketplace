import {Link} from 'react-router-dom'

export const Icon = ({icon, alt, to, isLink}) => {
    return (
        isLink ? <Link to={to}>
                <img src={icon} className='w-8 h-8 cursor-pointer' alt={alt} />
            </Link> : <img src={icon} className='w-8 h-8' alt={alt} />
        
    );
}

export const Image = ({ imgUrl, alt, styles }) => {
    return (
        <img
            src={imgUrl}
            className={`rounded-tr-xl rounded-tl-xl object-cover ${
                styles ? styles : ""
            }`}
            alt={alt}
        />
    );
};