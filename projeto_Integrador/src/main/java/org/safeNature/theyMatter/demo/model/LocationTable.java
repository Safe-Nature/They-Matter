package org.safeNature.theyMatter.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="location")
public class LocationTable {
	
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	@NotNull
	private String nome;
	
	@Column
	@NotNull
	private int numero;
	
	@Column
	@NotNull
	private String cep;
	
	@Column
	@NotNull
	private String cidade;
	
	@Column
	@NotNull
	private String uf;

	@OneToOne
	@JoinColumn(name = "id_usuarios")
	@JsonIgnoreProperties("location")
	private UsuariosTable usuarios;
	
	
	//GETTERS AND SETTERS
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public UsuariosTable getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(UsuariosTable usuarios) {
		this.usuarios = usuarios;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
	
}