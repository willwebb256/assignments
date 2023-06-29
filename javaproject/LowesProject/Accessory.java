public class Accessory extends Product {
    private String type;

    // Constructor
    public Accessory(int id, String name, double price, String type) {
        super(id, name, price);
        this.type = type;
    }

    // Additional methods specific to accessories
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void applyAccessory() {
        System.out.println("Applying " + getName() + " of type " + getType());
    }
}
