export const addItemToCart = (cartItems, itemToAdd) => {
    //find it itemToAdd already exists in cartItems
    const existingItem = cartItems.find(item => item.id === itemToAdd.id);
    if(existingItem) {
        return cartItems.map(item => 
            item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1} : item    
        );
    }

    // itemToAdd not exist yet
    return [...cartItems, {...itemToAdd, quantity: 1}];
}
