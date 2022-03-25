package com.jms.motoinventoryapi.model;

import org.springframework.data.annotation.Id;

public class Moto {

    @Id
    private String id;

    private String vin;
    private String make;
    private String type;
    private Boolean inStock;
    private int invCount;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Boolean getInStock() {
        return inStock;
    }

    public void setInStock(Boolean inStock) {
        this.inStock = inStock;
    }

    public int getInvCount() {
        return invCount;
    }

    public void setInvCount(int invCount) {
        this.invCount = invCount;
    }
}
