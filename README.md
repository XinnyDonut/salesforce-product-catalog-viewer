# Salesforce Product Catalog Viewer

A lightweight Salesforce application that demonstrates core Salesforce development concepts including Apex, Lightning Web Components, and API integration.

## Project Overview

This app provides a modern interface for viewing and filtering Salesforce products, with a simulated external inventory system integration. It's designed to showcase fundamental Salesforce development skills in a minimal, clean implementation.

## Technologies Used

- **Apex:** Server-side controller logic
- **Lightning Web Components (LWC):** Modern UI framework
- **SOQL:** Database queries
- **REST API:** Simulated external service integration
- **Salesforce Lightning Design System (SLDS):** UI styling

## Features

- Display products from the standard Salesforce Product2 object
- Filter products by category
- Simulate external API calls to check inventory status
- Responsive grid layout for product cards
- Loading state management

## Installation

1. Clone this repository
2. Deploy to a Salesforce org using Salesforce CLI:
   ```bash
   sf project deploy start
   ```
3. Create test data (products with different categories)
4. Access the app through the "Product Catalog" tab in the navigation

## Screenshots

![app screenshot](<appScreenshot.png>)

