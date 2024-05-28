package br.com.wellnesswave.wellnesswave.sono;

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
@RequestMapping("/sono")
public class SonoController {

    @Autowired
    private SonoRepository sonoRepository;

    @PostMapping("/create")
    public ResponseEntity<SonoModel> create(@RequestBody SonoModel sonoModel) {
        SonoModel sonoCreated = sonoRepository.save(sonoModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(sonoCreated);
    }

    @GetMapping("/list-sono")
    public ResponseEntity<List<SonoModel>> getAllSono() {
        List<SonoModel> sonoList = sonoRepository.findAll();
        if (sonoList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(sonoList);
    }
}
