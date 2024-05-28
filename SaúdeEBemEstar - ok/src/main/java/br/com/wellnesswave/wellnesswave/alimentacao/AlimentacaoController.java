package br.com.wellnesswave.wellnesswave.alimentacao;

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
@RequestMapping("/alimentacao")
public class AlimentacaoController {

    @Autowired
    private AlimentacaoRepository alimentacaoRepository;

    @PostMapping("/create")
    public ResponseEntity<AlimentacaoModel> create(@RequestBody AlimentacaoModel alimentacaoModel) {
        AlimentacaoModel alimentacaoCreated = alimentacaoRepository.save(alimentacaoModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(alimentacaoCreated);
    }

    @GetMapping("/list-alimentacao")
    public ResponseEntity<List<AlimentacaoModel>> getAllAlimentacao() {
        List<AlimentacaoModel> alimentacaoList = alimentacaoRepository.findAll();
        if (alimentacaoList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(alimentacaoList);
    }
}
