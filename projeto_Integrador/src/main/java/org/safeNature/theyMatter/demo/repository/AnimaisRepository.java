package org.safeNature.theyMatter.demo.repository;

import java.util.List;

import org.safeNature.theyMatter.demo.model.Animais;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimaisRepository extends JpaRepository <Animais, Long>{

	public List<Animais> findAllByNomeContainingIgnoreCase(String nome);
	
}
