package org.safeNature.theyMatter.demo.model;

import java.time.Instant;
import java.util.List;

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
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="pedidos")
public class Pedidos {
    
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @NotNull
    private String status;

    @Column
    @NotNull
    private Double total;

    @Column
    @NotNull
    private String metodo;

    @Column
    @NotNull
    private Instant data = Instant.now();

    @ManyToOne
	@JsonIgnoreProperties("pedidos")
	private Usuarios usuarios;

    @JsonIgnoreProperties("pedidos")
    @OneToMany(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_produto")
	private List<Produtos> produto;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public List<Produtos> getProduto() {
        return produto;
    }

    public void setProduto(List<Produtos> produto) {
        this.produto = produto;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Instant getData() {
        return data;
    }

    public void setData(Instant data) {
        this.data = data;
    }

    public Usuarios getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Usuarios usuarios) {
        this.usuarios = usuarios;
    }

    public String getMetodo() {
        return metodo;
    }

    public void setMetodo(String metodo) {
        this.metodo = metodo;
    }
   
}
