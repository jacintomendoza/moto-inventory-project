package com.jms.motoinventoryapi.repository;

import com.jms.motoinventoryapi.model.Moto;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface motoRepository extends MongoRepository <Moto, String>{
    List<Moto> findByMake(String make);
    List<Moto> findByVin(String vin);
    List<Moto> findByType(String type);
}
