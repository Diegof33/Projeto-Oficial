package br.com.wellnesswave.wellnesswave.agua;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AguaRepository extends JpaRepository<AguaModel, UUID> {
    AguaModel findBynomeUsuario(String nomeUsuario);
}
