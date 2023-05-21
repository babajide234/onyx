/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Button = ({ type,varient,size,children, ...rest}) => {

    if (type == 'link'){
        return (
            <Link className={`
                ${
                    varient == 'contained' && 'bg-primary text-white' || 
                    varient == 'empty' && 'bg-white text-text' 
                } 
                ${
                    size == 'full' && 'w-[700px]'
                } px-[30px] py-[10px] rounded-md text-center
            `} {...rest}>
                {children}
            </Link>
        )
    } else {
        return (
            <button className={`
                ${
                    varient == 'contained' && 'bg-primary text-white' || 
                    varient == 'empty' && 'bg-white text-text' 
                } 
                ${
                    size == 'full' && 'w-[700px]'
                } 
                px-[30px] py-[10px] rounded-md text-center
            `} {...rest}>
                {children}
            </button>      
        )
    }
}

export default Button