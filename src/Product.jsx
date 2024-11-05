const products = [
    {title: 'Cabbage', id: 1, type: 1},
    {title: 'Garlic', id: 2, type: 2},
    {title: 'Apple', id: 3, type: 2},
    {title: 'Huawei', id: 4, type: 3}
];

export default function ProductList() {

    const productFilter = products.filter(item =>
        item.type === 1
    );

    const listItems = productFilter.map(item =>
        <li key={item.id}>
            {item.title}
        </li>
    );
    return (<ul>{listItems}</ul>);
};


