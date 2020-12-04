package org.safeNature.theyMatter.demo.repository;

import org.safeNature.theyMatter.demo.model.CategoriaTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<CategoriaTable, Long> {
	
}
