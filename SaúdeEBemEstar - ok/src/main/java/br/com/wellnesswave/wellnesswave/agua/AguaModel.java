package br.com.wellnesswave.wellnesswave.agua;

import java.time.LocalDateTime;
import java.util.UUID;
import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "tb_Agua")

public class AguaModel {

    @Id
    @GeneratedValue(generator = "UUID")
    private UUID Id;

    private String nomeUsuario;
    private String horarioAgua;
    private float quantidadeAgua;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
