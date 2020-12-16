package org.safeNature.theyMatter.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="produtos")
public class ProdutosTable {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String nome;
	
	@Column
	private double preco;
	
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
	public CategoriaTable categoria;
	
	@ManyToOne
	@JoinColumn(name = "id_animais")
	public AnimaisTable animais;


	public ProdutosTable(){
		
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

	

	public CategoriaTable getCategoria() {
		return categoria;
	}

	public void setCategoria(CategoriaTable categoria) {
		this.categoria = categoria;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;

	}


	public AnimaisTable getAnimais() {
		return animais;
	}


	public void setAnimais(AnimaisTable animais) {
		this.animais = animais;
	}
	
	
}
