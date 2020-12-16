package org.safeNature.theyMatter.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="usuarios")
public class UsuariosTable {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	@NotNull
	private String nome;
	
	@Column
	@NotNull
	private String  email;
	
	@Column
	@NotNull
	private String password;

	@OneToOne(mappedBy = "usuarios")
	@JsonIgnoreProperties("usuarios")
	private LocationTable location;
	

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LocationTable getLocation() {
		return location;
	}

	public void setLocation(LocationTable location) {
		this.location = location;
	}
	
	
}
