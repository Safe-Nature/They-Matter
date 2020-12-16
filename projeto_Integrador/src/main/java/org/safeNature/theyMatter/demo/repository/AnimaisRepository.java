package org.safeNature.theyMatter.demo.repository;

import java.util.List;

import org.safeNature.theyMatter.demo.model.AnimaisTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimaisRepository extends JpaRepository <AnimaisTable, Long>{

	public List<AnimaisTable> findAllByNomeContainingIgnoreCase(String nome);
	
}
