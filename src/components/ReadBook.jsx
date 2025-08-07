import React from 'react';
import { getReadBooks } from '../utils/readBooks';

const ReadBook = () => {
    const readBooks = getReadBooks();
    console.log(readBooks)
    return (
        <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum sed necessitatibus odit laborum rem, aut magnam vero rerum reprehenderit adipisci, inventore autem alias reiciendis, at repudiandae quibusdam tempore harum blanditiis vel quas id sunt! Minima, officia consectetur, eveniet corrupti, ea ut nemo laborum assumenda obcaecati repellat voluptates nesciunt mollitia adipisci quidem neque nisi impedit temporibus perferendis officiis accusamus! Voluptates quam, doloribus, voluptate asperiores quas ut repudiandae mollitia ea porro ullam est consectetur at ducimus tenetur maxime commodi ratione quisquam provident! Natus adipisci magnam quo? Tempore minus, amet ex perferendis voluptatibus dicta voluptate voluptates nisi, quas dolore quaerat hic omnis?

            </h1>
        </div>
    );
};

export default ReadBook;