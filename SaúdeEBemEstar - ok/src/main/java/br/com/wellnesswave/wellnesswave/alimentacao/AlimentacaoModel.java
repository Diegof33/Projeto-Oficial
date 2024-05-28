package br.com.wellnesswave.wellnesswave.alimentacao;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;
import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "tb_Alimentacao")

public class AlimentacaoModel {

    @Id
    @GeneratedValue(generator = "UUID")
    private UUID Id;

    private String nomeUsuario;
    private LocalDate data;
    private String horarioAlimentacao;
    private String tipoAlimento;
    private float quantidadeCalorias;

    @CreationTimestamp
    private LocalDateTime createdAt;

}
