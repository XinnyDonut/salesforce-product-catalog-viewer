import { LightningElement, wire, track } from 'lwc';
import getProducts from '@salesforce/apex/ProductController.getProducts';
import getInventoryStatus from '@salesforce/apex/ProductController.getInventoryStatus';

export default class ProductCatalog extends LightningElement {
    @track products = [];
    @track isLoading = true;
    @track selectedCategory = 'All';
    
    categoryOptions = [
        { label: 'All Categories', value: 'All' },
        { label: 'Electronics', value: 'Electronics' },
        { label: 'Clothing', value: 'Clothing' },
        { label: 'Food', value: 'Food' },
        { label: 'Other', value: 'Other' }
    ];
    
    // Computed property to check if we have products
    get noProducts() {
        return !this.isLoading && this.products.length === 0;
    }
    
    // Load products on component initialization
    connectedCallback() {
        this.loadProducts();
    }
    
    // Method to load products based on selected category
    loadProducts() {
        this.isLoading = true;
        
        getProducts({ category: this.selectedCategory })
            .then(result => {
                this.products = JSON.parse(JSON.stringify(result));
                this.isLoading = false;
            })
            .catch(error => {
                console.error('Error loading products', error);
                this.isLoading = false;
            });
    }
    
    // Handle category filter change
    handleCategoryChange(event) {
        this.selectedCategory = event.detail.value;
        this.loadProducts();
    }
    
    // Call external service to check inventory
    checkInventory(event) {
        const productId = event.target.dataset.id;
        
        getInventoryStatus({ productId: productId })
            .then(result => {
                // Find the product and update its inventory status
                this.products = this.products.map(product => {
                    if (product.Id === productId) {
                        return { ...product, inventoryStatus: result };
                    }
                    return product;
                });
            })
            .catch(error => {
                console.error('Error checking inventory', error);
            });
    }
}