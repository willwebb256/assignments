public class Tool extends Product {
    private String category;

    // Constructor
    public Tool(int id, String name, double price, String category) {
        super(id, name, price);
        this.category = category;
    }

    // Additional methods specific to tools
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void useTool() {
        System.out.println("Using " + getName() + " for " + getCategory());
    }
}
