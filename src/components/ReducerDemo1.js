import { useEffect, useReducer, useState } from "react";
// import { useFetchData } from "../hooks/useFetchData";

var initialState = { likes: 0, dislikes: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'like':
            return { likes: parseInt(state.likes) + 1, dislikes: state.dislikes };
        case 'dislike':
            return { dislikes: parseInt(state.dislikes) + 1, likes: state.likes };
    }
}
export default function ReducerDemo1() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [data] = useFetchData("http://fakestoreapi.com/products/3");
    // const [product, setProduct] = useState({});

    // useEffect(() => {
    //     fetch("http://fakestoreapi.com/products/2")
    //         .then(response => response.json())
    //         .then(data => {
    //             setProduct(data);
    //         })
    // }, []);

    function handleLikeClick() {
        dispatch({ type: 'like' });
    }

    function handleDislikeClick() {
        dispatch({ type: 'dislike' });
    }


    return (
        <div className="container-fluid">
            <h2>Products Details</h2>
            <div className="card p-2" style={{ width: '300px' }}>
                <img src={data.image} className="card-img-top" height={"160px"} />
                <div className="card-header">
                    <p>{data.title}</p>
                </div>
                <div className="card-footer">
                    [{state.likes}] <button className="btn btn-primary" onClick={handleLikeClick}><span className="bi bi-hand-thumbs-up"></span></button>
                    [{state.dislikes}] <button className="btn btn-danger" onClick={handleDislikeClick}><span className="bi bi-hand-thumbs-down"></span></button>

                </div>

            </div>


        </div>
    )
}