var initialState = [
    {
        id: 1,
        name: 'IPhone 7',
        image: 'https://www.didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/i/p/iphone-7-plus-128gb-ll-a-quoc-te-do-didongviet_1.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'IPhone 7 Plus',
        image: 'https://www.didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/i/p/iphone-7-plus-128gb-ll-a-quoc-te-do-didongviet_1.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 1020,
        inventory: 20,
        rating: 3
    },
    {
        id: 3,
        name: 'Samsung Galaxy S7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/74113/samsung-galaxy-s7-2-400x460.png',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 345,
        inventory: 15,
        rating: 2
    },
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default products;