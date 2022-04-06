package com.jms.motoinventoryapi.repository;

import com.jms.motoinventoryapi.model.Moto;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface motoRepository extends MongoRepository <Moto, String>{
    List<Moto> findByMakeContainingIgnoreCase(String make);
    List<Moto> findByVinContainingIgnoreCase(String vin);
    List<Moto> findByTypeContainingIgnoreCase(String type);
}
