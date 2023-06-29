import java.util.ArrayList;
import java.util.List;

public class Inventory {
    private List<Product> products;

    public Inventory() {
        this.products = new ArrayList<>();
    }

    public void addProduct(Product product) {
        products.add(product);
    }

    public List<Product> getProducts() {
        return products;
    }

    public void displayInventory() {
        System.out.println("Current Inventory:");
        for (Product product : products) {
            System.out.println(product.getName() + " - $" + product.getPrice());
        }
    }
}
