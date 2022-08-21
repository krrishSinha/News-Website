import React from 'react'

function NewsItem(props) {
    let d = new Date(props.date);
    let date = ` ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;

    return (
        <div className='my-3' >
            <div className="card justify-content-center" style={{ backgroundColor: "#212529ee", color: "#f8f9fa"}}>
                <img src={props.imageUrl} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-success">{`by ${props.author} on ${date}`}</small></p>
                    <a href={props.url} target="_blank"  className="btn btn-success btn">Read more...</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;