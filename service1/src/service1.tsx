import React from "react"

interface Service1Props {
    readonly name: string
}

const Service1: React.FC<Service1Props> = ({name}) => {
    return <div className="loaded-component">
        Загруженный компонент 1 с параметром: "{name}"
    </div>
}

export default Service1