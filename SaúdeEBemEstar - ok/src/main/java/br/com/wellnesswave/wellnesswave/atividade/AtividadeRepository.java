package br.com.wellnesswave.wellnesswave.atividade;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AtividadeRepository extends JpaRepository<AtividadeModel, UUID> {
    AtividadeModel findBynomeUsuario(String nomeUsuario);
}
