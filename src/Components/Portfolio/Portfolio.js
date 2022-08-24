import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/700/300",
    "https://picsum.photos/2000/3000",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/700/700",
    "https://picsum.photos/100/200",
]

const Portfolio = () => {

    const [data, setData] = useState({ img: '', i: 0 })

    const viewImage = (img, i) => {
        setData({ img, i })
    }
    const imgAction =(action)=>{
        let i = data.i;
        if(action === 'next-img' && i !== images.length){
            setData({img: [images[i + 1]], i: i + 1})
        }
        if(action === 'previous-img' && i !== 0){
            setData({img: [images[i - 1]], i: i - 1})
        }
        if(!action){
            setData({img: '', i: 0});
        }
    }

    return (
        <>
            {data.img && <div style={ {
                width: '100%',
                height: '100vh',
                background: 'black',
                position: 'fixed',
                top:0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                zIndex: 100
            } }>
                <button onClick={() => imgAction('previous-img')}> &#60; </button>
                <img src={ data.img } style={ { width: 'auto', maxWidth: '90%', maxHeight: '90%' } } alt="sdsd"></img>
                <button onClick={() => imgAction('next-img')}> &#62; </button>
                <button onClick={() => imgAction()} style={{position: 'absolute', top:'10px', right: '10px'}}>x</button>
            </div>}
            <section className=" layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Our portfolio
                        </h2>
                        <p>
                            minim veniam, quis nostrud exercitation ullamco laboris nisi
                        </p>
                    </div>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={ { 350: 1, 750: 2, 900: 3 } }
                    >
                        <Masonry gutter="10px">
                            { images.map((image, i) => (
                                <img
                                    key={ i }
                                    src={ image }
                                    style={ { width: "100%", display: "block", cursor: "pointer" } }
                                    alt=""
                                    onClick={ () => viewImage(image, i) }
                                />
                            )) }
                        </Masonry>
                    </ResponsiveMasonry>
                </div>

            </section>
        </>
    )
}

export default Portfolio