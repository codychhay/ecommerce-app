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

export const removeItem = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(item => item.id === itemToRemove.id);

    if(existingItem) {
        if(existingItem.quantity === 1) {
            return cartItems.filter(item => item.id !== itemToRemove.id);
        }

        return cartItems.map(item => 
            item.id === itemToRemove.id ? 
                {...item, quantity: item.quantity - 1} : 
                item
        )
    }
}