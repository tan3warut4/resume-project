import React from 'react'

interface ButtonProps {
    name: string
    textColor: string | "text-white"
    buttonHoverColor: string
    type?: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps) => {
    const colorMapping = (type: string | undefined) => {
        switch (type) {
            case "frontend":
                return "bg-slate-400"
            case "backend":
                return "bg-red-600"
            case "systemDesign":
                return "bg-sky-400"
            case "leetCode":
                return "bg-orange-400"
            default:
                return "bg-white"
        }
    }
    const { name, textColor, buttonHoverColor, type, onClick } = props
    return (
        <button
            onClick={onClick}
            className={`${colorMapping(type)} hover:${buttonHoverColor} ${textColor} px-3 py-2 rounded-full text-xs mr-3`}
        > {name}
        </button >
    )
}

export default Button