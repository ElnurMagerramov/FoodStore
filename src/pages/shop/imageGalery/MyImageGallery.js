import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class MyImageGallery extends Component {

  render() {
    const properties = {
      thumbnailPosition: "left",
      showPlayButton: false,
      items: [
        {
          original: this.props.basicImage.image,
          thumbnail: this.props.basicImage.image
        },
        {
          original: this.props.basicImage.image1,
          thumbnail: this.props.basicImage.image1
        },
        {
          original: this.props.basicImage.image2,
          thumbnail: this.props.basicImage.image2
        },
        {
          original: this.props.basicImage.image3,
          thumbnail: this.props.basicImage.image3
        }
      ]
    };

    return <ImageGallery {...properties} />;
  }
}

export default MyImageGallery;
