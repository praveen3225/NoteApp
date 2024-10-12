package com.example.SnapNotes.Control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SnapNotes.Model.SnapNoteModel;
import com.example.SnapNotes.Service.SnapNoteService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin
public class SnapNoteController {
	@Autowired
	SnapNoteService service;

	public SnapNoteService getService() {
		return service;
	}

	public void setService(SnapNoteService service) {
		this.service = service;
	}
	
	@GetMapping("/get-note")
	public List<SnapNoteModel> executeGetNotes() {
		return service.getNotes();
	}
	

}
