package org.safeNature.theyMatter.demo.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="categoria")
public class Categoria {
	

	@Id
	@Column
	private Long id;
	
	@Column
	@NotNull
	private String nome;
	
	@Column
	@NotNull
	private String regiao;
	
	@OneToMany(mappedBy = "categoria", fetch= FetchType.LAZY)
	@JsonIgnoreProperties("categoria")
	private List<Produtos> produtos;

	//GETTERS E SETTERS
	
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getRegiao() {
		return regiao;
	}
	public void setRegiao(String regiao) {
		this.regiao = regiao;
	}

	public List<Produtos> getProdutos() {
		return produtos;
	}

	public void setProdutos(List<Produtos> produtos) {
		this.produtos = produtos;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
}
