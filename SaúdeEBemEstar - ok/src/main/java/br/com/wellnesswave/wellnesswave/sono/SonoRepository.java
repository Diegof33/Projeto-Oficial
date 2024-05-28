package br.com.wellnesswave.wellnesswave.sono;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SonoRepository extends JpaRepository<SonoModel, UUID> {
    SonoModel findBynomeUsuario(String nomeUsuario);
}