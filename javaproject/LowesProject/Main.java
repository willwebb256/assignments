public class Main {
    public static void main(String[] args) {
        // Create an inventory
        Inventory inventory = new Inventory();

        // Create instances of different types of products
        Tool hammer = new Tool(1, "Hammer", 10.99, "Hand Tools");
        Accessory gloves = new Accessory(2, "Work Gloves", 5.99, "Safety");

        // Add products to the inventory
        inventory.addProduct(hammer);
        inventory.addProduct(gloves);

        // Display the current inventory
        inventory.displayInventory();

        
        // Apply military discount of 10% to the price of all products
        for (Product product : inventory.getProducts()) {
            double originalPrice = product.getPrice();
            double discountedPrice = originalPrice * 0.9; // 10% discount
            product.setPrice(discountedPrice);
        }


        // Create multiple threads to handle inventory operations concurrently
        Thread thread1 = new Thread(() -> {
            // Perform operations on inventory
            // ...
        });

        Thread thread2 = new Thread(() -> {
            // Perform operations on inventory
            // ...
        });

        // Start the threads
        thread1.start();
        thread2.start();

        // Wait for the threads to complete their tasks
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
