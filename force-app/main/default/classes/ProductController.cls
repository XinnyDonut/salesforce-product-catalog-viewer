/**
 * ProductController.cls
 * Basic Apex controller to fetch product data
 */
public with sharing class ProductController {
    
    // Method to get product records
    @AuraEnabled(cacheable=true)
    public static List<Product2> getProducts(String category) {
        String query = 'SELECT Id, Name, Description, ProductCode, IsActive, Family ';
        query += 'FROM Product2 ';
        
        // Add filter if category is specified
        if (String.isNotBlank(category) && category != 'All') {
            query += 'WHERE Family = :category ';
        }
        
        query += 'ORDER BY Name LIMIT 50';
        
        return Database.query(query);
    }
    
    // Method to call external inventory service
    @AuraEnabled(cacheable=true)
    public static Map<String, Object> getInventoryStatus(String productId) {
        // For demo purposes, we'll simulate an API call
        // In a real project, you would call an actual external service
        
        // Simulate REST API callout
        Map<String, Object> result = new Map<String, Object>();
        
        // Random inventory between 0-100
        Integer inventory = Math.round(Math.random() * 100);
        result.put('inventory', inventory);
        result.put('status', inventory > 0 ? 'In Stock' : 'Out of Stock');
        
        return result;
    }
}