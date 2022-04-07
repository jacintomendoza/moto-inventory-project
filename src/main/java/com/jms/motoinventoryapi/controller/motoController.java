package com.jms.motoinventoryapi.controller;

import com.jms.motoinventoryapi.model.Moto;
import com.jms.motoinventoryapi.repository.motoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/motorbikes")
public class motoController {

    @Autowired
    private motoRepository motoRepo;

    @GetMapping("/home")
    public String getPage() {
        return "Welcome! Spring Boot application is working!";
    }

    // GET SEARCH/FILTERED ///////////////////

    @GetMapping("/make/{make}")
    public List<Moto> getMake(@PathVariable String make){
        return motoRepo.findByMakeContainingIgnoreCase(make);
    }

    @GetMapping("/vin/{vin}")
    public List<Moto> getVin(@PathVariable String vin){
        return motoRepo.findByVinContainingIgnoreCase(vin);
    }

    @GetMapping("/type/{type}")
    public List<Moto> getType(@PathVariable String type){
        return motoRepo.findByTypeContainingIgnoreCase(type);
    }

    // STANDARD CRUD ///////////////////

    @PostMapping("/newbike")
    public void saveMoto(@RequestBody Moto moto){
        motoRepo.save(moto);
    }

    @GetMapping()
    public List<Moto> getMotos() { return motoRepo.findAll();}

    @PutMapping("/{id}")
    public void updateMoto(@PathVariable String id, @RequestBody Moto moto){
        Moto updatedMoto = motoRepo.findById(id).get();
        updatedMoto.setVin(moto.getVin());
        updatedMoto.setMake(moto.getMake());
        updatedMoto.setType(moto.getType());
        updatedMoto.setInStock(moto.getInStock());
        updatedMoto.setInvCount(moto.getInvCount());
        motoRepo.save(updatedMoto);
    }

    @DeleteMapping("/{id}")
    public void deleteMoto(@PathVariable String id){
        Moto deleteMoto = motoRepo.findById(id).get();
        motoRepo.delete(deleteMoto);
    }
}
