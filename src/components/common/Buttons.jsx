/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Button = ({ typpe ,varient,color,size,children, ...rest}) => {

    if (typpe == 'link'){
        return (
            <Link className={`
                ${
                    varient == 'contained' && color == 'primary' && 'bg-primary border-primary text-white' ||
                    varient == 'contained' && color == 'secondary' &&  'bg-secondary border-secondary text-white' ||
                    varient == 'contained' && color == 'default' &&  'bg-white border-white text-primary' ||
                    varient == 'outlined' && color == 'primary' &&  'bg-transparent border-primary text-white' ||
                    varient == 'outlined' && color == 'secondary' &&  'bg-transparent border-secondary text-secondary' ||
                    varient == 'outlined' && color == 'default' &&  'bg-transparent border-whhite text-white' ||
                    varient == 'empty' && 'bg-white border-transparent text-text' 
                } 
                ${
                    size == 'full' && 'w-full' ||
                    size == 'small' && 'w-[120px]' ||
                    size == 'medium' && ' w-[268px] md:w-[178px]' 
                } px-[16px] py-[11.5px] rounded-md text-center block text-base font-normal border border-solid overflow-hidden
            `} {...rest}>
                {children}
            </Link>
        )
    } else {
        return (
            <button className={`
                ${
                    varient == 'contained' && color == 'primary' && 'bg-primary border-primary text-white' ||
                    varient == 'contained' && color == 'secondary' &&  'bg-secondary border-secondary text-white' ||
                    varient == 'contained' && color == 'default' &&  'bg-white border-white text-primary' ||
                    varient == 'outlined' && color == 'primary' &&  'bg-transparent border-primary text-white' ||
                    varient == 'outlined' && color == 'secondary' &&  'bg-transparent border-secondary text-secondary' ||
                    varient == 'outlined' && color == 'default' &&  'bg-transparent border-whhite text-white' ||
                    varient == 'empty' && 'bg-white border-transparent text-text' 
                } 
                ${
                    size == 'full' && 'w-full' ||
                    size == 'small' && 'w-[120px]' ||
                    size == 'medium' && ' w-[268px] md:w-[178px]' 
                }  
                px-[16px] py-[11.5px] rounded-md text-center text-base font-normal
            `} {...rest}>
                {children}
            </button>      
        )
    }
}

export default Button