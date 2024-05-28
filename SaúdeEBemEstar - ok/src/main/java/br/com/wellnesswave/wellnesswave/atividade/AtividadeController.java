package br.com.wellnesswave.wellnesswave.atividade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/atividade")
public class AtividadeController {

    @Autowired
    private AtividadeRepository atividadeRepository;

    @PostMapping("/create")
    public ResponseEntity<AtividadeModel> create(@RequestBody AtividadeModel atividadeModel) {
        AtividadeModel atividadeCreated = atividadeRepository.save(atividadeModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(atividadeCreated);
    }

    @GetMapping("/list-atividade")
    public ResponseEntity<List<AtividadeModel>> getAllAtividade() {
        List<AtividadeModel> atividadeList = atividadeRepository.findAll();
        if (atividadeList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(atividadeList);
    }
}
