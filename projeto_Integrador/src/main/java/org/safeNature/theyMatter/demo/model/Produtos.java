package org.safeNature.theyMatter.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="produtos")
public class Produtos {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String nome;
	
	@Column
	private double preco;
	
	@Column
	private String parcelamento;

	@Column
	private int estoque;
	
	@Column
	private String descricao;
	
	@Column
	private String tamanho;
	
	@Column
	private String imagem;
	
	@ManyToOne
	@JoinColumn(name = "id_categoria")
	@JsonIgnoreProperties("produtos")
	private Categoria categoria;
	
	@ManyToOne
	@JoinColumn(name = "id_animais")
	@JsonIgnoreProperties("produtos")
	private Animais animais;


	public Produtos(){
		
	}
	//GETTERS E SETTERS 
	

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	public int getEstoque() {
		return estoque;
	}

	public void setEstoque(int estoque) {
		this.estoque = estoque;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public String getTamanho() {
		return tamanho;
	}

	public void setTamanho(String tamanho) {
		this.tamanho = tamanho;
	}
	
	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;

	}

	public Animais getAnimais() {
		return animais;
	}

	public void setAnimais(Animais animais) {
		this.animais = animais;
	}

	public String getParcelamento() {
		return parcelamento;
	}

	public void setParcelamento(String parcelamento) {
		this.parcelamento = parcelamento;
	}	
	
}
