class Cart {
    onChange = null;
    items = [];
    addItem(item) {
        this.items.push(item);
        this.onChange?.(this.items);
    }
    getItems() {
        return this.items;
    }
    getItem(id) {
        return this.items.find(item => item.id === id);
    }

    subscribe(callback) {
        this.onChange = callback;

        return () => {
            this.onChange = null;
        };
    }
}

export default new Cart();
