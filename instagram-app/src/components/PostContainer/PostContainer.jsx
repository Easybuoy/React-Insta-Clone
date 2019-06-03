import React from 'react'
import CommentSection from '../CommentSection/CommentSection';

import "./PostContainer.css";

export default function PostContainer({data}) {
    return (
        <div className="postContainer">
            <div className="card">
                <div className="card-user-detail">
                    <img src={data.thumbnailUrl} alt={data.username} />
                    <h3>{data.username}</h3>
                </div>
                <div className="card-image">
                    <img src={data.imageUrl } alt={data.username} />
                </div>

                <div className="card-footer">
                <i className="far fa-heart fa-2x" />
                <i className="far fa-comment fa-2x"></i>
                <p>{data.likes} likes</p>
                </div>
            </div>

            {
                console.log(data)
            }
        </div>
    )
}
