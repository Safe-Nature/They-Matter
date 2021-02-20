package org.safeNature.theyMatter.demo.model;

import java.time.Instant;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "usuarios")
public class Usuarios {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name="usuarios_id")
	@NotNull
	private String nome;

	@Column
	@NotNull
	private String email;

	@Column
	@NotNull
	private String senha;

	@OneToMany(mappedBy = "usuarios",cascade = CascadeType.ALL)
	@JsonIgnoreProperties("usuarios")
	private List<Pedidos> pedido;

	@JsonIgnoreProperties("usuarios")
	@OneToMany(mappedBy = "usuarios", cascade = CascadeType.ALL)
	private List<Location> location;

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

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public List<Pedidos> getPedido() {
		return pedido;
	}

	public void setPedido(List<Pedidos> pedido) {
		this.pedido = pedido;
	}

	public List<Location> getLocation() {
		return location;
	}

	public void setLocation(List<Location> location) {
		this.location = location;
	}
}
