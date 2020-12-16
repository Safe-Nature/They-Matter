package org.safeNature.theyMatter.demo.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "animais")
public class AnimaisTable {

	@Id
	@Column
	private Long id;
	
	@Column
	private String nome;
	
	@Column
	private String descricao_animal;
	
	
	@OneToMany(mappedBy = "animais", fetch= FetchType.LAZY)
	@JsonIgnoreProperties("animais")
	private List<ProdutosTable> produtos;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getDescricao_animal() {
		return descricao_animal;
	}


	public void setDescricao_animal(String descricao_animal) {
		this.descricao_animal = descricao_animal;
	}


	public List<ProdutosTable> getProdutos() {
		return produtos;
	}


	public void setProdutos(List<ProdutosTable> produtos) {
		this.produtos = produtos;
	}

}
