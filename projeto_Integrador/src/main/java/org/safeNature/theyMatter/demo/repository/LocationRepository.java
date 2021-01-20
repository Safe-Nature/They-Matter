package org.safeNature.theyMatter.demo.repository;
import java.util.List;

import org.safeNature.theyMatter.demo.model.Location;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Long> {
	
	public List<Location> findAllByNomeContainingIgnoreCase(String nome);

		
}
