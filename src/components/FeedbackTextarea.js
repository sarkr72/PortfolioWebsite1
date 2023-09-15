
import * as React from 'react';

export default function TextArea({ question }) {
    const store = React.useContext(ReviewContext);

    return (
        <label>
            <p>{question}</p>
            <textarea
                name={question}
                id={question}
                onChange={e => store.setFeedback(e.currentTarget.value)}
                cols={130}
                rows={30}
                maxLength={1000}
            ></textarea>
        </label>
    );
}