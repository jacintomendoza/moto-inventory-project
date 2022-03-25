package com.jms.motoinventoryapi.repository;

import com.jms.motoinventoryapi.model.Moto;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface motoRepository extends MongoRepository <Moto, Long>{
}
