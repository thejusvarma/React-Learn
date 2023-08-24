function ListGroup() {
    const items=[
        'Delhi',
        'Hyd',
        'Chennai'
    ]
    if(items.length === 0)
        return <h1>Empty Bro</h1>
    else
    {
        return (
            <>
        <h1>Hey</h1>
        <ul className="list-group" >
        {items.map((item)=>(<li>{item}</li>))}
        </ul>
        </>
    );
    }    
}

export default ListGroup;
