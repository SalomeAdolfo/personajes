import React from 'react'
import { route } from '../utils/route'
import '../styles/BlogStyles.css'

function BlogPage() {
    const [data, setData] = React.useState([])
    const [isLoad, setIsLoad] = React.useState(false)
    React.useEffect(() => {
        (async function getData() {
            setIsLoad(true)
            const response = await fetch(`${route}folders/personaje`)
            if (response.ok) {
                const json = await response.json()
                setData(json)
            }
            setIsLoad(false)
        })()
    }, [])

    console.log(isLoad)
    return (
        <section className='container-fluid'>
            <h1 className='fw-bold text-center p-5'>Personajes</h1>
            <div className='card_container'>
                {
                    data.length > 0 & !isLoad ? (
                        <>
                            {
                                data.map((el, idx) =>
                                    <div key={idx} className='card'>
                                        <div className="card_image">
                                            <img src={`${route}folders/list/${el.imagen}`} alt='personaje' />
                                        </div>
                                        <div className="card_info">
                                            <span>{el.nombre}</span>
                                            <p><b>Características: </b>{el.caracteristicas}</p>
                                            <p><b>Especie: </b>{el.especie}</p>
                                            <p><b>Género: </b>{el.genero}</p>
                                            <p><b>¿Puede volar? </b>{el.puede_volar === 1 ? 'Si' : 'No'}</p>
                                            <p><b>Sector: </b>{el.sector}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                    ) : null
                }
            </div>
        </section>
    )
}

export default BlogPage