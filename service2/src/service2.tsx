import React from "react"

interface Service2Props {
    readonly name: string
}

const Service2: React.FC<Service2Props> = ({name}) => {
    return <div className="loaded-component">
        Загруженный компонент 2 с параметром: "{name}"
    </div>
}

export default Service2