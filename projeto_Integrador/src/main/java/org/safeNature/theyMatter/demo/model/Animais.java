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
public class Animais {

	@Id
	@Column
	private Long id;
	
	@Column
	private String nome;
	
	@Column
	private String descricao_animal;
	
	
	@OneToMany(mappedBy = "animais", fetch= FetchType.LAZY)
	@JsonIgnoreProperties("animais")
	private List<Produtos> produtos;


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


	public List<Produtos> getProdutos() {
		return produtos;
	}


	public void setProdutos(List<Produtos> produtos) {
		this.produtos = produtos;
	}

}
