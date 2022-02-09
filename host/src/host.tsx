import React from "react"
import ReactDOM from "react-dom"

interface ServiceProps {
    readonly name: string
}

interface LoadingProps {
    readonly name: string
    readonly isError: boolean
}

const Loading: React.FC<LoadingProps> = ({name, isError}) => isError 
    ? <div className="error">Ошибка загрузки {name}!</div>
    : <div className="loading">Загрузка {name} ...</div>

interface ImportProps {
    readonly name: string
    readonly path: string
}

const Import: React.FC<ImportProps> = ({name, path}) => {
    const [isError, setError] = React.useState<boolean>(false)

    const Service: React.FC<ServiceProps> = React.lazy(() => import(path).catch(() => setError(true)))

    return <React.Suspense fallback={<Loading name={name} isError={isError}/>}>
            <Service name={`Host to ${name}`}/>
    </React.Suspense>
}

const App = () => {
    return <div className="center host-component">
        <h2>Это встроенный компонент</h2>
        <Import name="Service 1" path="/service1"/>
        <Import name="Service 2" path="/service2"/>
    </div>
}

ReactDOM.render(<App/>, document.getElementById("root"))