import React from 'react'

import '../styles/memories.scss'

const Memories = () => {
    console.log('hi')
    return (
        <div className="container">
            <div className="gallery">
                <div className="gallery-item" tabIndex={0}>
                    <img
                        src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                        className="gallery-image"
                        alt=""
                    />
                    <div className="gallery-item-info">
                        <ul>
                            <li className="gallery-item-likes">
                                <span className="visually-hidden">Likes:</span>
                                <i className="fas fa-heart" aria-hidden="true" /> 56
                            </li>
                            <li className="gallery-item-comments">
                                <span className="visually-hidden">Comments:</span>
                                <i className="fas fa-comment" aria-hidden="true" /> 2
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Memories
