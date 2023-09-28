import { useState } from 'react';
import styled from 'styled-components';

const OuterWrapper = styled.div`
    font-size: 20px;
    
    .form {
        display: flex;
        flex-direction: column;
    }

    .item {
        padding: 10px;
        margin: 5px 10px;
    }

    .item:last-of-type {
        margin-bottom: 20px;
    }

    button {
        background-color: rgb(200, 200, 200);
        color: black;
        margin-left: 10px;
    }
`;

const ListWrapper = styled.ul`
    list-style-type: square;
`;

function Item({value, onItemChange}) {
    return <input className="item" type="text" value={value} onChange={onItemChange}/>;
}

export default function Form(props) {
    const [items, setItems] = useState(Array(4).fill(""));
    const [itemList, setItemList] = useState(Array(4).fill(""));

    function handleChange(e, i) {
        const newItem = items.slice();
        newItem[i] = e.target.value;
        console.log(newItem);
        setItems(newItem);
    }
    

    function handleSubmit(e) {
        e.preventDefault();
        setItemList(items);
        setItems(Array(4).fill(""));
    }

    return (
        <>
            <OuterWrapper>
                <form className="form" onSubmit={handleSubmit}>
                    <Item value={items[0]} onItemChange={(e) => handleChange(e, 0)}/>
                    <Item value={items[1]} onItemChange={(e) => handleChange(e, 1)}/>
                    <Item value={items[2]} onItemChange={(e) => handleChange(e, 2)}/>
                    <Item value={items[3]} onItemChange={(e) => handleChange(e, 3)}/>
                    <div>
                        <button type="submit" onClick={handleSubmit}>Make List</button>
                    </div>
                </form>
            </OuterWrapper>
            
            <div>
                <ListWrapper>
                    {itemList.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ListWrapper>
            </div>
        </>
    )
}