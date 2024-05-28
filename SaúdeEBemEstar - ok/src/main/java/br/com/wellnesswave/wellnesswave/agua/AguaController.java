package br.com.wellnesswave.wellnesswave.agua;

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
@RequestMapping("/agua")
public class AguaController {

    @Autowired
    private AguaRepository aguaRepository;

    @PostMapping("/create")
    public ResponseEntity<AguaModel> create(@RequestBody AguaModel aguaModel) {
        AguaModel aguaCreated = aguaRepository.save(aguaModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(aguaCreated);
    }

    @GetMapping("/list-agua")
    public ResponseEntity<List<AguaModel>> getAllAgua() {
        List<AguaModel> agua = aguaRepository.findAll();
        if (agua.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(agua);
    }
}
