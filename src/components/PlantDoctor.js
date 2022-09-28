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
            setMessage(label);
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
                    <form className='uploadForm'>
                        <label className='upload-label'>Select File</label>
                        <input className='input-file' type="file" onChange={handleChange} />
                        <button className='btn-upload' onClick={handleApi}>Upload</button>
                    </form>
                    <div className='plant-status'>Plant Health Status: {message}</div>
                </div>
            </div>
        </>
        )
}

export default PlantDoctor