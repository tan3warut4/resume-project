import React from 'react'

type IconButtonProps = {
    text: string,
    color: string,
    textColor?: string,
    hoverColor?: string,
    children?: React.ReactNode
}

const IconButton = ({ children, text, color, textColor, hoverColor, ...props }: IconButtonProps) => {
    return (
        <button className={`border gap-x-3 flex p-2 items-center rounded-lg w-full ${hoverColor}   ${textColor || "text-white"}  ${color || "bg-slate-200"}  justify-center `} {...props}>
            {children}
            <div>
                <span>{text}</span>
            </div>
        </button>
    )
}

export default IconButton