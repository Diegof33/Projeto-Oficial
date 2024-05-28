package br.com.wellnesswave.wellnesswave.alimentacao;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlimentacaoRepository extends JpaRepository<AlimentacaoModel, UUID> {
    AlimentacaoModel findBynomeUsuario(String nomeUsuario);
}
