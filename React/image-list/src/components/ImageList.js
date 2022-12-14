import React from "react";
import ReactDOM from "react-dom";

const ImageList = (props) => {
    console.log(props)
   const images= props.images.map((image) => {
        return <img key={image.id} src={image.webformatURL} alt="image" />
    })
    return(
        <div>
            {images}
        </div>
    )
}
export default ImageList;