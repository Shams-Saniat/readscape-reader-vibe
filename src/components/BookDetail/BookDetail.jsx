import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId)
    // console.log(typeof bookId, typeof id, typeof data[0].bookId );

    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image } = book;

    return (
        <div>
            <h2>Book details: {bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <button className="btn btn-outline btn-accent">Read</button>
            <button className="btn btn-accent">Wishlist</button>

        </div>
    );
};

export default BookDetail;