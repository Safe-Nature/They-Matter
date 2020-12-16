package org.safeNature.theyMatter.demo.repository;
import java.util.List;

import org.safeNature.theyMatter.demo.model.LocationTable;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<LocationTable, Long> {
	
	public List<LocationTable> findAllByNomeContainingIgnoreCase(String nome);

		
}
