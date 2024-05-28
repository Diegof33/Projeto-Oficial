package br.com.wellnesswave.wellnesswave.atividade;

import java.time.LocalDateTime;
import java.util.UUID;
import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "tb_Atividade")

public class AtividadeModel {

    @Id
    @GeneratedValue(generator = "UUID")
    private UUID Id;

    private String nomeUsuario;
    private String data;
    private String tipoAtividade;
    private float distanciaKm;
    private int duracaoMinutos;

    @CreationTimestamp
    private LocalDateTime createdAt;

}
