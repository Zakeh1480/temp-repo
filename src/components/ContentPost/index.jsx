export const ContentPost = ( { x } ) => {
    return (
        <div key={x.id} className="post-content">
                <h2> {x.title} </h2>
                <p> {x.body} </p>
            </div>
    );
}