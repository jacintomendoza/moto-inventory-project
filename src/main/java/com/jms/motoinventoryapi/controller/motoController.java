package com.jms.motoinventoryapi.controller;

import com.jms.motoinventoryapi.model.Moto;
import com.jms.motoinventoryapi.repository.motoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//@CrossOrigin // may need?
@RestController
public class motoController {

    @Autowired
    private motoRepository motoRepo;

    @GetMapping(value="/")
    public String getPage() {
        return "Welcome";
    }

    @PostMapping(value = "/motorbike")
    public void saveMoto(@RequestBody Moto moto){
        motoRepo.save(moto);
    }

    @GetMapping(value = "/motorbike")
    public List<Moto> getMotos() { return motoRepo.findAll();}
}
