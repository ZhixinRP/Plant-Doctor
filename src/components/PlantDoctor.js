import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './PlantDoctor.css';

const url = 'http://49.245.27.185:8888/image';

const PlantDoctor = () => {
    const [image, setImage] = useState()
    const [message, setMessage] = useState('')
    
    const handleChange = (e) => {
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }

    const handleApi = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append('image', image)
            const response = await Axios.post(url, formData)
            console.log(response)
            let label = response.data.label
            let accuracy = response.data.accuracy
            setMessage(label + " " + accuracy + "%");
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        
    }, [image])

    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <form>
                        <label>Select File</label>
                        <input type="file" onChange={handleChange} />
                        <button onClick={handleApi}>Upload</button>
                    </form>
                    <h1>{message}</h1>
                </div>
            </div>
        </>
        )
}

export default PlantDoctor