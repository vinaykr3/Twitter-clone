import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CreateTwitts = () => {
    const selectorState = useSelector(selectorState => selectorState);
    console.log(selectorState);
    const dispatch = useDispatch();

    const [UserText, setUserText] = useState('');
    const [imgUrl, setImgUrl] = useState();
    const [state, setState] = useState();

    useEffect(() => {
        if (state) {
          const imgUrla = URL.createObjectURL(state);
          setImgUrl(imgUrla);
        } 
    }, [state])
    const upload__image = () => {
        upload__input();
    }
    const upload__input = () => {
        document.getElementById('upload__input').click();
    }
    const pushTweet = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD__POST', payload: {UserText, imgUrl}});
        setUserText('');
        setImgUrl();
    }
    return (
        <div className='create'>
            <div className="create__first">
                <div className="create__img">
                    <img src="/images/user_image.png" alt="user image" />
                </div>
                <div className="create__input">
                    <input type="text" className='create__control' placeholder="What's happing" value={UserText} onChange={(e) => setUserText(e.target.value)} />
                </div>
            </div>
            {state ? <div className="postss__details__img">
                <img src={imgUrl} alt="uploaded image" />
            </div>: ''}
            <div className="create__second">
                <div className="create__icons">
                    <i className="far fa-image ic" onClick={upload__image}></i>
                    <input type="file" name="" id="upload__input" onChange={(e) => setState(e.target.files[0])} onClick={upload__input} className='upload__input' />
                    <i className="far fa-list-alt ic"></i>
                    <i className="far fa-smile ic"></i>
                    <i className="fas fa-calendar-check ic"></i>
                </div>
                <div className="create__btn">
                    <a href="" onClick={pushTweet}>Tweet</a>
                </div>
            </div>
        </div>
    )
}

export default CreateTwitts;