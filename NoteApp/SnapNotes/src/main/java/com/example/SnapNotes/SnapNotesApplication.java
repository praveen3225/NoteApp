package com.example.SnapNotes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.example.SnapNotes.Model.SnapNoteModel;
import com.example.SnapNotes.Repo.SnapNoteRepo;

@SpringBootApplication
public class SnapNotesApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(SnapNotesApplication.class, args);
		SnapNoteModel s1 = context.getBean(SnapNoteModel.class);
		s1.setAuthor("Roman");
		s1.setTitle("Sculppin");
		s1.setContent("sample page 3");
		SnapNoteRepo repo = context.getBean(SnapNoteRepo.class);
		repo.save(s1);
	}

}
